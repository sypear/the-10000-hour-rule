"use strict";

const calculateButton = document.querySelector('#calculate-button');
const goButton = document.querySelector('#go-button');
const shareButton = document.querySelector('#share-button');
const modal = document.querySelector('#modal');
const modalCloseButton = document.querySelector('#modal-close-button');
const loading = document.querySelector('#loading');
const result = document.querySelector('#result');
const resultPlan = document.querySelector('#result-plan');
const resultTime = document.querySelector('#result-time');

// 1만 시간까지 걸리는 날짜 계산
function calculate() {
    const plan = document.querySelector('#input-plan');
    const time = document.querySelector('#input-time');

    if (!plan.value || !time.value) {
        alert('항목을 모두 입력해주세요.');
        return;
    }

    if (+time.value < 1 || +time.value > 24) {
        alert('1시간 이상, 24시간 이하의 숫자를 입력해주세요.');
        time.value = null;
        time.focus();
        return;
    }

    loading.style.display = 'block';
    result.style.display = 'none';

    // 로딩 애니메이션
    setTimeout(() => {
        loading.style.display = 'none';
        result.style.display = 'block';

        // 날짜 계산(소수점 올림)
        resultPlan.innerText = plan.value;
        resultTime.innerText = Math.ceil(10000 / +time.value);
    }, 1500);
};

// 모달창 열기
function openModal() {
    modal.style.display = 'flex';
};

// 모달창 닫기
function closeModal() {
    modal.style.display = 'none';
};

// 공유하기
function shareURL() {
    const url = window.location.href;
    
    const textArea = document.createElement('textarea');
    document.body.appendChild(textArea);
    textArea.value = url;
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    alert('📋 URL이 복사됐어요!')
};

// 클릭 이벤트
calculateButton.addEventListener('click', calculate);
goButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);
shareButton.addEventListener('click', shareURL);