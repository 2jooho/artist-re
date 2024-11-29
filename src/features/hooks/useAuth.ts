import { useAuthStore } from '@/shared/store/useAuthStore';

interface AuthResponse {
  userId: string;
  // 기타 필요한 사용자 정보
}

export const useAuth = () => {
  const { userId, setUserId, logout: localLogout } = useAuthStore();

const isLogin: any = () => {
  return userId !== null ? false : true;
};

// $$ api 구현 필요
const handleLogOut: any = () => {
  localLogout();
  alert("로그아웃 되었습니다.");
};


  return {
    isLogin,
    handleLogOut,
  };
};