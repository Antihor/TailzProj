const burgButtonRef = document.querySelector('.header-burg-btn');
const navModalRef = document.querySelector('.nav-modal');
const modalCloseRef = document.querySelector('.modal-close-btn');

burgButtonRef.addEventListener('click', onBurgButtClick);

modalCloseRef.addEventListener('click', onModalCloseClick);

function onBurgButtClick() {
  navModalRef.classList.add('is-open');
}

function onModalCloseClick() {
  navModalRef.classList.remove('is-open');
}
