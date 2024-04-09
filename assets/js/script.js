'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);


var slideIndex = 0;
showSlides();

function showSlides() {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none"; 
 }
 slideIndex++;
 if (slideIndex > slides.length) { slideIndex = 1 } 
  // Ensure 'fade' is the actual animation name in your CSS
 slides[slideIndex-1].style.animationName = "fade"; 
 slides[slideIndex-1].style.display = "block"; 
 setTimeout(showSlides, 3000); // Change image every 2 seconds
}
const productSwiper = new Swiper('.product-swiper', {
  slidesPerView: 3, 
  spaceBetween: 30, 
  loop: true,   

  // Autoplay Settings
  autoplay: {
    delay: 3000,  // Time between slides in milliseconds (3 seconds)
    disableOnInteraction: false // Optional: Keep autoplay running after user interaction
  },

  // Hide Navigation Buttons
  navigation: {
    nextEl: '.swiper-button-next',  
    prevEl: '.swiper-button-prev', 
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true 
  },

  breakpoints: { /* ... your breakpoint settings ... */ }
});





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}











