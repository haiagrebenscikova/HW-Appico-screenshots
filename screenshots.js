$(document).ready(function(){
  $('.g-carousel').slick({
    infinite: true,
    slidesToShow: 5,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          infinite: true,
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 940,
        settings: {
          infinite: true,
          slidesToShow: 1,
          arrows: false,
          dots: false,
        }
      }

    ]
  });
});

				


