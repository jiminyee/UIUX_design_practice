// 테이블 체크박스 기능
document.addEventListener('DOMContentLoaded', function() {
  // 모든 체크박스에 이벤트 리스너 추가
  const checkboxes = document.querySelectorAll('.chart-table tbody input[type="checkbox"]');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const row = this.closest('tr');
      
      if (this.checked) {
        row.classList.add('checked');
      } else {
        row.classList.remove('checked');
      }
    });
  });
  
  // 전체 선택 체크박스 기능
  const selectAllCheckbox = document.getElementById('select-all');
  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener('change', function() {
      const rowCheckboxes = document.querySelectorAll('.chart-table tbody input[type="checkbox"]');
      
      rowCheckboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
        const row = checkbox.closest('tr');
        
        if (this.checked) {
          row.classList.add('checked');
        } else {
          row.classList.remove('checked');
        }
      });
    });
  }
});
