$(document).ready(function () {
  let sliderIndex = 0;
  let windowWidth;
  function slideRender(direction) {
    windowWidth = $(window).width();
    const sliderSelector =
      windowWidth <= 768
        ? '#nekoverse-nfts .nekoverse-nfts-slider-items.mobile'
        : '#nekoverse-nfts .nekoverse-nfts-slider-items.desktop';
    const elementWidth = $(sliderSelector).first().width();
    const numberSlides = windowWidth <= 768 ? 5 : 3;
    const sliderDotsSelecter =
      windowWidth <= 768
        ? '#nekoverse-nfts .nekoverse-nfts-mobile-slider-controllers .dots .dot'
        : '#nekoverse-nfts .dots .dot';
    $(sliderDotsSelecter).each(function (index) {
      if (index === sliderIndex) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
    const elements = $(`${sliderSelector} .item`);
    elements.each(function (index) {
      if (!direction) {
        const x = (index - sliderIndex) * elementWidth;
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
      gsap.fromTo($(`${sliderSelector} .item:nth-child(${numberSlides})`), { x: x1 }, { x: x2 });
    }
    if (sliderIndex === numberSlides - 1 && direction === -1) {
      const x1 = 0;
      const x2 = elementWidth;
      gsap.fromTo($(`${sliderSelector} .item:nth-child(1)`), { x: x1 }, { x: x2 });
    }
  }

  function caculateNekoNftsSliderHeight() {
    const sliderItemHeight = $(
      '#nekoverse-nfts .nekoverse-nfts-slider .nekoverse-nfts-slider-items.mobile .item'
    ).outerHeight();
    $(
      '#nekoverse-nfts .nekoverse-nfts-slider .nekoverse-nfts-slider-items.mobile'
    ).css('height', sliderItemHeight);
  }

  slideRender();
  caculateNekoNftsSliderHeight();
  function nextSliderFn() {
    const numberSlides = windowWidth <= 768 ? 5 : 3;
    sliderIndex = sliderIndex !== numberSlides - 1 ? sliderIndex + 1 : 0;
    slideRender(1);
  }

  function prevSliderFn() {
    const numberSlides = windowWidth <= 768 ? 5 : 3;
    sliderIndex = sliderIndex !== 0 ? sliderIndex - 1 : numberSlides - 1;
    slideRender(-1);
  }

  $('#nekoverse-nfts .previous-slider').click(prevSliderFn);
  $('#nekoverse-nfts .next-slider').click(nextSliderFn);
  $(window).resize(function () {
    slideRender();
    caculateNekoNftsSliderHeight();
  });
});
