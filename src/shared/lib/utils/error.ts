import {ApiError} from "@/features/types/api";
import { AxiosError } from 'axios';

export const handleApiError = (error: AxiosError<ApiError>) => {
    if (error.response) {
      // HTTP 에러 응답
      switch (error.response.status) {
        case 400:
          return '잘못된 요청입니다.';
        case 401:
          return '인증이 필요합니다.';
        case 403:
          return '접근 권한이 없습니다.';
        case 404:
          return '요청하신 데이터를 찾을 수 없습니다.';
        case 500:
          return '서버 오류가 발생했습니다.';
        default:
          return error.response.data.message;
      }
    } else if (error.request) {
      // 요청은 보냈으나 응답을 받지 못함
      return '서버와의 통신이 원활하지 않습니다.';
    } else {
      // 요청 자체를 보내지 못함
      return '네트워크 연결을 확인해주세요.';
    }
  };