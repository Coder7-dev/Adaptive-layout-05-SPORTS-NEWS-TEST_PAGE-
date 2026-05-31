/* BURGER */

document.querySelector('.logo-nav__btn').addEventListener('click', function() {
    this.classList.toggle('cross');
    document.querySelector('.logo-nav__wrapper').classList.toggle('logo-nav__wrapper_mobile');
    document.querySelector('.logo-nav__nav').classList.toggle('logo-nav__nav_mobile');
    document.querySelector('.logo-nav__list').classList.toggle('logo-nav__list_mobile');

    document.querySelector('html').classList.toggle('overflow-hidden');
    document.querySelector('body').classList.toggle('overflow-hidden');
})

/* COACHES BEHIND/FRONT */

const mediaQuery = window.matchMedia('(max-width: 48em)');

function handleTabletChange(e) {
  const cards = document.querySelectorAll('.card-coach__img');
  // Создаем массив с индексами нужных нам карточек
  const targetIndices = [0, 1, 3]; 

  if (e.matches) {
    // ШИРИНА <= 768px
    cards.forEach((card, i) => {
      // Проверяем, есть ли текущий индекс в нашем списке [0, 1, 3]
      if (targetIndices.includes(i)) {
        card.classList.replace('card-coach__img_quote-front', 'card-coach__img_quote-behind');
        card.classList.add('is-modified'); // Вешаем метку, чтобы потом вернуть
      }
    });
  } else {
    // ШИРИНА > 768px (возвращаем только помеченные)
    const modifiedCards = document.querySelectorAll('.is-modified');
    modifiedCards.forEach(card => {
      card.classList.replace('card-coach__img_quote-behind', 'card-coach__img_quote-front');
      card.classList.remove('is-modified');
    });
  }
}

mediaQuery.addEventListener('change', handleTabletChange);
handleTabletChange(mediaQuery);

/* SLIDER */

$(document).ready(function(){
    $('.next').click(function(e){
        e.preventDefault();
        var currentImage = $('.img.current');
        var currentImageIndex = $('.img.current').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $('.img').eq(nextImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('current');

        if(nextImageIndex == ($('.img:last').index() + 1)) {
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('current');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('current');
        }
    });

    $('.prev').click(function(e){
        e.preventDefault();
        var currentImage = $('.img.current');
        var currentImageIndex = $('.img.current').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $('.img').eq(prevImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('current');
        prevImage.fadeIn(1000);
        prevImage.addClass('current');
    });
});

/* SLIDER BUTTONS */

$(document).ready(function(){
  if ($(window).width() > 390) {
    $('.prev a').text('< <');
      $('.next a').text('> >');
  } else {
    $('.prev a').text('<');
    $('.next a').text('>');
  }

  $(window).on('resize', function() {
    if ($(window).width() > 390) {
      $('.prev a').text('< <');
      $('.next a').text('> >');
    } else {
      $('.prev a').text('<');
      $('.next a').text('>');
    } 
  })
});

/* SLIDER BUTTONS */

  $(window).on('resize', function() {
      let width = $(window).width();

      if (width <= 576) {
          $('.card__info_blackout .card__hashtag').text('#Проф_спорт');
      } else {
        $('.card__info_blackout .card__hashtag').text('#Профессиональный_спорт');
      }
  }).trigger('resize');