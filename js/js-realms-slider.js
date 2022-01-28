$(document).ready(function () {
  const config = [
    {
      title: 'REMEDY WOODS',
      titleColor: '#87F49A',
      description: `A vibrant wild west, Remedy Woods is a restoration motherland within Nekoverse. This magnificent<br/>
    forest is the birthplace of massive ancient Anima Trees, the source of all Anima Spirit Gems.`,
    },
    {
      title: 'Neverest Peninsula',
      titleColor: '#DBF0FF',
      description: `The underwater region of Nekoverse,<br/>Neverest Peninsula is home to most Elite practice of Magic.`,
    },
    {
      title: 'INFERNO HIGHLANDS',
      titleColor: '#831709',
      description: `Drawn from fire and lava, rage never escapes from this territory. Far beyond Inferno<br/>
    Highland lies Firelord Spire, the hidden place to most legendary weapons of Nekoverse`,
    },
    {
      title: 'Foothill of Honor',
      titleColor: '#FFBD97',
      description: `To be cast into Foothill of Honor is the prestige of all Nekos. Beyond the realm of<br/>
    looming valleys, this land has trained the most relentless Neko there has ever been.`,
    },
    {
      title: 'City of Greed',
      titleColor: '#FCEBE3',
      description: `Nekoverse economic paradigm are all discovered within Cities of Greed. Here, in the birthplace of <br/>most fearful Neko guilds, those that join allies with one another will form ever-standing empires.`,
    },
    {
      title: 'Chaos Land',
      titleColor: '#EDE7FF',
      description: `Final Destinations of the most honorable Nekos. <br/>
    Chaos Land is the domain to the most elite warriors.`,
    },
  ];
  let sliderIndex = 0;
  let slideRender = (direction) => {
    const width = $('#realms .slider-items').first().width();
    $('#realms .realms-slider .dots .dot').each(function (index) {
      if (index === sliderIndex) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
    $('#realms .realms-mobile-slider-controllers .dots .dot').each(function (
      index
    ) {
      if (index === sliderIndex) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
    const elements = $('#realms .slider-items .realms-slider-item');
    elements.each(function (index) {
      if (!direction) {
        const x = index * width;
        gsap.set($(this), { x });
      } else if (direction === 1) {
        const x1 = (index - sliderIndex + 1) * width;
        const x2 = (index - sliderIndex) * width;
        gsap.fromTo($(this), { x: x1 }, { x: x2 });
      } else {
        const x1 = (index - sliderIndex - 1) * width;
        const x2 = (index - sliderIndex) * width;
        gsap.fromTo($(this), { x: x1 }, { x: x2 });
      }
    });
    if (sliderIndex === 0 && direction === 1) {
      const x1 = 0;
      const x2 = -width;
      gsap.fromTo($('.realms-slider-item:nth-child(6)'), { x: x1 }, { x: x2 });
    }
    if (sliderIndex === 5 && direction === -1) {
      const x1 = 0;
      const x2 = width;
      gsap.fromTo($('.realms-slider-item:nth-child(1)'), { x: x1 }, { x: x2 });
    }
    $('#realms .realms-description .title')
      .text(config[sliderIndex].title)
      .css({ color: config[sliderIndex].titleColor });
    $('#realms .realms-description .realms-description-details').html(
      config[sliderIndex].description
    );
  }

  function caculateRealmsSliderHeight() {
    const realmsWidth = $('#realms .realms-slider .frame').width();
    const ratio = 0.548;
    const realmsHeight = realmsWidth * ratio;
    $('#realms .realms-slider .frame').css('height', realmsHeight);
    $('#realms .realms-slider').css('height', realmsHeight);
    $('#realms .realms-slider').css('width', realmsWidth);
    $('#realms .realms-slider .slider-items').css({
      width: realmsWidth * 0.94,
      height: realmsHeight,
      top: realmsHeight * 0.12,
      left: realmsWidth * 0.03,
    });
    $('#realms .realms-slider .frame .title').css('font-size', realmsWidth * 0.053)
  }

  slideRender();
  caculateRealmsSliderHeight();

  let nextSliderFn = () => {
    sliderIndex = sliderIndex !== 5 ? sliderIndex + 1 : 0;
    slideRender(1);
  }

  let prevSliderFn = () => {
    sliderIndex = sliderIndex !== 0 ? sliderIndex - 1 : 5;
    slideRender(-1);
  }

  $('#realms .previous-slider').click(prevSliderFn);
  $('#realms .next-slider').click(nextSliderFn);

  $(window).resize(function () {
    slideRender();
    caculateRealmsSliderHeight();
  });
});
