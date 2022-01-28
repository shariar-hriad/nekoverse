$(document).ready(function () {
  AOS.init({
    duration: 400
  });
  for (let i = 1; i <= 76; i++) {
    var currentSrc = `/resources/home/images/neko-base/neko-${i}.webp`;

    $('#sec').prepend('<img class="load-no-show" src=' + currentSrc + ' />');
  }

});

function preloadImage(url) {
  const img = new Image();
  img.src = url;
}

var topMenu = $('#neko-nav'),
  topMenuHeight = topMenu.outerHeight() + 15,
  menuItems = topMenu.find('a')
    ,scrollItems = []

    ;
// Anchors corresponding to menu items
// ,scrollItems = menuItems.map(function () {
//     const hrf =$(this).attr('href');
//
//   var item = $(hrf.substr(1,hrf.length));
//   if (item && item.length) {
//     return item;
//   }
// })


$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = Math.round($(window).scrollTop() / 8);
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      scroll = Math.round($(window).scrollTop() / 4);
    }
    const image_number = (scroll % 76) + 1;
    const currentSrc = `/resources/home/images/neko-base/neko-${image_number}.webp`;
    $('#neko-rotate').attr('src', currentSrc);

    //change menu active on scroll
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : '';
    // Set/remove active class
    menuItems
      .removeClass('active')
      .filter("[href='#" + id + "']")
      .addClass('active');
  });

  let index = 1;
  setInterval(function () {
    if (index === 7) {
      index = 1;
    }
    $('.neko-variation').attr(
      'src',
      `/resources/home/images/neko-variants/neko-${index}.webp`
    );
    index++;
    humanizeFutureToNow('2022-01-01');
  }, 500);

  function humanizeFutureToNow(time) {
    const now = new Date();
    const then = new Date(time);
    let dateDiff = then.getTime() - now.getTime();
    const days = Math.floor(dateDiff / (24 * 60 * 60 * 1000));
    dateDiff -= days * (24 * 60 * 60 * 1000);
    const hours = Math.floor(dateDiff / (60 * 60 * 1000));
    dateDiff -= hours * (60 * 60 * 1000);
    const minutes = Math.floor(dateDiff / (60 * 1000));
    dateDiff -= minutes * (60 * 1000);
    const seconds = Math.floor(dateDiff / 1000);
    $('.timer .day .value').text(days);
    $('.timer .hour .value').text(hours);
    $('.timer .minute .value').text(minutes);
    $('.timer .second .value').text(seconds);
  }

  const gameplayContents = {
    pve: {
      title: 'Battling',
      content: `<p>Only the one that prevail shall remain!.</p>
              <p>Battle with AI/other players to claim your honor and unlock rare items and NFTs.</p>`,
    },
    pvp: {
      title: 'Resource Harvesting',
      content: `<p>Explore the vast world of Nekoverse and extract the richness of the environment by harvesting resources.</p>`,
    },
    sp: {
      title: 'Item Crafting',
      content: `<p>Become a master craftsman in Nekoverse by crafting valuable items.</p>`,
    },
  };
  $('.buttons button').click(function () {
    $('.buttons button').each(function () {
      $(this).removeClass('active');
    });
    const content = gameplayContents[$(this).data('id')];
    console.log(content);
    $(this).addClass('active');
    $('#gameplay .description .title').html(content.title);
    $('#gameplay .description .content').html(content.content);
  });
  $('.mobile-menu .menu').click(function () {
    const menuMobile = $('.mobile-menu-expanded');
    if (menuMobile.hasClass('.show')) {
      menuMobile.removeClass('show');
      $('body').addClass('disable-scroll');
    } else {
      menuMobile.addClass('show');
      $('body').removeClass('disable-scroll');
    }
  });
  $('.mobile-menu-expanded .close').click(function () {
    $('.mobile-menu-expanded').removeClass('show');
    $('body').removeClass('disable-scroll');
  });

  $('.mobile-menu-expanded a').click(function () {
    $('.mobile-menu-expanded').removeClass('show');
  })
  // function caculateConnectionLineInIncubator() {
  //   const eggItem1Pos = $(
  //     '#neko-mutation .summon .eggs-container .egg:nth-child(2)'
  //   ).offset();
  //   const eggItem5Pos = $(
  //     '#neko-mutation .summon .eggs-container .egg:nth-child(6)'
  //   ).offset();
  //   const incubatorPos = $('#neko-mutation .summon .incubator').offset();
  //   const connectionLineWidth = eggItem5Pos.left - eggItem1Pos.left;
  //   const connectionLinePos = $(
  //     '#neko-mutation .summon .eggs-container .connection'
  //   ).offset();
  //   const vericleConnectionWidth = incubatorPos.top - connectionLinePos.top;
  //   $('#neko-mutation .summon .eggs-container .connection').css(
  //     'width',
  //     connectionLineWidth + 8
  //   );
  //   $('#neko-mutation .summon .incubator .verticle-connection-line').css({
  //     height: vericleConnectionWidth,
  //     top: -vericleConnectionWidth,
  //   });
  // }

  // caculateConnectionLineInIncubator();
  // window.onresize = () => {
  //   caculateConnectionLineInIncubator();
  // };
});

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    navText: ['<i class="previous-slider"></i>', '<i class="next-slider"></i>'],
  });
});
