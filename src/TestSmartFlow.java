
import de.unima.smartpruning.flow.Flow2;
import java.util.HashSet;
import java.util.Set;

import org.jgrapht.graph.DefaultDirectedGraph;
import org.jgrapht.graph.DefaultEdge;

import com.google.common.collect.HashMultimap;
import it.uniroma1.lcl.jlt.util.DoubleCounter;
import java.util.List;


public class TestSmartFlow {

    public static final int count = 2;

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {

        int testnum = 0; //change it from 0 to 1
        DefaultDirectedGraph<String, DefaultEdge> kb = getKBGraph();
        DefaultDirectedGraph<String, DefaultEdge> test = getTestGraph(testnum);

        System.out.println("$KB graph:");
        for (DefaultEdge de : kb.edgeSet()) {
            System.out.println(kb.getEdgeSource(de) + "\t" + kb.getEdgeTarget(de));
        }
        System.out.println("******");
        System.out.println("$TEST graph:");
        for (DefaultEdge de : test.edgeSet()) {
            System.out.println(test.getEdgeSource(de) + "\t" + test.getEdgeTarget(de));
        }

        System.out.println("******");
        DoubleCounter<String> initial = new DoubleCounter<>();
        initial.count(getRoot(testnum), 1.0);
        System.out.println("$KB ROOT:" + getRoot(testnum));
        System.out.println("$KB ROOT weight:" + 1.0);
        System.out.println("$KB_DW_STEP:");
        DoubleCounter<String> flow = Flow2.getFlow(initial, kb, kb.edgeSet().size(), false);

        for (String s : flow.getSortedElements()) {
            System.out.println(s + "\t" + flow.getProbability(s) + "\t" + kb.outDegreeOf(s));
        }
        System.out.println("******");
        DoubleCounter<String> test_initial = getInitial(testnum, flow, true);
        DoubleCounter<String> flowtesUPt = null;
        boolean top = istop(testnum, flow, false);
        for (int k = 0; k < count; k++) {
            System.out.println("$DWSTEP_" + k + ":");
            if (k > 0) {
                test_initial = flowtesUPt;
            }
            DoubleCounter<String> flowtest = Flow2.getFlow(test_initial, test, kb.edgeSet().size(), top);

            System.out.println("******");
            if (k == count - 1) {
                flowtesUPt = flowtest;
                break;
            }
            System.out.println("$UPSTEP_" + k + ":");

            flowtesUPt = Flow2.getFlowInverted(flowtest, test, test.edgeSet().size(), top);

            System.out.println("******");
        }
        DefaultDirectedGraph<String, DefaultEdge> finalgraph = renderFromFlow(test, flowtesUPt);
        System.out.println("$FINAL graph:");
        for (DefaultEdge de : finalgraph.edgeSet()) {
            System.out.println(finalgraph.getEdgeSource(de) + "\t" + finalgraph.getEdgeTarget(de));
        }

    }

    public static DefaultDirectedGraph<String, DefaultEdge> renderFromFlow(DefaultDirectedGraph<String, DefaultEdge> graph, DoubleCounter<String> flowtesUPt) {
        System.out.println("$RECONSTRUCTING:");
        DefaultDirectedGraph<String, DefaultEdge> result = new DefaultDirectedGraph<>(DefaultEdge.class);
        HashMultimap<Double, String> levels = HashMultimap.create();
        for (String s : flowtesUPt.keySet()) {
            levels.put(flowtesUPt.get(s), s);
        }
        List<String> sequence = flowtesUPt.getSortedElements();
        for (int i = sequence.size() - 1; i > 0; i--) {
            boolean done = false;
            String element = sequence.get(i);
            result.addVertex(element);
            for (String t : levels.get(flowtesUPt.get(element))) {
                result.addVertex(t);
                if (t.equals(element)) {
                    continue;
                }
                if (graph.containsEdge(t, element)) {
                    result.addEdge(t, element);
                    System.out.println("ADDED: " + t + "->" + element);
                    done = true;
                    break;
                }
            }
            if (done) {
                continue;
            }
            for (int j = i - 1; j >= 0; j--) {
                String t = sequence.get(j);
                result.addVertex(t);
                if (graph.containsEdge(t, element)) {
                    result.addEdge(t, element);
                    System.out.println("ADDED: " + t + "->" + element);
                    done = true;
                    break;
                }
            }
            if (done) {
                continue;
            }
            for (int j = sequence.size() - 1; j > i; j--) {
                String t = sequence.get(j);
                result.addVertex(t);
                if (graph.containsEdge(t, element)) {

                    result.addEdge(t, element);
                    System.out.println("ADDED: " + t + "->" + element);
                    break;
                }
            }
        }
        return result;
    }

    public static DoubleCounter<String> getInitial(int index, DoubleCounter<String> flow, boolean print) {
        DoubleCounter<String> initial = new DoubleCounter<>();
        HashMultimap<String, String> links = getISAandSAMEas(index, print);
        for (String s : links.keySet()) {
            DoubleCounter<String> cc = new DoubleCounter<>();
            for (String t : links.get(s)) {
                cc.count(t, flow.get(t));
            }
            initial.count(s, cc.getBottomValue());
        }
        return initial;
    }

    public static boolean getRlinked(int index, DoubleCounter<String> flow, boolean print) {

        HashMultimap<String, String> links = getISAandSAMEas(index, print);
        for (String s : links.keySet()) {
            for (String t : links.get(s)) {
                if (t.equals(getRoot(index)));

            }

        }
        return false;
    }

    public static boolean istop(int index, DoubleCounter<String> flow, boolean print) {

        HashMultimap<String, String> links = getISAandSAMEas(index, print);
        int half = flow.keySet().size() / 2;

        double halfvalue = 0.0;
        int ac = 0;
        for (String s : flow.keySet()) {
            ac++;
            if (ac == half) {
                halfvalue = flow.get(s);
                break;
            }
        }
        double tot = 0.0;
        for (String s : links.keySet()) {

            for (String t : links.get(s)) {
                tot += flow.get(t);
            }
        }
        if (((double) tot / (double) links.keySet().size()) >= halfvalue) 
        {
            return true;
        }
        return false;
    }

    public static HashMultimap<String, String> getISAandSAMEas(int index, boolean print) {
        HashMultimap<String, String> result = HashMultimap.create();
        switch (index) {
            case 0:
                result.put("N_R", "R");
                break;
          
            case 1:
                result.put("N_l1", "l1");
                break;

            default:
                break;
        }
        if (print) {
            for (String s : result.keySet()) {
                for (String t : result.get(s)) {
                    System.out.println("$SAMEAS:" + s + "\t" + t);
                }
            }
        }
        return result;
    }

    public static String getRoot(int index) {

        String result = "R";
        return result;
    }

    public static DefaultDirectedGraph<String, DefaultEdge> getKBGraph() {

        DefaultDirectedGraph<String, DefaultEdge> result = new DefaultDirectedGraph<>(DefaultEdge.class);
        Set<String> verts = getKBnodes();
        for (String s : verts) {
            result.addVertex(s);
        }
        result.addEdge("R", "l1");
        result.addEdge("l1", "g1");
        result.addEdge("l1", "l2");
        result.addEdge("l2", "g2");
        result.addEdge("l2", "l3");
        result.addEdge("l3", "g3");
        result.addEdge("l3", "l4");
        result.addEdge("l4", "g4");
        result.addEdge("l4", "l5");
        result.addEdge("l5", "g5");
        result.addEdge("l5", "l6");
        result.addEdge("l6", "g6");
        result.addEdge("l6", "l7");
        result.addEdge("l7", "g7");
        result.addEdge("l7", "l8");
        result.addEdge("l8", "g8");

        return result;
    }

    public static DefaultDirectedGraph<String, DefaultEdge> getTestGraph(int index) {

        DefaultDirectedGraph<String, DefaultEdge> result = new DefaultDirectedGraph<>(DefaultEdge.class); //getKBGraph();

        switch (index) {

            case 0:
                result.addVertex("N_R");
                result.addVertex("N_l1_1");
                result.addVertex("N_l1_2");
                result.addVertex("N_l1_3");
                result.addVertex("N_l2_1");
                result.addVertex("N_g1");
                result.addVertex("N_g2");
                result.addVertex("N_g3");
                result.addEdge("N_R", "N_l1_1");
                result.addEdge("N_R", "N_l1_2");
                result.addEdge("N_R", "N_l1_3");
                result.addEdge("N_l1_3", "N_g3");
                result.addEdge("N_l1_1", "N_l2_1");
                result.addEdge("N_l1_2", "N_l2_1");
                result.addEdge("N_l2_1", "N_g1");
                result.addEdge("N_l2_1", "N_g2");

                result.addEdge("N_g1", "N_R");
                result.addEdge("N_g2", "N_l1_1");
                result.addEdge("N_g3", "N_l1_1");
                result.addEdge("N_l2_1", "N_R");
                break;
         
            case 1:
                Set<String> verts = getKBnodes();
                for (String s : verts) {
                    result.addVertex("N_" + s);
                }
                result.addEdge("N_R", "N_l1");
                result.addEdge("N_l1", "N_g1");
                result.addEdge("N_l1", "N_l2");
                result.addEdge("N_l2", "N_g2");
                result.addEdge("N_l2", "N_l3");
                result.addEdge("N_l3", "N_g3");
                result.addEdge("N_l3", "N_l4");
                result.addEdge("N_l4", "N_g4");
                result.addEdge("N_l4", "N_l5");
                result.addEdge("N_l5", "N_g5");
                result.addEdge("N_l5", "N_l6");
                result.addEdge("N_l6", "N_g6");
                result.addEdge("N_l6", "N_l7");
                result.addEdge("N_l7", "N_g7");
                result.addEdge("N_l7", "N_l8");
                result.addEdge("N_l8", "N_g8");
                result.addEdge("N_l8", "N_R");
            default:
                break;

        }
        return result;

    }

    public static Set<String> getKBnodes() {
        Set<String> result = new HashSet<>();
        result.add("R");
        result.add("l1");
        result.add("l2");
        result.add("l3");
        result.add("l4");
        result.add("l5");
        result.add("l6");
        result.add("l7");
        result.add("l8");
        result.add("g1");
        result.add("g2");
        result.add("g3");
        result.add("g4");
        result.add("g5");
        result.add("g6");
        result.add("g7");
        result.add("g8");
        return result;
    }
}
