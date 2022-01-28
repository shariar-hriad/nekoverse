// $(document).ready(function () {
//   let sliderIndex = 0;
//   const config = {
//     item1: {
//       selector: '#frame-slider-item-1',
//       title: 'Origin Quad',
//       description: `<p>Being the prime elements of all universes, Origin Quad are the defenders of nature.</p>
//       <p>They are comprised of 4 elements:
// Fire-Nature-Earth-Water.</p>`,
//     },
//     item2: {
//       selector: '#frame-slider-item-2',
//       title: 'Pancha Triad',
//       description: `<p>Closely connected to the wild, the Pancha triad are the chosen ones to have mythical powers, many of which is still unknown to Nekoverse.</p>`,
//     },
//     item3: {
//       selector: '#frame-slider-item-3',
//       title: 'Void Dyad',
//       description: `<p>Regarded as the root of all elements. Should the Void Dyad be summoned, all of Nekoverse balance and peace will be consumed.</p>`,
//     },
//   };
//
//   function slideRender() {
//     const sliderWidth = $('.frames').width();
//     const elementWidth = $('#frame-slider-item-1').width();
//     const windowWidth = $(window).width();
//     let positionRatio = 130;
//     let yPositionForActiveElement = 107;
//     if (windowWidth <= 768) {
//       positionRatio = 80;
//       yPositionForActiveElement = 60;
//     }
//     const [current, next, prev] = [
//       {
//         x: sliderWidth / 2 - elementWidth / 2,
//         y: yPositionForActiveElement,
//         zIndex: '999',
//       },
//       {
//         x: sliderWidth / 2 + positionRatio - elementWidth / 2,
//         y: '0',
//         zIndex: '0',
//       },
//       {
//         x: sliderWidth / 2 - positionRatio - elementWidth / 2,
//         y: '0',
//         zIndex: '0',
//       },
//     ];
//     const { item1, item2, item3 } = config;
//     if (sliderIndex === 0) {
//       gsap.to(item1.selector, current);
//       gsap.to(item2.selector, next);
//       gsap.to(item3.selector, prev);
//       renderSlideText(item1);
//     } else if (sliderIndex === 2) {
//       gsap.to(item1.selector, next);
//       gsap.to(item2.selector, prev);
//       gsap.to(item3.selector, current);
//       renderSlideText(item2);
//     } else {
//       gsap.to(item1.selector, prev);
//       gsap.to(item2.selector, current);
//       gsap.to(item3.selector, next);
//       renderSlideText(item3);
//     }
//   }
//
//   function renderSlideText(item) {
//     $('.slider-content .main-line').html(item.title);
//     $('.slider-content .sub-line').html(item.description);
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
//   $('.previous-slider').click(prevSliderFn);
//   $('.next-slider').click(nextSliderFn);
//
//   $(window).resize(function () {
//     slideRender();
//   });
// });
