import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // breakpoints: {
  //   375: {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 32,
  //   },
  //   1440: {
  //     slidesPerView: 3,
  //     spaceBetween: 32,
  //   },
  // },
});

const feedbackRef = document.querySelector('.success-list');

function getFeedbacks() {
  fetch('https://paw-hut.b.goit.study/api/feedbacks')
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    })
    .then(data => {
      const fbGallery = data.feedbacks.map(el => createFBCard(el)).join('');

      console.log(fbGallery);

      feedbackRef.innerHTML = fbGallery;
    })
    .catch(err => {
      console.log(err);
    });
}
getFeedbacks();

function createFBCard(fbData) {
  return `<li class="success-list-card swiper-slide">
        <div class="star-wrap"></div>
        <p class="success-txt">${fbData.description}
        </p>
        <h4 class="success-name">${fbData.author}</h4>
      </li>`;
}
