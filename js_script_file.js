




/*variables*/
var ck;



/*main function to show additional data and snackbar*/
$(document).ready(function(){

$(function() {
  function showsnackbar() {
        var x = document.getElementById("snackbar")
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

	$("td").on('click', function(e) {

		/* if the cell was prevously clicked, it returns it to its orifinal content and format*/
		/* by taking the info from the store attached to the element*/
		
		/* if last action was a matched click then return that cell to its original */
		/* if the new click is the same cell as the last click then exit are resetting the contents */
		/* if its not thee same then reset the contents and continue as if it was a new click */
x = "start";
		if(ck){
			if($(this).find("span").attr("id")=="lastspan")
			
			{reset_to_original();ck=false;x = "end";return;}
			else
			{reset_to_original();ck=false;x = "continue";}
				
		;};/*end if ck*/

	


	/* store data from the clicked td under the element*/
	player = $(this).text();
	
	/*$(this).attr("id","last");*/
	

	/*SEEMS THAT SPAN IS LOST WHEN THE ID IS CHANGED
	
	/*sz = $("#last").find("span").css("font-size");*/
	
	$(this).find("span").attr("id","lastspan");

	sz = $("#lastspan").css("font-size");


	
	$("#lastspan").data("name",player);
	$("#lastspan").data("size",sz);
	


	if (player?.trim().length == 0) {$("#lastspan").attr("id","");return;};
	
	fnd = "Not Found";
			

	/*remove new line introduced when getting variable from a table*/
	player = player. replace(/(\r\n|\n|\r)/gm,""); 
	/* remove double white space*/
	player = player.replace(/\s+/g," ");
		
	/* the matches page shows doubles players with a / between them - this routine will find both players*/	
	separate_doubles();

	/* remove the handicap and ^ and * so it be used to find in the array*/	
	remove_hcap();

	/* look for the adjusted player( extra characters removed) in the array*/ 		
	for(i=0;i<ls.length;i++){if(ls[i].includes(player)){club= ls[i];fnd = "Found";i=ls.length;};};	
			
	/*if(doubles_flag ==true){
				
	for(i=0;i<ls.length;i++){if(ls[i].includes(player2)){club= club + " / " + ls[i];fnd = "Found";i=ls.length;};};
				};
	*/		

	if(fnd=="Not Found"){$("#lastspan").attr("id","");return;}else
			
	{
			
		$("#lastspan").text(club);

		new_sz = Math.round(((parseInt(sz) * 100)*1.5)/100);

		new_sz = new_sz.toString() + "px";

		$("#lastspan").css("font-size",new_sz);

		ck = true;

		/*$("#snackbar").text(club);*/		
    		
		/* showsnackbar();*/
	
		};	/* end of else fnd */
					
	
	}); /* end of on click */
					

}); /* end of function*/
}); /* end of doc ready*/

function getarray(){

	if ("p_array" in localStorage) 
		{const lstore = localStorage.getItem("p_array");	
			 ls = JSON.parse(lstore);
			
			
	} 
	else 
		{/*may add code to prevent funciton above from running if not found in storage*/;}


	;}



function reset_to_original(){ 
				
				$("#lastspan").css({"font-size":sz,"font-family":"arial"});
				$("#lastspan").text($("#lastspan").data("name"));
				/*$("#lastspan").data("click",false);*/
				$("#lastspan").attr("id","old");
				
			};



/* it is possible for some doubles players not to be found in the player array if they are a partner and have not entered any individual comps*/
/*need to change the Excel query to pick these up = think this has now been done*/

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

		/* show the snackbar */		
		$("<div/>",{"id" : "snackbar"}).prependTo("body")

		$("#snackbar").text("Click player on Competition sheets to show/hide detail");		
    		var x = document.getElementById("snackbar")
        	x.className = "show";
        	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
		
;})

}
