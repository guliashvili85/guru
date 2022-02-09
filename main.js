$(document).ready(function(){
    $.get("content.html", function( data ){
        $(".mobileContent").html( data );
        var date= new Date();
        var year = date.getFullYear();
        $("#currDate").html(year);    
    });

});



// function setHtml(){

   
   
//     // alert("from js");
//     // $(".mobileContent").html("<p>hello from js<p><p id='currDate'><p> ");
    

// }

// setHtml();






