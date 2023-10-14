let currentIndex = 0;
const products = ["img/pepsi001.png", "img/pepsi002.png", "img/pepsi003.png"];
const colors = ["#005cbb", "#c0c0c0", "#000"];

function imgSlider(anything, color) {
    const imgBox = document.querySelector('.imgBox');
    imgBox.classList.add('fade-out');
    setTimeout(() => {
        document.querySelector('.pepsico').src = anything;
        changeCircleColor(color);
    }, 500);

    setTimeout(() => {
        imgBox.classList.remove('fade-out');
    }, 1000); // Adjusted the time to match the circle change
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

function autoSlider() {
    currentIndex = (currentIndex + 1) % products.length;
    const nextImage = products[currentIndex];
    const nextColor = colors[currentIndex];
    imgSlider(nextImage, nextColor);
}

setInterval(autoSlider, 6500);
