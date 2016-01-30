
$(function(){

  var imgs=$(".img2");
  var btn=$(".btn");
  var index=0;
  function demo(type){
    if(type=="r"){
      index++;
      if(index>=imgs.length){
        index=0;
      }
    }else if(type=="l"){
      index--;
      if(index<=-1){
        index=imgs.length-1;
      }
    }
    
    imgs.hide();
    imgs.eq(index).fadeIn();
    btn.css({background:"#ccc"});
    btn.eq(index).css({background:"#333"});
  }
  var t=setInterval(function(){
    demo("r");
  },2000);

  $(".banner-box").hover(function(){
    clearInterval(t);
  },function(){
    t=setInterval(function(){
    demo("r");
  },2000);
  })

  $(".left2").click(function(){
       demo("l");
  })
  $(".right2").click(function(){
       demo("r");
  })

  $(".btn").hover(function(){
    var now=$(this).index();
    $(".btn").css({background:"#ccc"})
        $(this).css({background:"#333"});
        $(".img2").hide();
        $(".img2").eq(now).fadeIn();
        index=now;
  },function(){
  })


  /*************************************/
  /*菜单*/
  $(".yiji").hover(function(){
    $(this).find(".erji").slideDown();
  },function(){
    $(this).find(".erji").slideUp();
  })


 $(".yiji2").hover(function(){
    $(this).find(".erji2").slideDown();
  },function(){
    $(this).find(".erji2").slideUp();
  })


$(".yiji3").hover(function(){
    $(".erji3").show(20,function(){
    $(".erji3").animate({width:500},200);
    $(".erji3").show();
    
    })
  },function(){

     $(".erji3").show(400,function(){
    $(".erji3").animate({width:0});
    $(".erji3").hide();
    })
  })

$(".yiji4").hover(function(){
    $(".erji4").show(20,function(){
    $(".erji4").animate({width:300},200);
    $(".erji4").show();
    
    })
  },function(){

     $(".erji4").show(400,function(){
    $(".erji4").animate({width:0});
    $(".erji4").hide();
    })
  })

$(".yiji5").hover(function(){
    $(".erji5").show(20,function(){
    $(".erji5").animate({width:300},200);
    $(".erji5").show();
    
    })
  },function(){

     $(".erji5").show(400,function(){
    $(".erji5").animate({width:0});
    $(".erji5").hide();
    })
  })



})
   