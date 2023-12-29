//#################
$(document).on('click', '#test_button', function() {
alert("4start");
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {alert("ready state " +this.readyState+ "status " + this.status);
    //   if (this.readyState == 4 && this.status == 200) {
    //     document.getElementById("#temp_division").innerHTML =
    //     this.responseText;
      //}
    };
    //http://localhost
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
  })
  /*
$(document).on('click', '#test', function() {
alert("test");
$.ajax({
    type: "GET" ,
    url: "xml_data_2.xml" ,
    dataType: "xml" ,
    success: function(xml) {alert("ok");

            var xmlDoc = $.parseXML( xml );   <------------------this line
            //if single item
    //var person = $(xml).find('ID').text();  

            //but if it's multible items then loop
    //$(xml).find('club').each(function(){
     //$("#temp").append('<li>' + $(this).text() + '</li>');  
    //}); 
    }       
}); // ajax
}) // on click

//#####################
/*
$(document).ready(function(){
    $("#test").click(function(){alert("click");
      $.ajax({url: "xml_data_2.xml" , error: function(xhr){
        alert("An error occured: " + xhr.status + " " + xhr.statusText);
      }});
    });
  });
  */