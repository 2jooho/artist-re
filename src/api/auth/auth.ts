import {Axios} from "../Axios";
import { API_ROUTE } from "@/shared/lib/utils/api";

const authAPI = new Axios(true);
const unAuthAPI = new Axios();

// 로그인 api
// export const logIn: any = async (data) => {
//   const response = await unAuthAPI.post(API_ROUTE.AUTH.LOG_IN, data);
//   return response;
// };

// 메인 api
export const main: any = async () => {
  const response = await unAuthAPI.get(API_ROUTE.AUTH.MAIN_PAGE);
  return response;
};

// 로그인 api
export const logIn: any = async (data: any) => {
  const response = await unAuthAPI.post(API_ROUTE.AUTH.LOG_IN, data);
  return response;
};

// 회원가입 api
export const join: any = async (data: any) => {
  const response = await unAuthAPI.post(API_ROUTE.AUTH.JOIN, data);
  return response;
};

// 회원정보 수정
export const update: any = async (data: any) => {
  const response = await authAPI.post(API_ROUTE.AUTH.JOIN, data);
  return response;
};

// 소셜로그인 콜백 api
export const oauthCallback: any = async (code: any) => {
  const response = await unAuthAPI.get(API_ROUTE.AUTH.OAUTH_CALLBACK(code));
  return response;
};

// 아이디 중복체크 api
export const userIdCheck: any = async (userId: string) => {
  const response = await unAuthAPI.get(API_ROUTE.AUTH.USER_ID_CHECK(userId));
  return response;
};

// 닉네임 중복체크 api
export const nickNameCheck: any = async (nickName: string) => {
  const response = await unAuthAPI.get(API_ROUTE.AUTH.NICKNAME_CHECK(nickName));
  return response;
};

//
export const passAuthApi: any = async () => {
  const response = await unAuthAPI.get(API_ROUTE.AUTH.PASS_AUTH_API);
  return response;
};

//
export const passSuccessApi: any = async () => {
  const response = await unAuthAPI.get(API_ROUTE.AUTH.PASS_SUCCESS_API);
  return response;
};

//
export const passCheckApi: any = async (data: any) => {
  const response = await authAPI.post(API_ROUTE.AUTH.PASS_CHECK_API, data);
  return response;
};
