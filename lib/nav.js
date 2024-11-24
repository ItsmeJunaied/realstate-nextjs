let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

// Re-order thumbnail items for smooth transition
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function() {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}

// Autoplay Logic (auto-next after a delay)
let runTimeOut;
let runNextAuto = setTimeout(() => {
    showSlider('next');
}, timeAutoNext);

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        // Move first item to the last for next transition
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        // Move the last item to the first for prev transition
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    // Re-trigger text animations
    reanimateText();

    // Remove animation classes after animation time
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // Restart the auto-next timeout
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        showSlider('next');
    }, timeAutoNext);
}

// Function to re-animate text
function reanimateText() {
    const currentItem = SliderDom.querySelector('.carousel .list .item:first-child .content');
    currentItem.classList.add('animate'); // Trigger the animation
}
