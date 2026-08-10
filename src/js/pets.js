let currentPage = 1;
let perPage = 9;
let activeFilter = '';

const petFiltersRef = document.querySelector('.pets-filters');
const petGalleryRef = document.querySelector('.pets-gallery');

petFiltersRef.addEventListener('click', onFilterClick);

async function onFilterClick(ev) {
  if (ev.target === ev.currentTarget) return;

  activeFilter = ev.target.dataset.id;
  // petGalleryRef.innerHTML = '';

  document
    .querySelectorAll('.pets-filter-item')
    .forEach(btn => btn.classList.remove('is-active'));

  ev.target.classList.add('is-active');

  await getData(activeFilter, currentPage);
}

async function getData(categoryId = 'all', page = 1) {
  const BASE_URL = 'https://paw-hut.b.goit.study/api';
  const searchParams = new URLSearchParams({
    page: currentPage,
    limit: perPage,
  });
  let url = `${BASE_URL}/animals?${searchParams}`;
  if (categoryId && categoryId !== 'all') {
    url += `&categoryId=${categoryId}`;
  }

  const resp = await fetch(url);
  if (!resp.ok) throw new Error(resp.status);
  const data = await resp.json();
  console.log(data);
}

getData();
// ================RENDER=======================

function renderPetCard(imgData) {
  return `<li class="pets-card">
        <img
          class="pets-card-img"
          alt="${imgData.name}"
          src="${imgData.image}"
        />
        <div class="pets-card-cont">
          <p class="pet-spec">${imgData.species}</p>
          <h3 class="pet-name">${imgData.name}</h3>
          <div class="pet-filter-wrap">
            <p class="pet-filter">${imgData.categories[0].name}</p>
          </div>
          <div class="pet-wrap">
            <p class="pet-age">${imgData.age}</p>
            <p class="pet-sex">${imgData.gender}</p>
          </div>
          <p class="pet-txt">${imgData.shortDescription}</p>
          <button class="pets-card-btn" type="button data-id=${imgData._id}">Дізнатись більше</button>
        </div>
      </li>`;
}

// ==================D-MODAL===================

// const detailsButtRef = document.querySelector('.pets-card-btn');
// const modalRef = document.querySelector('.d-modal');
// const closeButtRef = document.querySelector('.form-close-btn');

// detailsButtRef.addEventListener('click', onDetButtClick);
// closeButtRef.addEventListener('click', onCloseButtClick);

// function onDetButtClick() {
//   modalRef.classList.add('is-open');
// }

// function onCloseButtClick() {
//   modalRef.classList.remove('is-open');
// }

// ======================O-MODAL======================
