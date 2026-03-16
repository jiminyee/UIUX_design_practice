// 스위치 버튼 기능
document.addEventListener('DOMContentLoaded', function() {
  const switches = document.querySelectorAll('.switch');
  
  switches.forEach(switchElement => {
    // 초기 상태 설정 (기본: 꺼짐)
    let isChecked = false;
    
    // 클릭 이벤트
    switchElement.addEventListener('click', function() {
      isChecked = !isChecked;
      
      if (isChecked) {
        this.classList.add('checked');
      } else {
        this.classList.remove('checked');
      }
    });
    
    // 키보드 접근성 (Enter, Space)
    switchElement.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.click();
      }
    });
    
    // 포커스 가능하도록 설정
    switchElement.setAttribute('tabindex', '0');
    switchElement.setAttribute('role', 'switch');
    switchElement.setAttribute('aria-checked', 'false');
    
    // 상태 변경 시 aria-checked 업데이트
    switchElement.addEventListener('click', function() {
      this.setAttribute('aria-checked', isChecked ? 'true' : 'false');
    });
  });
});
