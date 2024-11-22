export const QUERY_KEY = {
    // 메인 페이지 관련
    MAIN: ['main'] as const,
    // 유저 관련
    
    USER: {
      ALL: ['users'] as const,
      DETAIL: (userId: number) => ['users', userId] as const,
      POSTS: (userId: number) => ['users', userId, 'posts'] as const,
    },
  } as const;