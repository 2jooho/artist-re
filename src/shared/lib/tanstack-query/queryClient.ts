import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {handleApiError} from '../utils/error';
import {QUERY_KEY} from './queryKeys';

// QueryClient 설정
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        let message = handleApiError(error);
        alert(message);
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        let message = handleApiError(error);
        alert(message);
      }
    },
  }),
  defaultOptions: {
    queries: {
      retry: false, // 요청 실패 시 재시도하지 않음
      // retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // 에러 발생 시 재시도 딜레이
      refetchOnWindowFocus: false, // 윈도우가 포커스될 때 자동으로 재요청하지 않음
      gcTime: 0, // 24시간(1000 * 60 * 60 * 24) 캐시처리
      staleTime: 0, // 
      refetchOnMount: false, // 컴포넌트 마운트시 재요청
      refetchOnReconnect: false, // 네트워크 재연결시 재요청
    },
    mutations: {
      retry: false, // 요청 실패 시 재시도하지 않음
    },
  },
});


export const invalidateQueries = {
  // 전체 캐시 무효화
  all: () => {
    queryClient.invalidateQueries();
  },
  // 메인 페이지 관련
  main: () => {
    queryClient.invalidateQueries({ 
      queryKey: QUERY_KEY.MAIN 
    });
  },

// 유저 관련
// user: {
//   // 유저 전체
//   all: () => {
//     queryClient.invalidateQueries({ 
//       queryKey: QUERY_KEY.USER.ALL 
//     });
//   },
//   // 특정 유저
//   detail: (userId: number) => {
//     queryClient.invalidateQueries({ 
//       queryKey: QUERY_KEY.USER.DETAIL(userId) 
//     });
//   },
//   // 유저의 게시글
//   posts: (userId: number) => {
//     queryClient.invalidateQueries({ 
//       queryKey: QUERY_KEY.USER.POSTS(userId) 
//     });
//   },
// },

}