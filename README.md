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