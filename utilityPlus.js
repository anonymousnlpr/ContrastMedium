
function  transitate(temp,cy)
{
 var n_list_e= jQuery.extend(true, {}, list_e);
   // elimina tutti i parent
         
        var list_e = cy.elements('edge');
        
	   
       
        var n_list_e= jQuery.extend(true, {}, list_e);
        var f_e_list=[];
        
	   
	    cy.remove(list_e);
     // RIPRISTINA GLI ARCHI
	    var f_e_list  = [];
        for (var i=n_list_e.size()-1; i >= 0; i--) 
        {
                    if (n_list_e[i]!==undefined)
                    {
                        var ssource=n_list_e[i].data('source');
                        var starget =n_list_e[i].data('target')
                        var newn={data: { id: n_list_e[i].data('id'), source: ssource, target: starget, color: n_list_e[i].data('color'), 
                        style: n_list_e[i].data('style'), opacity: n_list_e[i].data('opacity'), weight: n_list_e[i].data('weight'), label: ''}};
                        f_e_list.push(newn);
                   }
		}
cy.add(cy.collection(n_list_e));
//ANIMA I NODI
 var arrayLength = temp.nodes.length;
 for (var i = 0; i < arrayLength; i++) 
 {
  var t_node=temp.nodes[i];
  var t_id=t_node.data.id;
  var o_node=cy.getElementById(t_id);
   		o_node.animate({
                style: {
                    'background-color': t_node.data.color,
                    'border-color':  t_node.data.bc,
                    'border-width': t_node.data.bw
                }
            }, {
                duration: 500,
                complete: function() {
                    
                }
            });
      
}//for
var arrayLength = temp.edges.length;
for (var i = 0; i < arrayLength; i++) 
{
  var t_edge=temp.edges[i];
  
  var t_id=t_edge.data.id;
  //console.log("TARGET ID:"+t_id+" "+t_edge.data.color);
  var o_edge=cy.getElementById(t_id);
  //console.log("O EDGE ID:"+o_edge.data('id')+" "+o_edge.data('color'));
  
    o_edge.data('style', t_edge.data.style);
  
   
   		o_edge.animate({
                style: {
                    
                    'line-color': t_edge.data.color,
                    'opacity': t_edge.data.opacity,
                    'target-arrow-color': t_edge.data.color,
                    'width': t_edge.data.weight
                }
            }, {
                duration: 500,
                complete: function() {
                    
                }
            });
      
}//for


}



function startLoad() {
	      $('#loading').show();    
     }

function endLoad() {

     $('#loading').hide();
    
     }


