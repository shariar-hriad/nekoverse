// $(document).ready(function () {
//   let sliderIndex = 0;
//
//   function slideRender() {
//     const windowWidth = $(window).width();
//     const display = windowWidth <= 768 ? 'none' : 'block';
//     const sliderWidth = $('#neko-attributes .elements').width();
//     const elementWidth = $('#element-slider-item-1').outerWidth();
//     const [current, next, prev] = [
//       {
//         x: sliderWidth / 2 - elementWidth / 2,
//         y: '0',
//         zIndex: '999',
//         scale: 1,
//         webkitFilter: 'blur(0px)',
//         display: 'block',
//       },
//       {
//         x: sliderWidth / 2 + 350 - elementWidth / 2,
//         y: '0',
//         zIndex: '0',
//         scale: 0.68,
//         webkitFilter: 'blur(13px)',
//         display,
//       },
//       {
//         x: sliderWidth / 2 - 350 - elementWidth / 2,
//         y: '0',
//         zIndex: '0',
//         scale: 0.68,
//         webkitFilter: 'blur(13px)',
//         display,
//       },
//     ];
//     if (sliderIndex === 0) {
//       gsap.to('#element-slider-item-1', current);
//       gsap.to('#element-slider-item-2', next);
//       gsap.to('#element-slider-item-3', prev);
//     } else if (sliderIndex === 2) {
//       gsap.to('#element-slider-item-1', next);
//       gsap.to('#element-slider-item-2', prev);
//       gsap.to('#element-slider-item-3', current);
//     } else {
//       gsap.to('#element-slider-item-1', prev);
//       gsap.to('#element-slider-item-2', current);
//       gsap.to('#element-slider-item-3', next);
//     }
//     $('#neko-attributes .elements .dots .dot').each(function (index) {
//       if (index === sliderIndex) {
//         $(this).addClass('active');
//       } else {
//         $(this).removeClass('active');
//       }
//     });
//   }
//
//   slideRender();
//
//   function nextSliderFn() {
//     sliderIndex = sliderIndex !== 2 ? sliderIndex + 1 : 0;
//     slideRender();
//   }
//
//   function prevSliderFn() {
//     sliderIndex = sliderIndex !== 0 ? sliderIndex - 1 : 2;
//     slideRender();
//   }
//
//   function caculateNekoAttributesSliderHeightAndControllerPosition() {
//     const sliderItemHeight = $(
//       '#neko-attributes .elements .slider-wrap .slider-item'
//     ).outerHeight();
//     $('#neko-attributes .elements .slider-wrap').css(
//       'height',
//       sliderItemHeight + 200
//     );
//     $('#neko-attributes .elements .slider-wrap .slider').css(
//       'height',
//       sliderItemHeight + 50
//     );
//     const elementWidth = $(
//       '#neko-attributes .elements .slider-wrap .slider .slider-item'
//     ).outerWidth();
//     const wrapSliderWidth = $('#neko-attributes .elements').outerWidth();
//     $(
//       '#neko-attributes .elements .slider-wrap .next-slider.d-none.d-md-block'
//     ).css('right', wrapSliderWidth / 2 - elementWidth / 2 - 100);
//     $(
//       '#neko-attributes .elements .slider-wrap .previous-slider.d-none.d-md-block'
//     ).css('left', wrapSliderWidth / 2 - elementWidth / 2 - 100);
//   }
//   caculateNekoAttributesSliderHeightAndControllerPosition();
//   $('#neko-attributes .elements .previous-slider').click(prevSliderFn);
//   $('#neko-attributes .elements .next-slider').click(nextSliderFn);
//   $('#neko-attributes .slider-wrap .slider .slider-item img').load(function () {
//     caculateNekoAttributesSliderHeightAndControllerPosition();
//   });
//   $(window).resize(function () {
//     slideRender();
//     caculateNekoAttributesSliderHeightAndControllerPosition();
//   });
// });
