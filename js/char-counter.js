// 문자 카운터 기능
document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("entered-content");
  const charCount = document.getElementById("char-count");

  if (textarea && charCount) {
    // 초기 카운트 설정
    charCount.textContent = "0";

    // 입력 시 카운트 업데이트
    textarea.addEventListener("input", function () {
      const currentLength = this.value.length;
      charCount.textContent = currentLength;

      // 1000자 초과 시 색상 변경
      if (currentLength > 1000) {
        charCount.style.color = "var(--danger-500)";
      } else {
        charCount.style.color = "var(--primary-600)";
      }
    });
  }
});
