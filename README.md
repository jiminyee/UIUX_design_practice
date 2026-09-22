# 🚀 UI/UX Admin Dashboard Practice

## 📌 프로젝트 개요

- **목적**: 효율적인 데이터 관리를 위한 어드민 인터페이스 구현 능력 향상
- **주요 기능**: KPI 모니터링, 프로세스 상태 요약, 차트 시각화, 사이드바 네비게이션
- **기술 스택**: HTML5, CSS3 (Flexbox/Grid), Font Awesome, Google Fonts

---

🎨 **Design System Points**

**1. Semantic Color System**

- 컬러를 단순히 색상명이 아닌, 역할에 따라 체계적으로 분리하여 UI의 직관성을 높였습니다.
- Primary Scale (Blue-Green): 브랜드의 정체성을 나타내며, 50부터 900까지 10단계로 세분화하여 호버 상태나 활성화 상태를 섬세하게 제어합니다.
- Feedback Colors: 상태를 즉각적으로 인지할 수 있도록 유틸리티 컬러를 정의했습니다.
- Success: 완료, 상승, 정상 (--success-400)
- Danger: 에러, 하락, 긴급 (--danger-500)
- Warning/Info: 주의 및 정보 안내
- Neutral Palette: 텍스트 가독성과 배경 구분을 위해 Warm Gray 계열의 네이럴 컬러를 사용하여 눈의 피로도를 낮췄습니다.

**2. Typography Hierarchy**

- 사용자가 정보를 빠르게 스캔할 수 있도록 시각적 위계(Visual Hierarchy)를 엄격히 적용했습니다.
- Font Family: 국문 가독성에 최적화된 Noto Sans를 기반으로 설계되었습니다.
- Size System: --h1(48px)부터 --text-xs(13px)까지 명확한 사이즈 규칙을 적용하여 정보의 중요도를 구분합니다.
- Line-Height Control: 본문 가독성을 위한 1.5(Normal)와 타이틀을 위한 1.2(Tight)를 구분하여 텍스트 밀도를 조절했습니다.

**3. Visual Depth & Elevation**

- 어드민 UI 특유의 평면적인 느낌을 탈피하고 요소 간의 층위(Layer)를 만들기 위해 그림자 시스템을 활용합니다.
- Soft Shadows: 강한 선(Border) 대신 --shadow-wide-blur-md와 같은 부드러운 그림자를 사용하여 카드의 독립성을 부여하고 입체감을 형성합니다.
- Alpha Overlays: 단색뿐만 아니라 Alpha-gradient 변수를 정의하여 배경색 위에 겹쳐지는 레이어의 깊이감을 조절합니다.

**4. Iconography & Interaction**

- Consistent Icons: 모든 아이콘은 --icon-size(20px)로 표준화하여 정렬의 일관성을 유지합니다.
- Active States: 사이드바 메뉴나 버튼 등 사용자의 액션이 발생하는 지점에 --primary-900 등 고대비 컬러를 사용하여 현재 위치를 명확히 노출합니다.

---

## 📁 폴더 구조

```text
UIUX_practice/
├── assets/                     # 이미지, 아이콘, 로고 리소스
├── css/                         # 스타일 시트 (컴포넌트별 분리)
│   ├── sidebar.css              # 사이드바 레이아웃
│   ├── topbar.css               # 상단바 및 유저 프로필
│   ├── cards.css                # KPI 및 요약 카드
│   ├── table.css                # 데이터 테이블 스타일
│   └── style.css                # 공통 변수 및 초기화
├── js/                          # 인터랙션 스크립트
└── index.html                   # 메인 대시보드 페이지
└── payments.html                # 결재 관리 페이지
└── payments-application.html    # 결재 신청서 페이지
└── users.html                   # 사용자 관리 페이지
└── user-detail.html             # 사용자 상세 페이지
```

---

## 🔗 GitHub 연결 안내

`https://github.com/ecoletree1001/pjt-resolve.git` 저장소 기준의 원격 연결, 인증(토큰/SSH),
커밋·푸시 흐름, GitHub Pages 배포 방법은
[docs/github-connection-guide.md](docs/github-connection-guide.md) 에 정리되어 있습니다.
