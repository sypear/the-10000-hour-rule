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