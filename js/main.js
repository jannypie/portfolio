$('.card').on("click",function(){

  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    var $this = $(this);
    $('.card').removeClass('active');
    $this.addClass('active');
    // setTimeout(function(){
    //   var elemTop = $this.offset().top;
    //   window.scrollTo(0,elemTop - 20);
    // },1000);
  }
});
