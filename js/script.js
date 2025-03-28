const sliderContainer = document.querySelector('.slider-container');
const beforeImageWrapper = document.querySelector('.before'); // Обертка "до"
const divider = document.querySelector('.slider-divider');

let isDragging = false;

function startDrag(e) {
    isDragging = true;
    moveDivider(e);
}

function stopDrag() {
    isDragging = false;
}

function moveDivider(e) {
    if (!isDragging) return;

    let clientX = e.touches ? e.touches[0].clientX : e.clientX; // Учитываем touch-события
    let rect = sliderContainer.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    let percentage = (offsetX / rect.width) * 100;

    percentage = Math.max(0, Math.min(100, percentage)); // Ограничиваем от 0 до 100

    beforeImageWrapper.style.width = `${percentage}%`;
    divider.style.left = `${percentage}%`;
}

// Поддержка мыши
sliderContainer.addEventListener('mousedown', startDrag);
sliderContainer.addEventListener('mousemove', moveDivider);
sliderContainer.addEventListener('mouseup', stopDrag);
sliderContainer.addEventListener('mouseleave', stopDrag);

// Поддержка сенсорных экранов
sliderContainer.addEventListener('touchstart', startDrag);
sliderContainer.addEventListener('touchmove', moveDivider);
sliderContainer.addEventListener('touchend', stopDrag);
