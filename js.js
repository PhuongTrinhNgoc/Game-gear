// let xOverlay = document.querySelector('.overlay');
// function onBars(){
//     xOverlay.classList.toggle('overlay');
// }
// function closeX(){
//     xOverlay.classList.toggle('overlay');
// }
// let searchNav = doucument.querySelector('.search-nav')
// let btnFocus = document.querySelectorBycla('.search-nav-all')
// console.log(btnFocus)
// function focusRender(){
//     btnFocus.style='display: block'
//     console.log(btnFocus)
// }



// const newfunc = (pa) => {
//     pa();
// }
// const show = () =>{
//     console.log("chay luuot 1")
// }
// const param = () => {
//     console.log("chay roi luot 2")
// }
// newfunc(param);
// show();

// sale-item
const gap = 16;

const carousel = document.getElementById("carousel"),
carousel1 = document.getElementById("carousel1"),
carousel3 = document.getElementById("carousel3"),

  content = document.getElementById("content"),
  content1 = document.getElementById("content2"),
  content3 = document.getElementById("content3"),


  next = document.getElementById("next"),
  next1 = document.getElementById("next1"),
  next3 = document.getElementById("next3"),

  prev1 = document.getElementById("prev1"),
  prev = document.getElementById("prev");
  prev3 = document.getElementById("prev3");


next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex"
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex"
  }
});

prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "flex"


  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";

  }
});
next1.addEventListener("click", e => {
  carousel1.scrollBy(width + gap, 0);
  if (carousel1.scrollWidth !== 0) {
    prev1.style.display = "flex";
  }
  if (content2.scrollWidth - width - gap <= carousel1.scrollLeft + width) {
    next1.style.display = "flex";
  }
});
prev1.addEventListener("click", e => {
  carousel1.scrollBy(-(width + gap), 0);
  if (carousel1.scrollLeft - width - gap <= 0) {
    prev1.style.display = "flex";


  }
  if (!content1.scrollWidth - width - gap <= carousel1.scrollLeft + width) {
    next1.style.display = "flex";

  }
});
next3.addEventListener("click", e => {
  carousel3.scrollBy(width + gap, 0);
  if (carousel3.scrollWidth !== 0) {
    prev3.style.display = "flex";
  }
  if (content3.scrollWidth - width - gap <= carousel3.scrollLeft + width) {
    next3.style.display = "flex";
  }
});
prev3.addEventListener("click", e => {
  carousel3.scrollBy(-(width + gap), 0);
  if (carousel3.scrollLeft - width - gap <= 0) {
    prev3.style.display = "flex";


  }
  if (!content3.scrollWidth - width - gap <= carousel3.scrollLeft + width) {
    next3.style.display = "flex";

  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
let width2 = carousel1.offsetWidth;
window.addEventListener("resize", e => (width = carousel1.offsetWidth));
let width3 = carousel3.offsetWidth;
window.addEventListener("resize", e => (width = carousel3.offsetWidth));
// menu search

// fotter

$(document).ready(function(){
  $('.third-row  li.active-1').find('span').css('color' , 'white');
  $(' .third-row li').click(function() {
  $(' .third-row li.active-1').find('span').css('color' , 'black');
  $(' .third-row li.active-1').removeClass('active-1');
  $(' .third-row li.active-1').addClass('text-dark');
  $(this).addClass('active-1');
  $(' .third-row  li.active-1').find('span').css('color' , 'white');
});

});