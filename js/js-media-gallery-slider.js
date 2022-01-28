$(document).ready(function () {
  let sliderIndex = 0;
  function slideRender(direction) {
    const windowWidth = $(window).width();
    const dotsSelector =
      windowWidth <= 768
        ? '#media-gallery .media-gallery-mobile-slider-controllers .dots .dot'
        : '#media-gallery .media-gallery-slider .dots .dot';
    $(dotsSelector).each(function (index) {
      if (index === sliderIndex) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
    const elementsSelector =
      windowWidth <= 768
        ? '#media-gallery .media-gallery-slider.mobile .slider-items .slider-item'
        : '#media-gallery .media-gallery-slider.desktop .slider-items .slider-item';
    const elements = $(elementsSelector);
    const elementHeight = $(elementsSelector).height();
    const elementWidth = $(elementsSelector).outerWidth();
    $('#media-gallery .media-gallery-slider .slider-items').css(
      'height',
      elementHeight + (windowWidth <= 768 ? 0 : 48)
    );
    elements.each(function (index) {
      if (!direction) {
        const x = index * elementWidth;
        gsap.set($(this), { x });
      } else if (direction === 1) {
        const x1 = (index - sliderIndex + 1) * elementWidth;
        const x2 = (index - sliderIndex) * elementWidth;
        gsap.fromTo($(this), { x: x1 }, { x: x2 });
      } else {
        const x1 = (index - sliderIndex - 1) * elementWidth;
        const x2 = (index - sliderIndex) * elementWidth;
        gsap.fromTo($(this), { x: x1 }, { x: x2 });
      }
    });
    if (sliderIndex === 0 && direction === 1) {
      const x1 = 0;
      const x2 = -elementWidth;
      gsap.fromTo($(`${elementsSelector}:nth-child(3)`), { x: x1 }, { x: x2 });
    }
    if (sliderIndex === 5 && direction === -1) {
      const x1 = 0;
      const x2 = elementWidth;
      gsap.fromTo($(`${elementsSelector}:nth-child(1)`), { x: x1 }, { x: x2 });
    }
  }

  function nextSliderFn() {
    sliderIndex = sliderIndex !== 2 ? sliderIndex + 1 : 0;
    slideRender(1);
  }

  function prevSliderFn() {
    sliderIndex = sliderIndex !== 0 ? sliderIndex - 1 : 2;
    slideRender(-1);
  }

  $('#media-gallery .media-gallery-slider .slider-items .slider-item img').load(function () {
    slideRender();
  });
  $('#media-gallery .previous-slider').click(prevSliderFn);
  $('#media-gallery .next-slider').click(nextSliderFn);
  $(window).resize(function () {
    slideRender();
  });
});
