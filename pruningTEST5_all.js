$(function(){ // on dom ready
startLoad();
var graph5 = {
nodes: [
{ data: { id: 'R', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:7 , y:9} }
,{ data: { id: 'l1', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:5 , y:8} }
,{ data: { id: 'g1', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:5 , y:7} }
,{ data: { id: 'l2', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:9 , y:5} }
,{ data: { id: 'g2', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:0 , y:0} }
,{ data: { id: 'l3', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:3 , y:9} }
,{ data: { id: 'g3', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:1 , y:3} }
,{ data: { id: 'l4', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:7 , y:4} }
,{ data: { id: 'g4', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:6 , y:9} }
,{ data: { id: 'l5', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:5 , y:8} }
,{ data: { id: 'g5', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:2 , y:7} }
,{ data: { id: 'l6', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:5 , y:2} }
,{ data: { id: 'g6', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:7 , y:0} }
,{ data: { id: 'l7', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:6 , y:4} }
,{ data: { id: 'g7', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:9 , y:9} }
,{ data: { id: 'l8', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:4 , y:9} }
,{ data: { id: 'g8', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:1 , y:2} }
,{ data: { id: 'N_R', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:4 , y:9} }
,{ data: { id: 'N_L', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:4 , y:5} }
,{ data: { id: 'N_M', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:7 , y:2} }
,{ data: { id: 'N_N', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:8 , y:7} }
,{ data: { id: 'N_G', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:6 , y:3} }
,{ data: { id: 'KB', color: '#ffdd99', bw: '0', bc:'#111111'}, position:{ x:0 , y:0} }
,{ data: { id: 'PCZ', color: '#66ff99', bw: '0', bc:'#111111'}, position:{ x:0 , y:0} }

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
,{ data: { id: 'N_R---N_L', style: 'solid', opacity : '0.7', weight:'2', source: 'N_R', target: 'N_L' , color: '#000000' } }
,{ data: { id: 'N_L---N_M', style: 'solid', opacity : '0.7', weight:'2', source: 'N_L', target: 'N_M' , color: '#000000' } }
,{ data: { id: 'N_M---N_N', style: 'solid', opacity : '0.7', weight:'2', source: 'N_M', target: 'N_N' , color: '#000000' } }
,{ data: { id: 'N_N---N_G', style: 'solid', opacity : '0.7', weight:'2', source: 'N_N', target: 'N_G' , color: '#000000' } }
,{ data: { id: 'N_G---N_L', style: 'solid', opacity : '0.7', weight:'2', source: 'N_G', target: 'N_L' , color: '#000000' } }
,{ data: { id: 'g8---N_G', style: 'dashed', opacity : '1.0', weight:'2', source: 'g8', target: 'N_G' , color: '#ff6699' } }

]
};
mygraph5= cytoscape({
container: document.getElementById('graph5'),
style: cytoscape.stylesheet()
.selector('node')
.css({
'text-valign': 'center',
'text-halign': 'center',
'font-size' : '30',
'width' :'90',
'height' :'50',
'shape' : 'roundrectangle',
'font-weight' : 'bold',
'content': 'data(id)',
'background-color': 'data(color)',
'border-color': 'data(bc)',
'color' : '#FFFFFF',
'border-width': 'data(bw)'
})
.selector('edge')
.css({
'line-style': 'data(style)',
'line-color': 'data(color)',
'target-arrow-color': 'data(color)',
'width': 'data(weight)',
'target-arrow-shape': 'triangle',
'opacity': 'data(opacity)'
})
.selector(':parent')
.css({
'padding-top': '10px',
'color' : '#000000',
'padding-left': '10px',
'padding-bottom': '10px',
'padding-right': '10px',
'text-valign': 'top',
'text-halign': 'center',
'background-opacity': 0.6
})
.selector(':selected')
.css({
'background-color': 'white',
'line-color': 'black',
'target-arrow-color': 'black',
'source-arrow-color': 'black',
'opacity': 1
})
.selector('.faded')
.css({
'opacity': 0.25,
'text-opacity': 0
}),
elements: graph5,
layout: {
name: 'cose-bilkent',
},
 ready: function(){
document.getElementById('bfit').style.visibility='hidden';
document.getElementById('blayout').style.visibility='hidden';
document.getElementById('graph5').style.visibility='hidden';
document.getElementById('facts').style.visibility='hidden';
var filename ='pruningTEST5_facts/1.js';
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = filename;
script.onload = script.onreadystatechange = function() {
 if (!script.readyState || script.readyState === 'complete') {
 var call =eval('setState1').call();
document.getElementById('bfit').style.visibility='visible';
document.getElementById('blayout').style.visibility='visible';
}
};
var head = document.getElementsByTagName('head')[0];
head.insertBefore(script, head.firstChild);
},
done: function(){
this.fit();
document.getElementById('blayout').style.visibility='visible';
document.getElementById('bfit').style.visibility='visible';
document.getElementById('graph5').style.visibility='visible';
document.getElementById('facts').style.visibility='visible';
endLoad();
 }
});
}); // on dom ready
