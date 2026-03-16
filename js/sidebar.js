// 사이드바 드롭다운 기능
document.addEventListener('DOMContentLoaded', function() {
    // 햄버거 메뉴 클릭 시 사이드바 접힘/펼침
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const topbar = document.querySelector('.topbar');
    const mainContent = document.querySelector('.main-content');
    
    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        
        if (sidebar.classList.contains('collapsed')) {
            // 사이드바 접혔을 때
            sidebar.style.width = '60px';
            topbar.style.left = '0px';
            mainContent.style.marginLeft = '0px';
            this.querySelector('i').className = 'fa-solid fa-bars';
        } else {
            // 사이드바 펼쳐졌을 때
            sidebar.style.width = '260px';
            topbar.style.left = '276px';
            mainContent.style.marginLeft = '276px';
            this.querySelector('i').className = 'fa-solid fa-bars';
        }
    });

    // 그룹 타이틀 클릭 시 메뉴 토글
    const groupTitles = document.querySelectorAll('.group-title');
    
    groupTitles.forEach(title => {
        title.addEventListener('click', function() {
            // 해당 그룹의 ul 요소 찾기
            const menuList = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // 메뉴 토글
            if (menuList.style.display === 'none') {
                menuList.style.display = 'block';
                // 아이콘 방향 변경 (위로)
                icon.className = 'fa-solid fa-angle-up';
                icon.style.color = 'var(--neutral-gray-500)';
            } else {
                menuList.style.display = 'none';
                // 아이콘 방향 변경 (아래로)
                icon.className = 'fa-solid fa-angle-down';
                icon.style.color = 'var(--neutral-gray-500)';
            }
        });
    });

    // 메뉴 아이템 클릭 시 활성화 상태 변경
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // 링크 기본 동작 유지
            if (this.querySelector('a').getAttribute('#')) {
                e.preventDefault();
            }
            
            // 모든 메뉴 아이템에서 active 클래스 제거
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
                // 아이콘 색상 원복
                const icon = menuItem.querySelector('i');
                if (icon) {
                    icon.style.color = 'var(--neutral-white-base)';
                }
            });
            
            // 클릭된 메뉴 아이템에 active 클래스 추가
            this.classList.add('active');
            // 활성화된 메뉴 아이콘 색상 변경
            const activeIcon = this.querySelector('i');
            if (activeIcon) {
                activeIcon.style.color = 'var(--primary-900)';
            }
        });
    });

    // 초기 상태 설정 (모든 메뉴는 열려있음)
    const allMenuLists = document.querySelectorAll('.menu-group ul');
    allMenuLists.forEach(list => {
        list.style.display = 'block';
    });
});
