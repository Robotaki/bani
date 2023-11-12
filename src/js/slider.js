$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  var slideCount = $('.slider').slick('getSlick').slideCount;

  for (var i = 0; i < slideCount; i++) {
    $('.pagination').append('<button>' + (i + 1) + '</button>');
  }

  $('.pagination button').click(function(){
    var index = $(this).index();
    $('.slider').slick('slickGoTo', index);
  });

  $('.slider').on('afterChange', function(event, slick, currentSlide){
    $('.pagination button').removeClass('active');
    $('.pagination button').eq(currentSlide).addClass('active');
  });
});
