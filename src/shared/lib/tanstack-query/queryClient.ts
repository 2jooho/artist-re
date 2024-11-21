import { QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ApiError } from '@/features/types/api';

// 에러 핸들링 함수
const handleGlobalError = (error: AxiosError<ApiError>) => {
  console.error('Query Error:', error);

  if (error.response) {
    alert(error.response.data.message || '데이터를 불러오는데 실패했습니다.');
  } else if (error.request) {
    alert('서버와의 통신이 원활하지 않습니다. 잠시 후 다시 시도해주세요.');
  } else {
    alert('네트워크 연결을 확인해주세요.');
  }
};

// QueryClient 설정
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 60 * 24, // 24시간
      staleTime: 1000 * 60 * 5, // 5분
    },
    mutations: {
      onError: (error) => {
        if (error instanceof AxiosError) {
          handleGlobalError(error);
        }
      },
    },
  },
});