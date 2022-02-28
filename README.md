# NextJS Template for woohm402

This is a template repository with my favorite setup of NextJS.

## Installaion

Clone this repository, run `yarn install && yarn dev`, visit http://localhost:3000.

<br />

## About template

1. TypeScript

   - 정적 타이핑은 자바스크립트를 이용할 때 개발 생산성을 상당히 높여줄 수 있기 때문에, 아무래도 정적 타입 도구 중 가장 널리 사용되고 필자의 취향에도 맞는 타입스크립트를 채택했다.

2. Sass

   - Sass + Css Modules 를 이용한다. `CSS-in-JS` 의 경우 특정 라이브러리에 과하게 종속될 수 있기 때문에, 더 실제 css 에 적합한 sass 를 선택했다.
   - className 컨벤션에 대해 과하게 고민하지 않기 위해 css modules 를 이용한다.

3. React-Query

   - Server State 를 Client State 와 분리한다는 철학을 아주 좋아한다. 더하여 선언적인 api를 적은 보일러플레이트 코드로 훌륭하게 제공하기 때문에 react-query 를 차용하였다.

   - > 만약 server state 가 없는 페이지라면 react-query 를 제거하면 된다.

4. Redux or Recoil or MobX?

   - Client State의 경우 3번의 `react-query` 로 Server state를 이렇게 분리하고 나면 `useState` 나 url 쿼리파라미터 로 충분히 커버되는 경우가 대부분이라, 따로 추가하지 않았다. (또는 JWT 토큰의 경우 인메모리 (가령 `axios.defaults`)에 저장해도 되고, 정말정말 필요한 케이스라면 Context 를 사용해도 된다.)

   - > 만약 client state 가 필요한 페이지라면 상황에 맞게 `recoil` 이나 `redux` 를 추가하자. 개인적으로는 아직 특별한 상태관리 매니저가 필요하면서도 SSR 이 필요하고 그런 서비스를 아직 보지 못했다. (가령 온라인 게임 사이트 같은 경우 `CSR + SPA + AWS Lambda 등으로 인덱스 페이지만 SEO 적용하는 것`으로도 충분하다는 생각입니다. 아직 관련 경험이 충분하지 않아, 추후 업데이트 여지가 있습니다.)

5. Design pattern

   - atomic pattern 을 이용한다. 실험적으로 도입되었다.

6. 코드 스타일

   - eslint & prettier 를 이용한다. eslint 는 충분한 이유로 TS 코드의 퀄리티를 높이고, prettier 는 코드 가독성을 도와 준다.

<br />

## Log

- from `create-next-app`
- add `eslint` & `prettier`
- use `yarn berry`
- add `husky` for git convention
- use `sass`
- use `atomic pattern`
- add `react-query`
