$(document).ready(function(){
  $("#hide").click(function(){
    $("div").hide();
  });
  $("#show").click(function(){
    $("div").show();
  });
});
$(document).ready(function(){
  $("#flip").click(function(){
    $("div").slideUp("slow");
  });
});
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});
$(document).ready(function(){
  $("button").click(function(){
    $("#p1").slideUp(2000).slideDown(2000);
  });
});
$(document).ready(function(){
  $("button").click(function(){
    $("#p").hide("slow", function(){
      alert("The Search is hidden");
    });
  });
})
$(document).ready(function(){
  $("p2").click(function(){
    $("#div1").fadeToggle();
    
  });
});