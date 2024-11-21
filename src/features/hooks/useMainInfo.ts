import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { MainInfo, ApiError } from '../types/api';
import {main} from "@/api/auth/auth";

export const QUERY_KEY = {
    MAIN: ['main'] as const,
  } as const;

  export const useMainInfo = () => {
    return useQuery<MainInfo, AxiosError<ApiError>>({
      queryKey: QUERY_KEY.MAIN,
      queryFn: main,
      refetchOnWindowFocus: false,
      retry: false,
    });
  };