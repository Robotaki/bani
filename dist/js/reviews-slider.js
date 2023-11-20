$(document).ready(function () {
  $(".slider-reviews").slick({
    arrows: false,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          arrows: true,
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: true,
        }
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
        }
      },
      {
        breakpoint: 337,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
        }
      },
    ]
  });
});
