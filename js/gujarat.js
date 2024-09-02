// ScrollReveal Configuration
ScrollReveal({
  mobile: false,
});

ScrollReveal().reveal('.header', {
  delay: 500,
  reset: false,
  mobile: false,
});

ScrollReveal().reveal('.showcase-content h1', {
  scale: 2,
  duration: 3000,
  mobile: false,
});

ScrollReveal().reveal('.showcase-content', {
  scale: 2,
  duration: 3000,
  delay: 500,
  mobile: false,
});

ScrollReveal().reveal('.showcase-search', {
  duration: 1500,
  delay: 500,
});

ScrollReveal().reveal('.destinations h2', {
  reset: true,
  duration: 1500,
  delay: 500,
  origin: 'left',
  distance: '50px',
});

ScrollReveal().reveal('.destinations-cards', {
  duration: 1500,
});

ScrollReveal().reveal('.section-title', {
  reset: true,
  duration: 1500,
  delay: 500,
  origin: 'left',
  distance: '50px',
});

ScrollReveal().reveal('.hotel-card, #tours, #activities', {
  duration: 1500,
  origin: 'left',
  distance: '50px',
});

ScrollReveal().reveal('.about-content', {
  reset: true,
  duration: 1500,
  origin: 'left',
  distance: '50px',
});

ScrollReveal().reveal('.about-img', {
  reset: true,
  duration: 1500,
  origin: 'right',
  distance: '50px',
});

// Swiper Configuration with Autoplay
const swiper = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  speed: 600,
  slidesPerView: 6,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 500, // Delay in milliseconds (3 seconds)
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
  breakpoints: {
    240: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

// Toggle Buttons for Hotel Cards
const hotelButton1 = document.querySelector('#hotelButton1');
const hotelCards1 = document.querySelectorAll('#restaurants .hotel-cards');

hotelButton1.addEventListener('click', (e) => {
  e.preventDefault();
  hotelCards1.forEach((card) => {
    card.classList.remove('off'); // Ensure all images are shown
  });

  if (e.target.innerHTML.includes('view all')) {
    e.target.innerHTML = `less <img src="/Imgs/icons/bleft.png">`;
  } else {
    hotelCards1.forEach((card, index) => {
      if (index >= 4) { // Assuming the first 4 images are always visible
        card.classList.toggle('off');
      }
    });
    e.target.innerHTML = `view all <img src="/Imgs/icons/bleft.png">`;
  }
});

const hotelButton2 = document.querySelector('#hotelButton2');
const hotelCards2 = document.querySelectorAll('#peoplesGallery .hotel-cards');

hotelButton2.addEventListener('click', (e) => {
  e.preventDefault();
  hotelCards2.forEach((card) => {
    card.classList.remove('off'); // Ensure all images are shown
  });

  if (e.target.innerHTML.includes('view all')) {
    e.target.innerHTML = `less <img src="/Imgs/icons/bleft.png">`;
  } else {
    hotelCards2.forEach((card, index) => {
      if (index >= 4) { // Assuming the first 4 images are always visible
        card.classList.toggle('off');
      }
    });
    e.target.innerHTML = `view all <img src="/Imgs/icons/bleft.png">`;
  }
});

// Navbar Toggle Functionality
const toogleOn = document.querySelector('.toggleOn');
const toogleClose = document.querySelector('.toggleClose');
const navbar = document.querySelector('.navbar');
const navlists = document.querySelectorAll('.navlist');

toogleOn.addEventListener('click', (e) => {
  e.preventDefault();
  navbar.classList.add('navlistOn');
  toogleClose.classList.add('toggleCloseOn');
  toogleOn.classList.add('toggleOnClose');
});

toogleClose.addEventListener('click', (e) => {
  navbar.classList.remove('navlistOn');
  toogleClose.classList.remove('toggleCloseOn');
  toogleOn.classList.remove('toggleOnClose');
});

navlists.forEach((xy) => {
  xy.addEventListener('click', (x) => {
    navbar.classList.remove('navlistOn');
    toogleClose.classList.remove('toggleCloseOn');
    toogleOn.classList.remove('toggleOnClose');
  });
});
