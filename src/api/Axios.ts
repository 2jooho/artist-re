import axios from "axios";

// axios 인터셉터 및 http 요청
export class Axios {
  // 전역변수 선언
  instance;
  auth: any;

  // axios 생성자
  constructor(isAuthReq = false) {
    this.instance = axios.create({
 
    });

    this.setInterceptor();
  }

  // 인터셉터 처리
  setInterceptor() {
    //요청
    this.instance.interceptors.request.use(
      this.reqMiddleWare.bind(this),
      this.reqOnError.bind(this)
    );
    //응답
    this.instance.interceptors.response.use(
      this.resMiddleWare.bind(this),
      this.resOnError.bind(this)
    );
  }

  /* Req */
  reqMiddleWare(config: any) {
    let newConfig = config;
    // 인증이 필요한 api의 경우
    if (this.auth) newConfig = this.setAuthReq(newConfig);

    return newConfig;
  }

  //인증 필요한 로직의 경우 헤더 설정
  setAuthReq(config: any): any {
    const { headers } = config;
    // const accessToken = this.user.accessToken;
    // const refreshToken = this.user.refreshToken;
    const newConfig = {
      ...config,
      headers: {
        ...headers,
        // Authorization: `Bearer ${accessToken}`,
        // refreshToken: `Bearer ${refreshToken}`,
        withCredentials: true, // 쿠기 공유
      },
    };

    return newConfig;
  }

  // 인터셉터에서 에러 발생 시 호출부 catch로 넘김
  reqOnError(error: any) {
    return Promise.reject(error);
  }

  /* Res */
  resMiddleWare(res: any) {
    // const { authorization, refreshtoken } = res.headers;

    // jwt 토큰 정보 존재 시 저장소에 저장
    // if (authorization) {
    //   this.#cookie.set(COOKIE.KEY.ACCESS_TOKEN, authorization, {
    //     ...COOKIE.CONFIG.DEFAULT,
    //   });
    // }

    // if (refreshtoken) {
    //   this.#cookie.set(COOKIE.KEY.REFRESH_TOKEN, refreshtoken, {
    //     ...COOKIE.CONFIG.DEFAULT,
    //   });
    // }
    return res;
  }

  // 에러 발생 시 catch 영역으로 전달
  resOnError(error: any) {
    return Promise.reject(error);
  }

  // get방식
  get(endPoint: any) {
    return this.instance({
      method: "GET",
      url: endPoint,
    });
  }

  // post 방식
  post(endPoint: any, data: any) {
    return this.instance({
      method: "POST",
      url: `${endPoint}`,
      data,
    });
  }

  // put 방식
  putFormData(endPoint: any, data: any) {
    return this.instance({
      method: "POST",
      url: `${endPoint}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    });
  }

  // getByQuery(endPoint: EndPoint, query: Query) {
  //   return this.#instance({
  //     method: METHOD.GET,
  //     url: endPoint,
  //     params: {
  //       ...query,
  //     },
  //   });
  // }

  // patch 방식
  // patch(endPoint: EndPoint, data: object = {}) {
  //   return this.#instance({
  //     method: METHOD.PATCH,
  //     url: endPoint,
  //     data,
  //   });
  // }

  // delete 방식
  // delete(endPoint: EndPoint, id: ID) {
  //   return this.#instance({
  //     method: METHOD.DELETE,
  //     url: `${endPoint}/${id}`,
  //   });
  // }
}
