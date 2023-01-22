let description = document.querySelector('.description');
let descriptionOffset = description.offsetTop;

let techniques = document.querySelector('.techniques');
let techniquesOffset = techniques.offsetTop;

let video = document.querySelector('.video');
let videoOffset = video.offsetTop;

let oakley = document.querySelector('.oakley');
let oakleyOffset = oakley.offsetTop;

let feynman = document.querySelector('.feynman');
let feynmanOffset = feynman.offsetTop;

let digits = document.querySelector('.digits');
let digitsOffset = digits.offsetTop;

let khan = document.querySelector('.khan');
let khanOffset = khan.offsetTop;

let kaufman = document.querySelector('.kaufman');
let kaufmanOffset = kaufman.offsetTop;

let resources = document.querySelector('.resources');
let resourcesOffset = resources.offsetTop;

let scrollY = window.pageYOffset;

document.addEventListener('scroll', function() {
  scrollY = window.pageYOffset;
  console.log(scrollY)
  if (scrollY <= descriptionOffset + 200) {
    description.classList.add('accent');
    techniques.classList.remove('accent');
  } else if (scrollY <= techniquesOffset + 200) {
    techniques.classList.add('accent');
    description.classList.remove('accent');
    video.classList.remove('accent');
  } else if (scrollY <= videoOffset + 200) {
    video.classList.add('accent');
    description.classList.remove('accent');
    oakley.classList.remove('accent');
  } else if (scrollY <= oakleyOffset + 200) {
    oakley.classList.add('accent');
    video.classList.remove('accent');
    feynman.classList.remove('accent');
  } else if (scrollY <= feynmanOffset + 200) {
    feynman.classList.add('accent');
    oakley.classList.remove('accent');
    digits.classList.remove('accent');
  } else if (scrollY <= digitsOffset + 200) {
    digits.classList.add('accent');
    feynman.classList.remove('accent');
    khan.classList.remove('accent');
  } else if (scrollY <= khanOffset + 200) {
    khan.classList.add('accent');
    digits.classList.remove('accent');
    kaufman.classList.remove('accent');
  } else if (scrollY <= kaufmanOffset + 200) {
    kaufman.classList.add('accent');
    digits.classList.remove('accent');
    resources.classList.remove('accent');
  } else if (scrollY <= resourcesOffset + 200) {
    resources.classList.add('accent');
    kaufman.classList.remove('accent');
  } else {
    description.classList.remove('accent');
    techniques.classList.remove('accent');
    video.classList.remove('accent');
    oakley.classList.remove('accent');
    feynman.classList.remove('accent');
    digits.classList.remove('accent');
    khan.classList.remove('accent');
    kaufman.classList.remove('accent');
    resources.classList.remove('accent');
  }
});
