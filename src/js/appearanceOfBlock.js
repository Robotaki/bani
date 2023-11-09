const toggleButton = document.getElementById('toggleButton');
const optionsBlocks = document.querySelectorAll('.options__block');
let currentIndex = 0;

toggleButton.addEventListener('click', () => {
    if (currentIndex < optionsBlocks.length) {
        optionsBlocks[currentIndex].style.display = 'block';
        currentIndex++
    } else {
        optionsBlocks.forEach(block => {
            block.style.display = 'none';
        });
        currentIndex = 0;
    }
})