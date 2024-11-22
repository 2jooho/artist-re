import { useQuery} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { MainInfo, ApiError } from '../types/api';
import {main} from "@/api/auth/auth";
import { QUERY_KEY } from '@/shared/lib/tanstack-query/queryKeys';

  export const useMainInfo = () => {
      // MainInfo: 성공 시 받아올 데이터의 타입
      // AxiosError<ApiError>: 에러 발생 시의 타입
    return useQuery<MainInfo, AxiosError<ApiError>>({
      queryKey: QUERY_KEY.MAIN, // 쿼리를 식별하는 고유 키
      queryFn: main, // 실제 API 호출하는 함수
    });
  };