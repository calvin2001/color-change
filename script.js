const btn = document.getElementById('change-btn');
const code = document.getElementById('color-change');
const autoBtn = document.getElementById('auto-btn');
const logList = document.getElementById('log-list');

let autoMode = false;
let intervalId = null;

//로그 추가 함수
function addLog(color) {
    const time = new Date().toLocaleTimeString();
    const li = document.createElement('li');
    li.textContent = `[${time}] ${color}`;
    logList.prepend(li);
}

// 랜덤 색상 생성 함수
function changeColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomColor;
    code.textContent = randomColor; 
    addLog(randomColor);
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
