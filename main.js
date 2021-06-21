const leftArrow = document.querySelector('#left-arrow');
const RightArrow = document.querySelector('#right-arrow');
const slideImage = document.querySelectorAll('.slide');
let current = 0;

// clear all images

function removeImage() {
  for (let i = 0; i < slideImage.length; i += 1) {
    slideImage[i].style.display = 'none';
  }
}

// init the slide
// function firstImage() {
//   removeImage();
//   slideImage[0].style.display = 'block';
// }

// left nav prev

function arrowLeft() {
  removeImage();
  slideImage[current - 1].style.display = 'block';
  current -= 1;
}

// add event listener to the left arrow
leftArrow.addEventListener('click', () => {
  if (current === 0) {
    current = slideImage.length;
  }
  arrowLeft();
});

// Right arrow next
function arrowRight() {
  removeImage();
  slideImage[current + 1].style.display = 'block';
  current += 1;
}

// add event listener to the right arrow
RightArrow.addEventListener('click', () => {
  if (current === slideImage.length - 1) {
    current = -1;
  }

  arrowRight();
});

// firstImage();
