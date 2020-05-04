$(document).ready(function () {
  $(".homeSlider").slick({
    prevArrow: `<button type="button" title="Əvvəlki" class="homeSlider__prev">
                  <i aria-hidden="true" data-feather="chevron-left"></i>
                </button>`,
    nextArrow: `<button type="button" title="Sonrakı" class="homeSlider__next">
                  <i aria-hidden="true" data-feather="chevron-right"></i>
                </button>`,
  });

  feather.replace();
});
