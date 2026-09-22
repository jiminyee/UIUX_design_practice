# 🔗 GitHub 연결 가이드

이 문서는 `UIUX_design_practice` 프로젝트를 GitHub와 연결하고, 평소 작업을 올리고 내려받는 방법을 정리한 안내서입니다.

> 현재 이 저장소는 이미 GitHub와 연결되어 있습니다.
> 원격 주소: `https://github.com/jiminyee/UIUX_design_practice`

---

## 1. 지금 연결 상태 확인하기

가장 먼저 내 폴더가 GitHub의 어떤 저장소를 바라보고 있는지 확인합니다.

```bash
git remote -v
```

출력 예시:

```text
origin  https://github.com/jiminyee/UIUX_design_practice (fetch)
origin  https://github.com/jiminyee/UIUX_design_practice (push)
```

- `origin` : 원격 저장소의 별명(기본값)
- `fetch` : 내려받을 주소 / `push` : 올릴 주소

아무것도 출력되지 않는다면 아직 연결되지 않은 상태이므로 2번으로 갑니다.

---

## 2. 내 폴더를 GitHub에 처음 연결하기

새 프로젝트를 GitHub에 올릴 때의 순서입니다.

### 2-1. GitHub에서 빈 저장소 만들기

1. GitHub 우측 상단 `+` → **New repository**
2. Repository name 입력 (예: `UIUX_design_practice`)
3. **README, .gitignore, license는 체크하지 않기** (빈 저장소로 만들어야 충돌이 없습니다)
4. **Create repository** 클릭

### 2-2. 로컬 폴더에서 연결하기

```bash
# 프로젝트 폴더로 이동
cd ~/UIUX_design_practice

# git 저장소로 초기화 (이미 .git 폴더가 있다면 생략)
git init

# 기본 브랜치 이름을 main으로 지정
git branch -M main

# 원격 저장소 연결
git remote add origin https://github.com/jiminyee/UIUX_design_practice.git

# 첫 커밋 후 업로드
git add .
git commit -m "feat: first commit"
git push -u origin main
```

`git push -u origin main`의 `-u`는 "앞으로 이 브랜치는 origin/main과 짝"이라고 기억시키는 옵션입니다.
한 번 실행해두면 이후에는 `git push`만 쳐도 됩니다.

### 이미 연결되어 있는데 주소를 바꾸고 싶다면

```bash
git remote set-url origin https://github.com/사용자명/새-저장소.git
```

---

## 3. 로그인 인증 방법 (중요)

GitHub는 2021년부터 **비밀번호로는 push할 수 없습니다.** 아래 두 방법 중 하나를 씁니다.

### 방법 A. HTTPS + Personal Access Token (처음이라면 추천)

1. GitHub → 우측 상단 프로필 → **Settings**
2. 맨 아래 **Developer settings** → **Personal access tokens** → **Tokens (classic)**
3. **Generate new token (classic)** 클릭
4. Note에 용도 입력(예: `mac-macbook`), Expiration 선택
5. Scopes에서 **`repo` 체크**
6. **Generate token** → 생성된 토큰 문자열을 복사 (이 화면을 벗어나면 다시 볼 수 없습니다)
7. `git push` 할 때 물어보는 곳에 입력
   - Username: GitHub 아이디
   - Password: **복사한 토큰 붙여넣기**

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
# "Hi jiminyee! You've successfully authenticated..." 가 나오면 성공

# 6) 원격 주소를 SSH 방식으로 변경
git remote set-url origin git@github.com:jiminyee/UIUX_design_practice.git
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

`main`에 바로 올리지 않고, 작업별로 브랜치를 나누면 되돌리기 쉽습니다.

```bash
# 새 브랜치 만들고 이동
git switch -c feature/login-page

# 작업 후 커밋
git add .
git commit -m "feat: 로그인 페이지 마크업 추가"

# 브랜치를 GitHub에 올리기
git push -u origin feature/login-page
```

올린 뒤 GitHub 저장소 페이지에 뜨는 **Compare & pull request** 버튼으로 PR을 만들고,
변경 내용을 확인한 다음 **Merge pull request**를 누르면 `main`에 합쳐집니다.

```bash
# 합친 뒤 로컬 정리
git switch main
git pull origin main
git branch -d feature/login-page
```

---

## 6. 다른 컴퓨터에서 이어서 작업하기

```bash
git clone https://github.com/jiminyee/UIUX_design_practice.git
cd UIUX_design_practice
```

---

## 7. VS Code에서 연결해 쓰기

1. VS Code에서 프로젝트 폴더 열기 (`File` → `Open Folder`)
2. 왼쪽 사이드바의 **Source Control** 아이콘(가지 모양) 클릭
3. 변경된 파일 목록이 보이면 메시지 입력 후 **Commit**
4. **Sync Changes** 버튼으로 push/pull 동시 처리

GitHub 계정을 연결하려면 좌측 하단 프로필 아이콘 → **Sign in with GitHub**를 사용하면 토큰 입력 없이 인증됩니다.

---

## 8. GitHub Pages로 화면 배포하기 (이 프로젝트에 유용)

이 저장소는 HTML/CSS/JS로만 이루어진 정적 사이트라 별도 서버 없이 바로 웹에 띄울 수 있습니다.

1. GitHub 저장소 → **Settings** → 좌측 **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / 폴더: **/ (root)** 선택 → **Save**
4. 1~2분 뒤 아래 주소에서 확인

```text
https://jiminyee.github.io/UIUX_design_practice/
```

`index.html`이 루트에 있으므로 별도 설정 없이 메인 대시보드가 바로 열립니다.
다른 페이지는 `.../UIUX_design_practice/users.html` 처럼 파일명을 붙이면 됩니다.

---

## 9. 자주 만나는 문제

| 메시지 | 원인 | 해결 |
| --- | --- | --- |
| `remote origin already exists` | 원격이 이미 등록됨 | `git remote set-url origin <주소>` 로 변경 |
| `Authentication failed` | 비밀번호로 시도함 | 3번의 토큰 또는 SSH 방식 사용 |
| `Updates were rejected` | 원격에 내가 모르는 커밋이 있음 | `git pull origin main` 후 다시 push |
| `fatal: not a git repository` | git 초기화 전 | 폴더에서 `git init` 실행 |
| `Permission denied (publickey)` | SSH 키 미등록 | 3번 방법 B 재확인 |
| 커밋 작성자가 다른 이름으로 표시됨 | 사용자 정보 미설정 | 아래 명령 실행 |

```bash
git config --global user.name "jiminyee"
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

## 10. 명령어 요약

| 목적 | 명령어 |
| --- | --- |
| 연결 확인 | `git remote -v` |
| 원격 연결 | `git remote add origin <주소>` |
| 상태 확인 | `git status` |
| 변경분 담기 | `git add .` |
| 커밋 | `git commit -m "메시지"` |
| 올리기 | `git push origin main` |
| 내려받기 | `git pull origin main` |
| 브랜치 생성·이동 | `git switch -c <브랜치명>` |
| 기록 보기 | `git log --oneline` |
