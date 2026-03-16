// 모달 창 기능
document.addEventListener('DOMContentLoaded', function() {
  const passwordResetBtn = document.querySelector('button.btn-primary.btn-fixed');
  const modal = document.getElementById('passwordResetModal');
  const modalClose = document.getElementById('modalClose');
  const modalCancel = document.getElementById('modalCancel');
  const modalConfirm = document.getElementById('modalConfirm');
  
  // 비밀번호 초기화 버튼 클릭 시 모달 열기
  if (passwordResetBtn && passwordResetBtn.textContent.includes('비밀번호 초기화')) {
    passwordResetBtn.addEventListener('click', function(event) {
      event.preventDefault();
      openModal();
    });
  }
  
  // 모달 열기 함수
  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
  }
  
  // 모달 닫기 함수
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // 배경 스크롤 복원
  }
  
  // 닫기 버튼 클릭 시 모달 닫기
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  // 취소 버튼 클릭 시 모달 닫기
  if (modalCancel) {
    modalCancel.addEventListener('click', closeModal);
  }
  
  // 초기화 버튼 클릭 시 처리
  if (modalConfirm) {
    modalConfirm.addEventListener('click', closeModal);
  }
  
  // ESC 키 누를 때 모달 닫기
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
});
