const btn = document.getElementById('change-btn');
const code = document.getElementById('color-change');

btn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomColor;
    code.textContent = randomColor;
});