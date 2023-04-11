const burgerMenu = () => {
  const iconHeader = document.querySelector('[data-burger]');
  const navHeader = document.querySelector('[data-nav]');
  const imageHeader = document.querySelector('[data-image]');
  const overley = document.querySelector('.header__nav-background');

  if (iconHeader) {
    iconHeader.addEventListener('click', function () {
      document.body.classList.toggle('lock');
      iconHeader.classList.toggle('is-open');
      navHeader.classList.toggle('is-open');
      imageHeader.classList.toggle('is-open');
    });
  }

  navHeader.addEventListener('click', function () {
    if (iconHeader.classList.contains('is-open')) {
      iconHeader.classList.remove('is-open');
      navHeader.classList.remove('is-open');
      imageHeader.classList.remove('is-open');
      document.body.classList.remove('lock');
    }
  });

  // document.addEventListener('click', function (e) {
  //   if (!e.target.closest('.header__container')) {
  //     iconHeader.classList.remove('is-open');
  //     navHeader.classList.remove('is-open');
  //     imageHeader.classList.remove('is-open');
  //     document.body.classList.remove('lock');
  //   }
  // });

  overley.addEventListener('click', function () {
    if (overley) {
      iconHeader.classList.remove('is-open');
      navHeader.classList.remove('is-open');
      imageHeader.classList.remove('is-open');
      document.body.classList.remove('lock');
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelector('[data-nav]').classList.remove(('is-open'));
      document.querySelector('[data-burger]').classList.remove(('is-open'));
      document.querySelector('[data-image]').classList.remove('is-open');
      document.body.classList.remove('lock');
    }
  });
};
export {burgerMenu};
