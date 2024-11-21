export interface ApiConfig {
    baseURL: string;
    timeout?: number;
    headers?: Record<string, string>;
  }
  
  export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
  }
  
  export interface MainInfo {
    mainImgUrl: string;
    mainPopularArt?: MainPopularArt[];
  }
  
  export interface MainPopularArt {
    id: number;
    title: string;
    imageUrl: string;
    // ... 기타 필요한 필드
  }
  
  export interface ApiError {
    status: number;
    message: string;
  }