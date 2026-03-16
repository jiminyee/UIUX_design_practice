// 사용자 테이블 행 클릭 시 상세 페이지 이동
document.addEventListener('DOMContentLoaded', function() {
  const tableRows = document.querySelectorAll('.chart-table tbody tr');
  
  tableRows.forEach(row => {
    // 체크박스가 있는 행은 체크박스 클릭 시 이동하지 않도록
    row.addEventListener('click', function(event) {
      // 체크박스 클릭 시 이벤트 무시
      if (event.target.type === 'checkbox') {
        return;
      }
      
      // 행 클릭 시 사용자 상세 페이지로 이동
      window.location.href = 'user-detail.html';
    });
    
    // 행에 마우스 호버 시 커서 변경
    row.style.cursor = 'pointer';
  });
});
