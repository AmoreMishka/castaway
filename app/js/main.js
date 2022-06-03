$(function(){

  $('.menu__btn').on('click', function(){
    $('.header__menu').toggleClass('header__menu--active');
  });

  $(".star").rateYo({
    readOnly: true,
    starWidth: "17px",
    ratedFill: "#FCFF51",
  });
})