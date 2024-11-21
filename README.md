# 아르티스타 리팩토링
기존 아르티스타의 폴더구조를 하이브리드 형태로 변경하며, 기존의 소스를 가독성있게 변형
기술스택도 변화를 줌

## 기술스택
기술스택: 리액트, 리액트 쿼리, 주스탠드, 타입스크립트, 테일윈드, 스타일드컴포넌트, eslint, prettier, 스타일컴포넌트, jest

## 프로젝트 설치
```bash
# 프로젝트 생성
npx create-next-app@latest my-project --typescript --tailwind --eslint

# 상태관리 & API
npm install @tanstack/react-query zustand axios

# 타입 정의
npm install -D @types/node @types/react @types/react-dom

# 개발 도구
npm install -D @tanstack/react-query-devtools

# 스타일드 컴포넌트 설치
npm install styled-components

# 개발 의존성 설치
npm install -D prettier @types/styled-components

# GraphQL 관련
npm install @apollo/client graphql

# Jest 관련
npm install -D jest @testing-library/react @testing-library/jest-dom @types/jest jest-environment-jsdom

# Sentry 관련
npm install @sentry/nextjs
```sp

## 실행방법
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 폴더구조
Hybrid Approach 구조

# Commit Convetion
[Feat] 새로운 기능을 추가할 경우
[Fix] 버그를 고친 경우
[!BREAKING CHANGE] 커다란 API 변경의 경우
[!HOTFIX] 급하게 치명적인 버그를 고쳐야하는 경우
[Style] 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
[Refactor] 프로덕션 코드 리팩토링
[Comment] 필요한 주석 추가 및 변경
[Docs] 문서를 수정한 경우
[Test] 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 없음)
[Chore] 빌드 태스크 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 없음)
[Rename] 파일 혹은 폴더명을 수정하거나 옮기는 작업인 경우
[Remove] 파일을 삭제하는 작업만 수행 한 경우