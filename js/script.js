let check1 = false,
    check2 = false,
    check3 = false,
    check4 = false,
    check5 = false;
let questions = document.querySelectorAll('.section6__card');
let questions1 = document.querySelectorAll('.section4__card');

for (let question of questions) {
    question.addEventListener('click', function() {
        this.childNodes[3].classList.toggle('active');
        this.childNodes[1].childNodes[1].classList.toggle('active');
        if (this.childNodes[3].style.maxHeight){
            this.childNodes[3].style.maxHeight = null;
          } else {
            this.childNodes[3].style.maxHeight = this.childNodes[3].scrollHeight + "px";
          }
    });
}

for (let question of questions1) {
  question.addEventListener('click', function() {
      this.childNodes[3].childNodes[3].classList.toggle('active');
      this.childNodes[1].childNodes[1].classList.toggle('active');
      document.querySelector('.swiper-wrapper12').style.height = 'auto';
      if (this.childNodes[3].childNodes[3].style.maxHeight){
          this.childNodes[3].childNodes[3].style.maxHeight = null;
        } else {
          this.childNodes[3].childNodes[3].style.maxHeight = this.childNodes[3].childNodes[3].scrollHeight + "px";
        }
  });
}

new Swiper('.section4__slider', {
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  }
});

new Swiper('.section9__slider', {
  autoHeight: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  breakpoints: {
    835: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  }
});

new Swiper('#scroll_bg', {  
  slidesPerView: 3.8,
  spaceBetween: 131,
  freeMode: true,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 0
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 8,
      spaceBetween: 131,
    }
  }
});
new Swiper('.section5__slider', {  
  slidesPerView: 0.6,
  freeMode: true,
  speed: 10000,
  loop: true,
  autoplay: {
    delay: 0
  },
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
let langs = document.querySelectorAll('.header__language');
for (let lang of langs) {
  lang.addEventListener('click', function () {
    this.childNodes[5].classList.toggle('active');
  });
}
document.querySelector('.header__language .lang').addEventListener('click', function() {
  document.querySelector('.lang__switcher').style.display = 'flex';
});