const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener("click", function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener("blur", function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log('scroll!');
  if(window.scrollY) {

  }
}, 300));
// _.throttle(함수, 시간); -> 300 ms 마다 실행할 수 있게끔 해줌
