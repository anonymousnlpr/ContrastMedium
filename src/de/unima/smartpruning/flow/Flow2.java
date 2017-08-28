/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.unima.smartpruning.flow;

import it.uniroma1.lcl.jlt.util.DoubleCounter;
import java.util.Collection;
import java.util.Iterator;
import org.jgrapht.graph.DefaultDirectedGraph;
import org.jgrapht.graph.DefaultEdge;

import java.util.ArrayList;

/**
 *
 * @author sfaralli
 */
public class Flow2 {

    public static DoubleCounter<String> getFlow(DoubleCounter<String> initial, DefaultDirectedGraph<String, DefaultEdge> graph, int cycles, boolean top) {
        DoubleCounter<String> passed = new DoubleCounter<>();
        DoubleCounter<String> actual = new DoubleCounter<>();

        //reset iniziale
        for (String s : graph.vertexSet()) {
            passed.reset(s, 0.0);
            actual.reset(s, 0.0);
        }
        for (String s : initial.keySet()) {
            actual.reset(s, initial.get(s));
        }
        for (int i = 0; i < cycles; i++) {
            DoubleCounter<String> next = new DoubleCounter<String>();
            // passa su tutti i vertici con actual<>0
            for (String s : actual.keySet()) {
                if (actual.get(s) > 0.0) {
                    double tot = actual.get(s);

                    Collection<DefaultEdge> des = new ArrayList<DefaultEdge>();
                    if (graph.containsVertex(s)) {
                        des.addAll(graph.outgoingEdgesOf(s));
                    }
                    for (Iterator<DefaultEdge> it = des.iterator(); it.hasNext();) {
                        DefaultEdge de = it.next();
                        String target = graph.getEdgeTarget(de);
                        if (!target.equals(s)) {
                            next.count(target, (double) tot / des.size());
                        }
                    }
                    if (des.size() > 0) {
                        passed.count(s, (double) tot / des.size());
                    } else {
                        passed.count(s, tot);
                    }
                }
            }

            actual = next;
        }

        return passed;
    }

    public static DoubleCounter<String> getFlowInverted(DoubleCounter<String> initial, DefaultDirectedGraph<String, DefaultEdge> graph, int cycles, boolean top) {
        DoubleCounter<String> passed = new DoubleCounter<>();
        DoubleCounter<String> actual = new DoubleCounter<>();

        
        for (String s : graph.vertexSet()) {
            passed.reset(s, 0.0);
            actual.reset(s, 0.0);
        }
        for (String s : initial.keySet()) {
            actual.reset(s, initial.get(s));
        }
        for (int i = 0; i < cycles; i++) {
            DoubleCounter<String> next = new DoubleCounter<>();
            
            for (String s : actual.keySet()) {
                if (actual.get(s) > 0.0) {
                    double tot = actual.get(s);

                    Collection<DefaultEdge> des = new ArrayList<>();
                    if (graph.containsVertex(s)) {
                        des.addAll(graph.incomingEdgesOf(s));
                    }
                    for (Iterator<DefaultEdge> it = des.iterator(); it.hasNext();) {
                        DefaultEdge de = it.next();
                        String source = graph.getEdgeSource(de);
                        if (!source.equals(s)) {

                            next.reset(source, (double) tot / des.size());
                            passed.count(s, (double) tot / des.size());
                        }
                    }

                }
            }

            actual = next;
        }

        return passed;
    }
}
