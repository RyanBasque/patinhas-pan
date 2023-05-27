const input = document.querySelector('input[name=arrow]');
const container = document.querySelector('.galery-container')

input.addEventListener('change', () => {
    console.log('aaa')
    container.classList.toggle("galery-container-open")
});