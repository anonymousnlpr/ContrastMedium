function setState22() {
var stri = '<table><tr><td valign="top"><table><tr><th colspan="2">KB</th></tr><tr><th>Node</th><th>Weight</th></tr>';
stri =stri+ '<tr><td>R</td><td>0.3689914166883854</td></tr>';
stri =stri+ '<tr><td>l1</td><td>0.17296472657268067</td></tr>';
stri =stri+ '<tr><td>g1</td><td>0.16215443116188813</td></tr>';
stri =stri+ '<tr><td>l2</td><td>0.08107721558094406</td></tr>';
stri =stri+ '<tr><td>g2</td><td>0.07600988960713506</td></tr>';
stri =stri+ '<tr><td>l3</td><td>0.03800494480356753</td></tr>';
stri =stri+ '<tr><td>g3</td><td>0.03562963575334456</td></tr>';
stri =stri+ '<tr><td>l4</td><td>0.01781481787667228</td></tr>';
stri =stri+ '<tr><td>g4</td><td>0.016701391759380263</td></tr>';
stri =stri+ '<tr><td>l5</td><td>0.008350695879690131</td></tr>';
stri =stri+ '<tr><td>g5</td><td>0.007828777387209497</td></tr>';
stri =stri+ '<tr><td>l6</td><td>0.003914388693604749</td></tr>';
stri =stri+ '<tr><td>g6</td><td>0.003669739400254452</td></tr>';
stri =stri+ '<tr><td>l7</td><td>0.001834869700127226</td></tr>';
stri =stri+ '<tr><td>g7</td><td>0.0017201903438692743</td></tr>';
stri =stri+ '<tr><td>l8</td><td>0.0017201903438692743</td></tr>';
stri =stri+ '<tr><td>g8</td><td>0.0016126784473774448</td></tr>';
stri = stri+'</table></td><td valign="top">';
stri = stri+'<table><tr><th colspan="2">PCZ</th></tr><tr><th>Node</th><th>Weight</th></tr>';
stri =stri+'<tr><td>N_l1</td><td>0.2950927983662682</td></tr>';
stri =stri+'<tr><td>N_g1</td><td>0.2777343984623701</td></tr>';
stri =stri+'<tr><td>N_l2</td><td>0.13886719923118504</td></tr>';
stri =stri+'<tr><td>N_g2</td><td>0.13069854045288004</td></tr>';
stri =stri+'<tr><td>N_l3</td><td>0.06534927022644002</td></tr>';
stri =stri+'<tr><td>N_g3</td><td>0.06150519550723767</td></tr>';
stri =stri+'<tr><td>N_l4</td><td>0.030752597753618834</td></tr>';
stri =stri+'<tr><td>N_R</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_g4</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_l5</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_g5</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_l6</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_g6</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_l7</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_g7</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_l8</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_g8</td><td>0.0</td></tr>';
stri = stri+'</table></td><td colspan="2" valign="top"><table><tr><th>Pruned Graph</th></tr><tr><th>Resulting edges</th></tr>';
stri = stri+'<tr><td>N_l8->N_g8</td></tr>';
stri = stri+'<tr><td>N_l7->N_l8</td></tr>';
stri = stri+'<tr><td>N_l7->N_g7</td></tr>';
stri = stri+'<tr><td>N_l6->N_l7</td></tr>';
stri = stri+'<tr><td>N_l6->N_g6</td></tr>';
stri = stri+'<tr><td>N_l5->N_l6</td></tr>';
stri = stri+'<tr><td>N_l5->N_g5</td></tr>';
stri = stri+'<tr><td>N_l4->N_l5</td></tr>';
stri = stri+'<tr><td>N_l4->N_g4</td></tr>';
stri = stri+'<tr><td>N_l3->N_l4</td></tr>';
stri = stri+'<tr><td>N_l3->N_g3</td></tr>';
stri = stri+'<tr><td>N_l2->N_l3</td></tr>';
stri = stri+'<tr><td>N_l2->N_g2</td></tr>';
stri = stri+'<tr><td>N_l1->N_l2</td></tr>';
stri = stri+'<tr><td>N_l1->N_g1</td></tr>';
stri = stri+'<tr><td>N_R->N_l1</td></tr>';
stri = stri+'</table></td><td> <div id="myDiagramDiv" style="border: solid 1px black; width:800px; height:400px"></div></td></tr></table>';
var temp = {
nodes: [
{ data: { id: 'R',color:'#ff2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l1',color:'#ff2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g1',color:'#ff2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l2',color:'#ff2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g2',color:'#ff2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l3',color:'#912800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g3',color:'#882800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l4',color:'#442800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g4',color:'#3f2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l5',color:'#1f2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g5',color:'#1d2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l6',color:'#0e2873', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g6',color:'#0e2873', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l7',color:'#0728b9', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g7',color:'#0628c3', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l8',color:'#0628c3', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g8',color:'#0628c3', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_R',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_l1',color:'#ff2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_g1',color:'#ff2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_l2',color:'#b12800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_g2',color:'#a62800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_l3',color:'#532806', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_g3',color:'#4e2815', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_l4',color:'#27288a', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_g4',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_l5',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_g5',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_l6',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_g6',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_l7',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_g7',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_l8',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_g8',color:'#0028ff', bc: '#0000FF', bw: '0' } }

],
edges: [
{ data: { id: 'R---l1', style: 'solid', opacity : '0.7', weight:'2', source: 'R', target: 'l1' , color: '#000000' } }
,{ data: { id: 'l1---g1', style: 'solid', opacity : '0.7', weight:'2', source: 'l1', target: 'g1' , color: '#000000' } }
,{ data: { id: 'l1---l2', style: 'solid', opacity : '0.7', weight:'2', source: 'l1', target: 'l2' , color: '#000000' } }
,{ data: { id: 'l2---g2', style: 'solid', opacity : '0.7', weight:'2', source: 'l2', target: 'g2' , color: '#000000' } }
,{ data: { id: 'l2---l3', style: 'solid', opacity : '0.7', weight:'2', source: 'l2', target: 'l3' , color: '#000000' } }
,{ data: { id: 'l3---g3', style: 'solid', opacity : '0.7', weight:'2', source: 'l3', target: 'g3' , color: '#000000' } }
,{ data: { id: 'l3---l4', style: 'solid', opacity : '0.7', weight:'2', source: 'l3', target: 'l4' , color: '#000000' } }
,{ data: { id: 'l4---g4', style: 'solid', opacity : '0.7', weight:'2', source: 'l4', target: 'g4' , color: '#000000' } }
,{ data: { id: 'l4---l5', style: 'solid', opacity : '0.7', weight:'2', source: 'l4', target: 'l5' , color: '#000000' } }
,{ data: { id: 'l5---g5', style: 'solid', opacity : '0.7', weight:'2', source: 'l5', target: 'g5' , color: '#000000' } }
,{ data: { id: 'l5---l6', style: 'solid', opacity : '0.7', weight:'2', source: 'l5', target: 'l6' , color: '#000000' } }
,{ data: { id: 'l6---g6', style: 'solid', opacity : '0.7', weight:'2', source: 'l6', target: 'g6' , color: '#000000' } }
,{ data: { id: 'l6---l7', style: 'solid', opacity : '0.7', weight:'2', source: 'l6', target: 'l7' , color: '#000000' } }
,{ data: { id: 'l7---g7', style: 'solid', opacity : '0.7', weight:'2', source: 'l7', target: 'g7' , color: '#000000' } }
,{ data: { id: 'l7---l8', style: 'solid', opacity : '0.7', weight:'2', source: 'l7', target: 'l8' , color: '#000000' } }
,{ data: { id: 'l8---g8', style: 'solid', opacity : '0.7', weight:'2', source: 'l8', target: 'g8' , color: '#000000' } }
,{ data: { id: 'N_R---N_l1', style: 'solid', opacity : '0.7', weight:'2', source: 'N_R', target: 'N_l1' , color: '#000000' } }
,{ data: { id: 'N_l1---N_g1', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l1', target: 'N_g1' , color: '#000000' } }
,{ data: { id: 'N_l1---N_l2', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l1', target: 'N_l2' , color: '#000000' } }
,{ data: { id: 'N_l2---N_g2', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l2', target: 'N_g2' , color: '#000000' } }
,{ data: { id: 'N_l2---N_l3', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l2', target: 'N_l3' , color: '#000000' } }
,{ data: { id: 'N_l3---N_g3', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l3', target: 'N_g3' , color: '#000000' } }
,{ data: { id: 'N_l3---N_l4', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l3', target: 'N_l4' , color: '#000000' } }
,{ data: { id: 'N_l4---N_g4', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l4', target: 'N_g4' , color: '#000000' } }
,{ data: { id: 'N_l4---N_l5', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l4', target: 'N_l5' , color: '#000000' } }
,{ data: { id: 'N_l5---N_g5', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l5', target: 'N_g5' , color: '#000000' } }
,{ data: { id: 'N_l5---N_l6', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l5', target: 'N_l6' , color: '#000000' } }
,{ data: { id: 'N_l6---N_g6', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l6', target: 'N_g6' , color: '#000000' } }
,{ data: { id: 'N_l6---N_l7', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l6', target: 'N_l7' , color: '#000000' } }
,{ data: { id: 'N_l7---N_g7', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l7', target: 'N_g7' , color: '#000000' } }
,{ data: { id: 'N_l7---N_l8', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l7', target: 'N_l8' , color: '#000000' } }
,{ data: { id: 'N_l8---N_g8', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l8', target: 'N_g8' , color: '#000000' } }
,{ data: { id: 'N_l8---N_l1', style: 'solid', opacity : '0.7', weight:'2', source: 'N_l8', target: 'N_l1' , color: '#000000' } }
,{ data: { id: 'l1---N_l1', style: 'dashed', opacity : '1.0', weight:'2', source: 'l1', target: 'N_l1' , color: '#ff6699' } }

]
};
transitate(temp,mygraph4);
document.getElementById('webpanel').innerHTML = stri;
init();
}
function init() {
var $ = go.GraphObject.make;  // for conciseness in defining templates
myDiagram = $(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
   {
                    initialContentAlignment: go.Spot.Center,  // center the content
         "undoManager.isEnabled": true,  // enable undo & redo
         layout: $(go.TreeLayout, { nodeSpacing: 1, comparer: go.LayoutVertex.smartComparer })
                  });
myDiagram.nodeTemplate =
  $(go.Node, "Auto",  // the Shape will go around the TextBlock
      $(go.Shape, "RoundedRectangle", { strokeWidth: 0},
// Shape.fill is bound to Node.data.color
new go.Binding("fill", "color")),
$(go.TextBlock,
{ margin: 8 },  // some room around the text
new go.Binding("text", "key"))
);
myDiagram.model = new go.GraphLinksModel(
[
{ key: "N_g8", color: "lightblue" },
{ key: "N_l8", color: "lightblue" },
{ key: "N_g7", color: "lightblue" },
{ key: "N_l7", color: "lightblue" },
{ key: "N_g6", color: "lightblue" },
{ key: "N_l6", color: "lightblue" },
{ key: "N_g5", color: "lightblue" },
{ key: "N_l5", color: "lightblue" },
{ key: "N_g4", color: "lightblue" },
{ key: "N_R", color: "lightblue" },
{ key: "N_l4", color: "lightblue" },
{ key: "N_g3", color: "lightblue" },
{ key: "N_l3", color: "lightblue" },
{ key: "N_g2", color: "lightblue" },
{ key: "N_l2", color: "lightblue" },
{ key: "N_g1", color: "lightblue" },
{ key: "N_l1", color: "lightblue" },
],
[
{ from: "N_l8", to: "N_g8" },
{ from: "N_l7", to: "N_l8" },
{ from: "N_l7", to: "N_g7" },
{ from: "N_l6", to: "N_l7" },
{ from: "N_l6", to: "N_g6" },
{ from: "N_l5", to: "N_l6" },
{ from: "N_l5", to: "N_g5" },
{ from: "N_l4", to: "N_l5" },
{ from: "N_l4", to: "N_g4" },
{ from: "N_l3", to: "N_l4" },
{ from: "N_l3", to: "N_g3" },
{ from: "N_l2", to: "N_l3" },
{ from: "N_l2", to: "N_g2" },
{ from: "N_l1", to: "N_l2" },
{ from: "N_l1", to: "N_g1" },
{ from: "N_R", to: "N_l1" },
 ]);
}
