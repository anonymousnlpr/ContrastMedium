$(function(){ // on dom ready
startLoad();
var graph4 = {
nodes: [
{ data: { id: 'R', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:0 , y:8} }
,{ data: { id: 'l1', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:2 , y:3} }
,{ data: { id: 'g1', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:4 , y:3} }
,{ data: { id: 'l2', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:8 , y:0} }
,{ data: { id: 'g2', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:3 , y:9} }
,{ data: { id: 'l3', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:6 , y:9} }
,{ data: { id: 'g3', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:7 , y:6} }
,{ data: { id: 'l4', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:4 , y:4} }
,{ data: { id: 'g4', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:6 , y:7} }
,{ data: { id: 'l5', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:5 , y:9} }
,{ data: { id: 'g5', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:5 , y:0} }
,{ data: { id: 'l6', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:9 , y:9} }
,{ data: { id: 'g6', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:6 , y:9} }
,{ data: { id: 'l7', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:8 , y:9} }
,{ data: { id: 'g7', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:4 , y:9} }
,{ data: { id: 'l8', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:4 , y:2} }
,{ data: { id: 'g8', parent: 'KB', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:7 , y:7} }
,{ data: { id: 'N_R', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:3 , y:3} }
,{ data: { id: 'N_l1', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:8 , y:1} }
,{ data: { id: 'N_g1', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:8 , y:3} }
,{ data: { id: 'N_l2', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:0 , y:2} }
,{ data: { id: 'N_g2', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:8 , y:8} }
,{ data: { id: 'N_l3', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:6 , y:9} }
,{ data: { id: 'N_g3', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:5 , y:9} }
,{ data: { id: 'N_l4', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:5 , y:2} }
,{ data: { id: 'N_g4', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:7 , y:9} }
,{ data: { id: 'N_l5', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:3 , y:1} }
,{ data: { id: 'N_g5', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:7 , y:1} }
,{ data: { id: 'N_l6', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:5 , y:2} }
,{ data: { id: 'N_g6', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:8 , y:0} }
,{ data: { id: 'N_l7', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:8 , y:4} }
,{ data: { id: 'N_g7', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:4 , y:3} }
,{ data: { id: 'N_l8', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:0 , y:3} }
,{ data: { id: 'N_g8', parent: 'PCZ', bc: '#0000FF', bw: '0', color:'#0000FF'}, position:{ x:7 , y:2} }
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
mygraph4= cytoscape({
container: document.getElementById('graph4'),
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
elements: graph4,
layout: {
name: 'cose-bilkent',
},
 ready: function(){
document.getElementById('bfit').style.visibility='hidden';
document.getElementById('blayout').style.visibility='hidden';
document.getElementById('graph4').style.visibility='hidden';
document.getElementById('facts').style.visibility='hidden';
var filename ='pruningTEST4_facts/1.js';
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
document.getElementById('graph4').style.visibility='visible';
document.getElementById('facts').style.visibility='visible';
endLoad();
 }
});
}); // on dom ready
