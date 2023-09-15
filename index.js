"use strict";
document.body.style.background = '#6c6c6c';
const buttons = document.createElement('div');
const container = document.createElement('div');
const nextButton = document.createElement('button');
const prevButton = document.createElement('button');
const slideContainer = document.createElement('div');

slideContainer.classList.add('slider-container'); 
container.classList.add('container'); 
nextButton.classList.add('button'); 
prevButton.classList.add('button');

prevButton.textContent = 'Prev';
nextButton.textContent = 'Next';

document.body.append(container)
buttons.append(prevButton,nextButton)
container.append(slideContainer, buttons)


let currentIndex = 0;
let images = [
		'img/img-1.jpg',
		'img/img-2.jpg',
		'img/img-3.jpg',
		'img/img-4.jpg',
		'img/img-5.jpg',
		'img/img-6.jpg',
		'img/img-7.jpg',
		'img/img-8.jpg',
		'img/img-9.jpg',
		'img/img-10.jpg',
		'img/img-11.jpg',
		'img/img-12.jpg',
		'img/img-13.jpg',
		'img/img-14.jpg',
		'img/img-15.jpg',
		'img/img-16.jpg',
		'img/img-17.jpg',
		'img/img-18.jpg',
		'img/img-19.jpg',
		'img/img-20.jpg',
		'img/img-21.jpg',
		'img/img-22.jpg',
		'img/img-23.jpg',
		'img/img-24.png',
		'img/img-25.jpg',
		'img/img-26.jpg',
		'img/img-27.jpg',
		'img/img-28.jpg',
		'img/img-29.jpg',
		'img/img-30.jpg',
		'img/img-31.jpg',
		'img/img-32.jpg',
		'img/img-33.jpg',
		'img/img-34.jpg',
		'img/img-35.jpg',
		'img/img-36.jpg',
		'img/img-37.jpg',
		'img/img-38.jpg',
		'img/img-39.jpg',
		'img/img-40.jpg',
		'img/img-41.jpg',
		'img/img-42.jpg',
		'img/img-43.jpg',
		'img/img-44.jpg',
];
function prevSlider() {
		if (currentIndex > 0) {
			currentIndex--;
		} else {
			currentIndex = images.length - 1;
		}
		updateSlide();
}
function nextSlider() {
		if (currentIndex < images.length - 1) {
			currentIndex++;
		} else {
			currentIndex = 0;
		}
		updateSlide();
}
function updateSlide() {
		slideContainer.innerHTML = '';
		const imgElement = document.createElement('img');
		imgElement.src = images[currentIndex];
		imgElement.alt = 'photo';
		imgElement.style.height = '100%'
		imgElement.style.width = '100%'
		slideContainer.append(imgElement);
}
updateSlide();
prevButton.onclick = prevSlider;
nextButton.onclick = nextSlider;
