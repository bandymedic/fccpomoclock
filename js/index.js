$(function(){
   
   var buzzer = $("#buzzer")[0],
       count1 = parseInt($("#num").html()),
       count2 = parseInt($("#breakNum").html());
       
   $("#minus5").click(function(){
       if(count1 > 0){
           count1 -= 5;
           $("#num").html(count1);
       }
       event.preventDefault();
   });
   
   $("#add5").click(function(){
       count1 += 5;
       $("#num").html(count1);
       event.preventDefault();
   }); 
   
   $("#min5Break").click(function(){
       if(count2 > 0){
           count2 -= 5;
           $("#breakNum").html(count2);
       }
       event.preventDefault();
   });

   $("#add5Break").click(function(){
       count2 += 5;
       $("#breakNum").html(count2);
       event.preventDefault();
   });
    
});