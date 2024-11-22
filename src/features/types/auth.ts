export interface AuthTokens {
    accessToken: string | null;
    refreshToken: string | null;
  }
  
  export interface AuthState extends AuthTokens {
    isAuthenticated: boolean;
    setTokens: (tokens: AuthTokens) => void;
    clearTokens: () => void;
  }