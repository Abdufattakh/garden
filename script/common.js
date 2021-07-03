// $(document).ready(function () {
//   let position = 0;
//   const slidesToShow = 3;
//   const slidesToScroll = 3;
//   const container = $('.slider-container');
//   const inner = $('.slider-track');
//   const item = $('.slider-item');
//   const prev = $('.prev');
//   const next = $('.next');
//   const itemsCount = item.length;
//   const itemWidth = container.width() / slidesToShow;
//   const movePosition = slidesToScroll * itemWidth;
//   let move = 0;
//   item.each(function (index, item) {
//     $(item).css({
//       minWidth: itemWidth,
//     });
//   });
//   next.click(function () {
//     move += 300;
//     // position -= movePosition;
//     // setPosition();
//     // checkBtns();
//   });
//   prev.click(function () {
//     // position += movePosition;
//     // setPosition();
//     // checkBtns();
//   });
//   // const setPosition = () => {
//   //   inner.css({
//   //     transform: `translateX(${position}px)`
//   //   });
//   // };
// //   const checkBtns = () => {
// //     prev.prop('disabled', position === 0);
// //     next.prop(
// //       'disabled',
// //       position <= -(itemsCount - slidesToShow) * itemWidth
// //     );
// //   };console.log(checkBtns);
// // checkBtns();
// });
// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');
// const slider = document.querySelector('.slider-track');
// let move = 0;
// let timer;
// function timeOut() {
//     timer = setTimeout(nextSlide, 3000);
// }
// timeOut()
// // события
// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);
// // Функции
// function nextSlide() {
//     move -= 300;
//     if(move < -1200){
//         move = 300;
//     } else {
//         slider.style.left = move + 'px';
//     }
//     clearTimeout(timer)
//     timeOut()
// }
// function prevSlide() {
//     if (move == 0) {
//         move = -1200;
//     } else {
//         move += 300;
//     }
//     slider.style.left = move + 'px';
//     clearTimeout(timer)
//     timeOut()
// }
$(document).ready(function () {
  // const
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  const slider = document.querySelector('.slider-track');
  let move = 0;
  let timer;

  function timeOut() {
    timer = setTimeout(nextSlide, 3000);
  }

  timeOut(); //Events

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide); //function

  function nextSlide() {
    move -= 435;

    if (move < -2610) {
      move = 435;
    } else {
      slider.style.left = move + 'px';
    }

    clearTimeout(timer);
    timeOut();
  }

  function prevSlide() {
    if (move == 0) {
      move = -2610;
    } else {
      move += 435;
    }

    slider.style.left = move + 'px';
    clearTimeout(timer);
    timeOut();
  }
}); // const

const aroundNext = document.querySelector('.around_next');
const aroundPrev = document.querySelector('.around_prev');
const aroundSlide = document.querySelector('.around-slider_list');
let move = 0; //Events

aroundNext.addEventListener('click', aroundNextSlide);
aroundPrev.addEventListener('click', aroundPrevSlide); //function

function aroundNextSlide() {
  move -= 372;

  if (move < -1488) {
    move = 372;
  } else {
    aroundSlide.style.left = move + 'px';
  }
}

;

function aroundPrevSlide() {
  if (move == 0) {
    move = -1488;
  } else {
    move += 372;
  }

  aroundSlide.style.left = move + 'px';
} // $(function () {
//  let burger = document.querySelector(".header-nav__burger"), 
//  body = document.querySelector("body"), 
//  list = document.querySelector(".header-nav__list"), 
//  bar = document.querySelector(".header-nav__bar"); 
//  burger.addEventListener("click", function () { 
//    burger.classList.toggle("active"), 
//    burger.classList.contains("active") 
//    ? (body.style = "overflow:hidden;", 
//       bar.style = "left:60%;") 
//    :(body.style = "overflow:auto;", 
//      bar.style = "left:100%;") })
// })


$(document).ready(function () {
  const burger = document.querySelector(".nav-menu"),
        body = document.querySelector("body"),
        bar = document.querySelector(".nav_bar");
  burger.addEventListener('click', function () {
    burger.classList.toggle("open");
  });
});