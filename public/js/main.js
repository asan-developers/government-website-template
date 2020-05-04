$(document).ready(function () {
  $(".homeSlider").slick({
    prevArrow:
      '<button type="button" class="homeSlider__prev"><i data-feather="chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="homeSlider__next"><i data-feather="chevron-right"></i></button>',
  });

  feather.replace();
});
