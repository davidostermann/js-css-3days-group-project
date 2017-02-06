// slider
var sliderContainer = document.querySelector('.slider');
contenu.images.forEach(function(item, index) {
  var div = document.createElement('div');
  div.classList.add('ui', 'image', 'fluid', 'slide', 'slide'+index);
  div.style.backgroundImage = 'url("'+ item + '")';
  sliderContainer.appendChild(div);
});

// slider anim
var slideIndex = contenu.images.length - 1;
var direction = -1;
var slide = function() {

  var currentSlide = document.querySelector('.slide'+slideIndex);
  currentSlide.style.opacity = (direction > 0) ? 1 : 0;

  if(slideIndex === 1 && direction < 0) {
    direction = +1;
  } else if(slideIndex === 3  && direction > 0) {
    direction = -1;
  } else {
    slideIndex = slideIndex + direction;
  }

  setTimeout(slide, 2000);
};

setTimeout(slide, 2000);
