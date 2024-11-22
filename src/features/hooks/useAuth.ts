import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useEffect } from 'react';

interface AuthResponse {
  userId: string;
  // 기타 필요한 사용자 정보
}

const fetchUserProfile = async (): Promise<AuthResponse> => {
  const response = await fetch('/api/user/profile');
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  return response.json();
};

const logoutUser = async () => {
  const response = await fetch('/api/auth/logout', {
    method: 'POST',
  });
  if (!response.ok) {
    throw new Error('Failed to logout');
  }
  return response.json();
};

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { setUserId, logout: localLogout } = useAuthStore();

  const query = useQuery({
    queryKey: ['user'],
    queryFn: fetchUserProfile,
    enabled: true,
    staleTime: 1000 * 60 * 5, // 5분
  });

  // 쿼리 결과에 따른 사이드 이펙트 처리
  useEffect(() => {
    if (query.data) {
      setUserId(query.data.userId);
    }
    if (query.isError) {
      localLogout();
    }
  }, [query.data, query.isError, setUserId, localLogout]);

  const mutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      localLogout();
      queryClient.removeQueries({ queryKey: ['user'] });
    },
  });

  const handleLogout = async () => {
    try {
      await mutation.mutateAsync();
      alert('로그아웃 되었습니다.');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  return {
    user: query.data,
    isLoading: query.isLoading,
    isLogin: !query.data?.userId,
    handleLogout,
  };
};