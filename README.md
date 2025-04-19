# Next.js 서버 컴포넌트 렌더링 에러 재시도 테스트

서버 컴포넌트에서 에러가 발생했을 때 리렌더링을 처리하는 몇 가지 방법에 대한 테스트

[블로그 글](https://blog.yunji.kim/retry_server_component_in_nextjs)

1. 클라이언트 컴포넌트로 처리 ( `ClientRandomNumber.tsx` )
2. 동일한 기능의 서버 컴포넌트와 클라이언트 컴포넌트로 처리 ( `ServerRandomNumber.tsx` + `ClientRandomNumber.tsx` )
3. 추상화 시도 ( `ServerRender.tsx` + `ClientRender.tsx` )
4. `router.refresh`를 통한 서버 컴포넌트 리렌더링 ( `ErrorBoundary.tsx` + `Fallback.tsx` )

# 참고

- [Error handling and retry with React Server Components](https://edspencer.net/2024/7/16/errors-and-retry-with-react-server-components)
- [전역 상태관리를 사용하지 않을 때, Next.js14 router.refresh()](https://velog.io/@fenjo/전역-상태관리를-하지-않을-때-router.refresh)
- [[Next.js] `error.tsx`를 활용한 오류 처리 및 복구 방법](https://velog.io/@pcwadarong/Next.js-error.tsx를-활용한-오류-처리-및-복구-방법)
