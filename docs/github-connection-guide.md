# 🔗 GitHub 연결 가이드

이 문서는 프로젝트를 아래 GitHub 저장소에 연결하고, 평소 작업을 올리고 내려받는 방법을 정리한 안내서입니다.

```text
https://github.com/ecoletree1001/pjt-resolve.git
```

| 항목 | 값 |
| --- | --- |
| 소유자(Owner) | `ecoletree1001` |
| 저장소 이름 | `pjt-resolve` |
| HTTPS 주소 | `https://github.com/ecoletree1001/pjt-resolve.git` |
| SSH 주소 | `git@github.com:ecoletree1001/pjt-resolve.git` |
| 웹 페이지 | https://github.com/ecoletree1001/pjt-resolve |

> 참고: 지금 이 폴더(`UIUX_design_practice`)는 다른 저장소에 연결되어 있는 별개의 실습 프로젝트입니다.
> `pjt-resolve` 작업 폴더에서 아래 2번 절차를 따라 연결하세요.

---

## 1. 지금 연결 상태 확인하기

가장 먼저 내 폴더가 GitHub의 어떤 저장소를 바라보고 있는지 확인합니다.

```bash
git remote -v
```

연결이 끝난 뒤의 정상 출력:

```text
origin  https://github.com/ecoletree1001/pjt-resolve.git (fetch)
origin  https://github.com/ecoletree1001/pjt-resolve.git (push)
```

- `origin` : 원격 저장소의 별명(기본값)
- `fetch` : 내려받을 주소 / `push` : 올릴 주소

아무것도 출력되지 않으면 아직 연결 전이므로 2번으로 갑니다.

---

## 2. 내 폴더를 `pjt-resolve` 에 연결하기

### 상황 A. GitHub에 이미 `pjt-resolve` 저장소가 있고, 처음 받아오는 경우 (가장 간단)

```bash
# 작업할 상위 폴더로 이동 후
git clone https://github.com/ecoletree1001/pjt-resolve.git
cd pjt-resolve
```

`clone`은 내려받기와 동시에 `origin` 연결까지 자동으로 끝납니다. 별도 설정이 필요 없습니다.

### 상황 B. 내 컴퓨터에 이미 작업 폴더가 있고, 그 폴더를 연결하는 경우

```bash
# 작업 폴더로 이동
cd ~/pjt-resolve

# git 저장소로 초기화 (이미 .git 폴더가 있다면 생략)
git init

# 기본 브랜치 이름을 main으로 지정
git branch -M main

# 원격 저장소 연결
git remote add origin https://github.com/ecoletree1001/pjt-resolve.git

# 원격에 이미 파일이 있다면 먼저 합치기
git pull origin main --allow-unrelated-histories

# 첫 커밋 후 업로드
git add .
git commit -m "feat: first commit"
git push -u origin main
```

`git push -u origin main`의 `-u`는 "앞으로 이 브랜치는 origin/main과 짝"이라고 기억시키는 옵션입니다.
한 번 실행해두면 이후에는 `git push`만 쳐도 됩니다.

### 상황 C. 이미 다른 주소에 연결되어 있어 `pjt-resolve` 로 바꾸는 경우

```bash
git remote set-url origin https://github.com/ecoletree1001/pjt-resolve.git
git remote -v   # 바뀐 주소 확인
```

### 상황 D. GitHub에 저장소가 아직 없는 경우

1. GitHub 우측 상단 `+` → **New repository**
2. Owner를 **ecoletree1001**, Repository name을 **pjt-resolve** 로 입력
3. **README, .gitignore, license는 체크하지 않기** (빈 저장소여야 충돌이 없습니다)
4. **Create repository** 클릭 → 이후 상황 B 진행

---

## 3. 로그인 인증 방법 (중요)

GitHub는 2021년부터 **비밀번호로는 push할 수 없습니다.** 아래 두 방법 중 하나를 씁니다.
`ecoletree1001` 이 조직(Organization) 계정이라면, 내 개인 계정이 해당 저장소의 **Collaborator 또는 팀 멤버로 등록되어 있어야** 합니다.

### 방법 A. HTTPS + Personal Access Token (처음이라면 추천)

1. GitHub → 우측 상단 프로필 → **Settings**
2. 맨 아래 **Developer settings** → **Personal access tokens** → **Tokens (classic)**
3. **Generate new token (classic)** 클릭
4. Note에 용도 입력(예: `pjt-resolve-macbook`), Expiration 선택
5. Scopes에서 **`repo` 체크**
6. **Generate token** → 생성된 토큰 문자열을 복사 (이 화면을 벗어나면 다시 볼 수 없습니다)
7. `git push` 할 때 물어보는 곳에 입력
   - Username: 내 GitHub 아이디
   - Password: **복사한 토큰 붙여넣기**

> 조직 저장소인데 접근이 안 되면, 조직 설정에서 SSO가 켜져 있을 수 있습니다.
> 토큰 목록 화면의 **Configure SSO → Authorize** 를 눌러 조직 사용을 허용해 주세요.

토큰을 매번 입력하지 않으려면 저장해둡니다.

```bash
# macOS
git config --global credential.helper osxkeychain

# Windows
git config --global credential.helper manager

# Linux (15분 임시 저장)
git config --global credential.helper cache
```

### 방법 B. SSH 키 (한 번 설정하면 계속 편함)

```bash
# 1) 키 생성 (이메일은 GitHub 가입 이메일)
ssh-keygen -t ed25519 -C "jiminyee@ecoletree.com"
# 질문은 전부 Enter로 넘어가도 됩니다

# 2) 공개키 내용 확인 후 전체 복사
cat ~/.ssh/id_ed25519.pub
```

3. GitHub → **Settings** → **SSH and GPG keys** → **New SSH key**
4. Title 입력, Key에 복사한 내용 붙여넣기 → **Add SSH key**

```bash
# 5) 연결 테스트
ssh -T git@github.com
# "Hi ...! You've successfully authenticated..." 가 나오면 성공

# 6) 원격 주소를 SSH 방식으로 변경
git remote set-url origin git@github.com:ecoletree1001/pjt-resolve.git
```

---

## 4. 평소 작업 흐름

```bash
# 1) 최신 내용 받아오기 (작업 시작 전 항상)
git pull origin main

# 2) 파일 수정...

# 3) 변경된 파일 확인
git status

# 4) 변경분 담기
git add .                    # 전체
git add css/style.css        # 특정 파일만

# 5) 커밋 (작업 내용을 한 줄로 설명)
git commit -m "feat: 결재 관리 페이지 테이블 스타일 추가"

# 6) GitHub에 올리기
git push origin main
```

### 커밋 메시지 접두사 예시

| 접두사 | 의미 | 예시 |
| --- | --- | --- |
| `feat` | 새 기능/페이지 추가 | `feat: 사용자 상세 페이지 추가` |
| `fix` | 버그 수정 | `fix: 사이드바 활성 상태 오류 수정` |
| `style` | 화면/CSS 수정 | `style: KPI 카드 그림자 값 조정` |
| `docs` | 문서 수정 | `docs: README 폴더 구조 갱신` |
| `refactor` | 동작 변화 없는 정리 | `refactor: 컬러 변수 분리` |

---

## 5. 브랜치로 안전하게 작업하기

여러 명이 함께 쓰는 저장소라면 `main`에 바로 올리지 않고 작업별로 브랜치를 나눕니다.

```bash
# 새 브랜치 만들고 이동
git switch -c feature/login-page

# 작업 후 커밋
git add .
git commit -m "feat: 로그인 페이지 마크업 추가"

# 브랜치를 GitHub에 올리기
git push -u origin feature/login-page
```

올린 뒤 저장소 페이지(https://github.com/ecoletree1001/pjt-resolve)에 뜨는 **Compare & pull request** 버튼으로 PR을 만들고,
리뷰 후 **Merge pull request**를 누르면 `main`에 합쳐집니다.

```bash
# 합친 뒤 로컬 정리
git switch main
git pull origin main
git branch -d feature/login-page
```

---

## 6. 다른 컴퓨터에서 이어서 작업하기

```bash
git clone https://github.com/ecoletree1001/pjt-resolve.git
cd pjt-resolve
```

---

## 7. VS Code에서 연결해 쓰기

1. VS Code에서 프로젝트 폴더 열기 (`File` → `Open Folder`)
2. 왼쪽 사이드바의 **Source Control** 아이콘(가지 모양) 클릭
3. 변경된 파일 목록이 보이면 메시지 입력 후 **Commit**
4. **Sync Changes** 버튼으로 push/pull 동시 처리

GitHub 계정을 연결하려면 좌측 하단 프로필 아이콘 → **Sign in with GitHub** 를 사용하면 토큰 입력 없이 인증됩니다.

> 저장소를 바로 받아오려면: `Ctrl/Cmd + Shift + P` → **Git: Clone** →
> `https://github.com/ecoletree1001/pjt-resolve.git` 붙여넣기

---

## 8. GitHub Pages로 화면 배포하기

HTML/CSS/JS 로만 이루어진 정적 사이트라면 별도 서버 없이 바로 웹에 띄울 수 있습니다.

1. 저장소 → **Settings** → 좌측 **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / 폴더: **/ (root)** 선택 → **Save**
4. 1~2분 뒤 아래 주소에서 확인

```text
https://ecoletree1001.github.io/pjt-resolve/
```

루트에 `index.html`이 있으면 그 페이지가 먼저 열리고, 나머지는
`https://ecoletree1001.github.io/pjt-resolve/users.html` 처럼 파일명을 붙여 접근합니다.

> 조직 계정의 비공개(Private) 저장소는 요금제에 따라 Pages를 쓸 수 없을 수 있습니다.
> Pages 메뉴에 안내 문구가 뜨면 저장소를 Public으로 바꾸거나 관리자에게 문의하세요.

---

## 9. 자주 만나는 문제

| 메시지 | 원인 | 해결 |
| --- | --- | --- |
| `remote origin already exists` | 원격이 이미 등록됨 | `git remote set-url origin https://github.com/ecoletree1001/pjt-resolve.git` |
| `Authentication failed` | 비밀번호로 시도함 | 3번의 토큰 또는 SSH 방식 사용 |
| `Repository not found` | 권한 없음 또는 주소 오타 | 저장소 Collaborator 등록 여부, 조직 SSO 인증 확인 |
| `Updates were rejected` | 원격에 내가 모르는 커밋이 있음 | `git pull origin main` 후 다시 push |
| `refusing to merge unrelated histories` | 서로 다른 기록을 합치는 중 | `git pull origin main --allow-unrelated-histories` |
| `fatal: not a git repository` | git 초기화 전 | 폴더에서 `git init` 실행 |
| `Permission denied (publickey)` | SSH 키 미등록 | 3번 방법 B 재확인 |
| 커밋 작성자가 다른 이름으로 표시됨 | 사용자 정보 미설정 | 아래 명령 실행 |

```bash
git config --global user.name "본인 GitHub 아이디"
git config --global user.email "jiminyee@ecoletree.com"
```

### 되돌리기 응급 명령

```bash
# 아직 add 안 한 수정 되돌리기
git restore 파일명

# add한 것만 취소 (수정 내용은 유지)
git restore --staged 파일명

# 방금 한 커밋 취소 (수정 내용은 유지)
git reset --soft HEAD~1
```

---

## 10. 안드로이드에서 작업하기

PC 없이 안드로이드 폰/태블릿만으로도 `pjt-resolve` 작업이 가능합니다. 목적에 따라 방법을 고르세요.

| 방법 | 설치 | 할 수 있는 일 | 추천 상황 |
| --- | --- | --- | --- |
| **GitHub 웹(Chrome)** | 불필요 | 저장소 생성, 파일 업로드·수정, 커밋, PR, Pages 설정 | **가장 무난함. 대부분 여기서 해결** |
| **GitHub 모바일 앱** | Play Store | 파일 수정·커밋, 브랜치 선택, PR 생성, 리뷰, CI 재실행 | 이동 중 간단 수정·리뷰 |
| **Termux** | F-Droid/GitHub | `git` 명령어 전부 (clone/push/pull/branch) | 이 문서의 명령어를 그대로 쓰고 싶을 때 |
| **Codespaces (브라우저)** | 불필요 | 브라우저 안에서 VS Code 전체 | 본격 개발. 단, 터치 조작 불편 |

> 안드로이드에는 보통 "이미 있는 작업 폴더"가 없습니다.
> 그래서 2번의 상황 B(기존 폴더 연결)보다는 **상황 A(clone)** 또는 **웹에서 바로 작업**이 현실적입니다.

### 방법 1. GitHub 웹 — 설치 없이 바로 (추천)

1. Chrome에서 https://github.com/ecoletree1001/pjt-resolve 접속
2. 우측 상단 ⋮ → **데스크톱 사이트** 체크 (모바일 화면에서는 일부 버튼이 숨겨집니다)
3. 원하는 작업 수행
   - **파일 올리기**: `Add file` → `Upload files` → 안드로이드 파일 선택기에서 고르기 → 하단에 커밋 메시지 입력 → `Commit changes`
   - **파일 수정**: 파일 열기 → 연필(✏️) 아이콘 → 수정 → `Commit changes`
   - **새 파일**: `Add file` → `Create new file`
   - **Pages 배포**: `Settings` → `Pages` (8번 참고)

이 방법은 `git` 명령어가 전혀 필요 없고, 커밋·푸시가 한 번에 처리됩니다.

### 방법 2. GitHub 모바일 앱

1. Play Store에서 **GitHub** 앱 설치 후 로그인
2. 저장소 → **Browse code** → 파일 선택
3. 우측 상단 드롭다운 → **Edit** → 수정
4. 커밋 화면에서 **기본 브랜치 대신 새 브랜치를 선택**할 수 있고, 이어서 PR 생성까지 가능

간단한 오타 수정, PR 리뷰·머지, 실패한 CI 재실행에 적합합니다.
단, 저장소를 로컬에 clone 하거나 여러 파일을 한꺼번에 다루는 작업은 할 수 없습니다.

### 방법 3. Termux — 명령어를 그대로 쓰고 싶다면

**설치처 주의:** Play Store 버전은 업데이트가 중단된 구버전입니다. 반드시 **F-Droid** 또는 **GitHub Releases** 에서 받으세요.

- F-Droid: https://f-droid.org/packages/com.termux/
- GitHub: https://github.com/termux/termux-app/releases

설치 후 Termux에서:

```bash
# 1) 패키지 최신화 및 git 설치
pkg update && pkg upgrade
pkg install git openssh

# 2) 내부 저장소 접근 권한 (다운로드 폴더 등을 쓰려면)
termux-setup-storage

# 3) 사용자 정보 설정
git config --global user.name "본인 GitHub 아이디"
git config --global user.email "jiminyee@ecoletree.com"

# 4) 저장소 받아오기 — 여기서부터는 이 문서의 명령어가 그대로 동작합니다
git clone https://github.com/ecoletree1001/pjt-resolve.git
cd pjt-resolve
```

인증은 3번의 **Personal Access Token** 방식이 편합니다.
토큰을 매번 입력하지 않으려면:

```bash
git config --global credential.helper store
```

> `credential.helper store` 는 토큰을 평문 파일(`~/.git-credentials`)로 저장합니다.
> 공용 기기에서는 사용하지 마세요.

파일 편집은 Termux 안에서 `nano 파일명` 으로 하거나, **Acode** 같은 안드로이드 코드 에디터로
`termux-setup-storage` 로 연결한 폴더를 열어 편집한 뒤 Termux에서 커밋하면 됩니다.

### 방법 4. Codespaces / github.dev — 브라우저 속 VS Code

- 저장소 페이지에서 `Code` → `Codespaces` → `Create codespace on main`
- 또는 저장소 주소의 `github.com` 을 **`github.dev`** 로 바꿔 접속하면 가벼운 편집기가 열립니다

개인 무료 계정은 월 **120 core-hours** 가 포함됩니다 (2코어 머신 기준 약 60시간).

> **안드로이드 주의:** Codespaces는 전용 모바일 앱이 없고 브라우저 VS Code는 터치에 최적화돼 있지 않습니다.
> 특히 안드로이드 가상 키보드에서 **명령 팔레트의 Enter/Esc 가 동작하지 않는 문제**가 보고돼 있어,
> 블루투스 키보드 없이 장시간 작업하기에는 불편합니다.

### 안드로이드에서의 권장 순서

1. 우선 **Chrome + 데스크톱 사이트** 로 시도 → 대부분의 작업(업로드·수정·PR·Pages)이 해결됩니다
2. 자주 쓰는 수정·리뷰는 **GitHub 앱**
3. `git clone`·브랜치 등 명령어가 필요해지면 **Termux**
4. 코드를 길게 작성해야 하면 **블루투스 키보드 + Codespaces**

---

## 11. 명령어 요약

| 목적 | 명령어 |
| --- | --- |
| 저장소 받아오기 | `git clone https://github.com/ecoletree1001/pjt-resolve.git` |
| 연결 확인 | `git remote -v` |
| 원격 연결 | `git remote add origin https://github.com/ecoletree1001/pjt-resolve.git` |
| 원격 주소 변경 | `git remote set-url origin <주소>` |
| 상태 확인 | `git status` |
| 변경분 담기 | `git add .` |
| 커밋 | `git commit -m "메시지"` |
| 올리기 | `git push origin main` |
| 내려받기 | `git pull origin main` |
| 브랜치 생성·이동 | `git switch -c <브랜치명>` |
| 기록 보기 | `git log --oneline` |
