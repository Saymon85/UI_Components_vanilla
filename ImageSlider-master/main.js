jQuery(document).ready(function(){
  var holder = $(".holder");
  var tre = 1;
  var loop = setInterval(next, 4000);

  function next(){
      tre++;
      if(tre===6){
        tre=1;
        $('.holder').css('margin-left','auto');
      }
      holder.append("<img src="+tre+".jpg alt=''></img>");
      holder.animate({
        'margin-left': '-=1000',
      }, 1500
      )
  };

});
