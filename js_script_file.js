





$(document).ready(function(){

$(function() {
  function showsnackbar() {
        var x = document.getElementById("snackbar")
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }


	$("p").on('click', function(e) {player = $(this).text();
	
		if (player?.trim().length > 0) {
	
			fnd = "Not Found";
			

			/*remove new line introduced when getting variable from a table*/
			player = player. replace(/(\r\n|\n|\r)/gm,""); 
			/* remove double white space*/
			player = player.replace(/\s+/g," ");
			
			separate_doubles();

			remove_hcap();

			for(i=0;i<ls.length;i++){if(ls[i].includes(player)){club= ls[i];fnd = "Found";i=ls.length;};};	
			
			if(doubles_flag ==true){
				
				for(i=0;i<ls.length;i++){if(ls[i].includes(player2)){club= club + " / " + ls[i];fnd = "Found";i=ls.length;};};
				};		

			

			if(fnd=="Not Found"){}else
			
			{$("#snackbar").text(club);
			
    			showsnackbar();};	
					
		;}; /*end if player length*/
	
	}); /* end of on click */
					

}); /* end of function */
}); /* end of doc ready*/

function getarray(){

	if ("p_array" in localStorage) 
		{const lstore = localStorage.getItem("p_array");	
			 ls = JSON.parse(lstore);
			
			
	} 
	else 
		{alert('ERROR - Not stored in local storage');}

    /*add the snackbar division*/
	$("<div/>",{"id" : "snackbar"}).prependTo("body");

	;}






/* it is possible for some doubles players not to be found in the player array if they are a partner and have not entered any individual comps*/
/*need to change the Excel query to pick these up */

function separate_doubles(){
	doubles_flag = false;
	if(player.includes("/")){pos = player.indexOf("/");
	player1 = player.slice(0,pos).trim();
	player2 = player.slice(pos+1,player.length).trim();
	doubles_flag = true;

	player = player1;
	};
};

function remove_hcap(){
	
	if(player.includes("(")){pos = player.indexOf("(");
	player = player.slice(0,pos).trim();
	};
	player=player.replace("^","").trim();player=player.replace("*","").trim();
	
	
	if(doubles_flag ==true){
		if(player2.includes("(")){pos = player2.indexOf("(");
		player2 = player2.slice(0,pos).trim();
		};
		player2=player2.replace("^","").trim();player2=player2.replace("*","").trim();
	};

};

/* create an array of players along with their clubs and save in local storage*/

function create_array(){
$(document).ready(function(){

		var player_array = [];
		$('li').each(function(i, elem) {
    		player_array.push( $(elem).text());
		});
		
		
		localStorage.setItem("p_array", JSON.stringify(player_array));

		alert("array stored");

		
;})

}
