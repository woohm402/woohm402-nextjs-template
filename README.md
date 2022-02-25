# NextJS Template for woohm402

This is a template repository with my favorite setup of NextJS.

## About template

1. TypeScript

정적 타이핑은 자바스크립트를 이용할 때 개발 생산성을 상당히 높여줄 수 있기 때문에, 아무래도 정적 타입 도구 중 가장 널리 사용되고 필자의 취향에도 맞는 타입스크립트를 채택했다.

2. Sass

Sass + Css Modules 를 이용한다. `CSS-in-JS` 의 경우 특정 라이브러리에 과하게 종속될 수 있기 때문에, 더 실제 css 에 적합한 sass 를 선택했다.

className 컨벤션에 대해 과하게 고민하지 않기 위해 css modules 를 이용한다.

3. Design pattern

atomic pattern 을 이용한다. 실험적으로 도입되었다.

4. 코드 스타일

eslint & prettier 를 이용한다. eslint 는 충분한 이유로 TS 코드의 퀄리티를 높이고, prettier 는 코드 가독성을 도와 준다.

## Log

- from `create-next-app`
- add `eslint` & `prettier`
- use `yarn berry`
- add `husky` for git convention
- use `sass`
- use `atomic pattern`
