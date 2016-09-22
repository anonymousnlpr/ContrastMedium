function showHistory(cy) 
{
}

function hideHistory(cy) 
{

}


function sistema(cy) 
{
  cy.layout({name: 'cose-bilkent'});
}

function loadURL(u) { 
    $.ajax({
        url: u,
        cache: false
    }).done(function(data) {
        $("#web-panel").html(data);
    });
}




jQuery(document).ready(function($) {

    document.getElementById('bfit').style.visibility='hidden';
						document.getElementById('blayout').style.visibility='hidden';
					
    $(".clickable-row").click(function() {
    $(".clickable-row").css('background-color','#FFFFFF');
    $(this).css('background-color','#FFFF00');
    var name ="setState"+$(this).data("fact");
    var tname ="setTable"+$(this).data("fact");
    var filename = $(this).data("fold")+"/"+$(this).data("fact")+".js";
    var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = filename;
	script.onload = script.onreadystatechange = function() {
    if (!script.readyState || script.readyState === 'complete') {
        /* Your code rely on this JavaScript code */
    var call =eval(name).call();
    
    document.getElementById('bfit').style.visibility='visible';
    document.getElementById('blayout').style.visibility='visible';
       
    }
	};
	
	
	var head = document.getElementsByTagName('head')[0];
	// Don't use appendChild
	head.insertBefore(script, head.firstChild); 
	
        
    });
});

