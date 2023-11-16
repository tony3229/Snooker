




/*variables*/
var ck;

var bc;
var fc;



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
		/* if the new click is the same cell as the last click then exit and reset the contents */
		/* if its not thee same then reset the contents and continue as if it was a new click */

		if(ck){
			if($(this).find("span").attr("id")=="lastspan")
			
			{reset_to_original();ck=false;x = "end";return;}
			else
			{reset_to_original();ck=false;x = "continue";}
				
		;};/*end if ck*/


	/* store data from the clicked td under the element*/
	player = $(this).text();
	
	$(this).attr("id","last");
	$(this).find("span").attr("id","lastspan");

	
	sz = $("#lastspan").css("font-size");
	
	bc = $(this).css("background-color");
	
	fc = $(this).css("color");
	
	$("#lastspan").data("name",player);
	$("#lastspan").data("size",sz);
	$("#lastspan").data("background",bc);
	$("#lastspan").data("fontcolor",fc);

	if (player?.trim().length == 0) {$("#lastspan").attr("id","old_span");$("#last").attr("id","old_td");;return;};
	
	fnd = "Not Found";
			
	/*remove new line introduced when getting variable from a table*/
	player = player. replace(/(\r\n|\n|\r)/gm,""); 
	/* remove double white space*/
	player = player.replace(/\s+/g," ");
		
	/* the matches page shows doubles players with a / between them - this routine will find both players*/	
	separate_doubles();

	/* remove the handicap and ^ and * so it be used to find in the array*/	
	remove_hcap();
	
			
	  for(i=0;i<ls2.length;i++)  {
			
			
			array_player = ls2[i][0];
			array_player = array_player. replace(/(\r\n|\n|\r)/gm,""); /*remove new line introduced when getting variable from a table*/
			array_player = array_player.replace(/\s+/g," "); /* remove double white space*/
			array_player = array_player.trim();
			
			/*alert("("+array_player+")"+ array_player.length+" - " + player + player.length);*/
			if(array_player ==player)     
						{
							club = ls2[i][1];
							telno = ls2[i][2]
							fnd = "Found";
							i=ls2.length;	
						}
					;};

	/*if(doubles_flag ==true){
				
	for(i=0;i<ls.length;i++){if(ls[i].includes(player2)){club= club + " / " + ls[i];fnd = "Found";i=ls.length;};};
				};
	*/		

	if(fnd=="Not Found"){$("#lastspan").attr("id","old_span");$("#last").attr("id","old_td");return;}else
			
	{
			
		$("#lastspan").html(player+"<br>"+club+"<br>"+telno);

		new_sz = Math.round(((parseInt(sz) * 100)*1.2)/100);

		new_sz = new_sz.toString() + "px";

		$("#lastspan").css("font-size",new_sz);
		$("#lastspan").css("color","rgb(255,255,255)"  );
		$("#last").css("background-color","rgb(0,0,0)"  );

		ck = true;

		/*$("#snackbar").text(club);*/		
    		
		/* showsnackbar();*/
	
		};	/* end of else fnd */
					
	
	}); /* end of on click */
					

}); /* end of function*/
}); /* end of doc ready*/





function reset_to_original(){ 
				
				old_sz = $("#lastspan").data("size");
				old_bc = $("#lastspan").data("background");
				old_fc = $("#lastspan").data("fontcolor");


				$("#last").css({"background-color":old_bc});
				
				$("#lastspan").css({"font-size":old_sz,"font-family":"arial","color":old_fc});
				$("#lastspan").text($("#lastspan").data("name"));
				$("#last").attr("id","old_td");
				$("#lastspan").attr("id","old_span");
				
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

var sub_str

function create_array(){

$(document).ready(function(){

		
		
		

		var player_array2 = [];
		$('li').each(function(e, elem) {
		
			sub_str= $(elem).text();
		
			var i = 0; 
			var st3 = [];
			while (sub_str.includes("-")){ 	
				pos=sub_str.indexOf("-");
				st1 = sub_str.slice(0,pos);
				sub_str = sub_str.slice(pos+1);
	
				st3 [i] = st1;

				i++; 
				} 

			
			player_array2 [e] =  [st3 [0] , st3 [1] , st3 [2]];
		
			/*player_array2 [e] = ["aaa","bbbb","cccc"];*/
		

		});
		
		localStorage.setItem("p_array2", JSON.stringify(player_array2));

			/*check lstore
			const lstore2 = localStorage.getItem("p_array2");	
			ls2 = JSON.parse(lstore2);
			alert(ls2[2][0]);*/

		/* show the snackbar */		
		$("<div/>",{"id" : "snackbar"}).prependTo("body")

		$("#snackbar").text("Click player on Competition sheets to show/hide detail");		
    		var x = document.getElementById("snackbar")
        	x.className = "show";
        	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		
;})  

}


function getarray(){

	if ("p_array" in localStorage) 
		{const lstore = localStorage.getItem("p_array");	
			 ls = JSON.parse(lstore);
			
			
	} 
	else 
		{/*may add code to prevent funciton above from running if not found in storage*/;}


	const lstore2 = localStorage.getItem("p_array2");	
			 ls2 = JSON.parse(lstore2);

		





/*localStorage.removeItem("p_array2");*/

	;}

function create_arraytest(){

$(document).ready(function(){

		var player_array = [];
		

		player_array = ["a","b"];
		
		localStorage.setItem("p_array", JSON.stringify(player_array));
		
		const lstore = localStorage.getItem("p_array");	
			 ls = JSON.parse(lstore);
alert(ls [0][0]);
		
		
;})  

}



/* */