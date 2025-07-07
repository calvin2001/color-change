const btn = document.getElementById('change-btn');
const code = document.getElementById('color-change');
const autoBtn = document.getElementById('auto-btn');

let autoMode = false;
let intervalId = null;

// 랜덤 색상 생성 함수
function changeColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomColor;
    code.textContent = randomColor; 
}

btn.addEventListener('click', changeColor);

autoBtn.addEventListener('click', () => {
    autoMode = !autoMode;
    autoBtn.textContent = autoMode ? "자동 모드 끄기" : "자동 모드 켜기";

    if(autoMode) {
        intervalId = setInterval(changeColor, 3000);
    } else {
        clearInterval(intervalId);
    }
});

