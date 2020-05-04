document.addEventListener('DOMContentLoaded', function () {
  // Initizalie slick carousel
  $('.homeSlider').slick({
    prevArrow: `<button type="button" title="Əvvəlki" class="homeSlider__prev">
                  <i aria-hidden="true" data-feather="chevron-left"></i>
                </button>`,
    nextArrow: `<button type="button" title="Sonrakı" class="homeSlider__next">
                  <i aria-hidden="true" data-feather="chevron-right"></i>
                </button>`,
  });

  // replace feather icons with actual SVG icon
  feather.replace();

  // defer off-screen images
  var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
  if ('IntersectionObserver' in window) {
    var lazyImageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});
