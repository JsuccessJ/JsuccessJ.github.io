# JsuccessJ.github.io

안녕하세요! 이것은 JsuccessJ의 개인 홈페이지입니다.

## 🚀 빠른 시작

### 로컬에서 실행하기

1. Ruby와 Bundler 설치
2. 의존성 설치: `bundle install`
3. 로컬 서버 시작: `bundle exec jekyll serve`
4. 브라우저에서 `http://localhost:4000` 접속

### 개발 환경 설정

```bash
# Ruby 설치 (macOS)
brew install ruby

# Bundler 설치
gem install bundler

# 의존성 설치
bundle install

# 개발 서버 실행
bundle exec jekyll serve
```

## 📝 수정 가이드

### 기본 정보 수정
- `_config.yml`: 사이트 기본 설정과 개인정보
- `index.html`: 메인 페이지 내용

### 프로필 이미지 추가
1. `assets/images/` 폴더에 프로필 이미지 업로드
2. `_config.yml`에서 `avatar` 경로 수정

### 스타일 커스터마이징
- `assets/css/main.scss`: 커스텀 스타일 추가

### 섹션 추가/수정
`index.html`에서 원하는 섹션을 추가하거나 수정할 수 있습니다.

## 🛠️ 기술 스택

- Jekyll (정적 사이트 생성기)
- Minimal Mistakes 테마
- GitHub Pages (호스팅)
- SCSS (스타일링)

## 📱 반응형 디자인

모바일, 태블릿, 데스크톱 모든 환경에서 최적화되어 있습니다.

## 🔧 문제 해결

### 빌드 오류 시
```bash
bundle update
bundle exec jekyll clean
bundle exec jekyll build
```

### 의존성 문제 시
```bash
rm Gemfile.lock
bundle install
```

## 📄 라이선스

MIT License