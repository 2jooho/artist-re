import axios from "axios";

export class Axios {
  instance;
  auth: any;

  constructor(isAuthReq = false) {
    this.instance = axios.create({
      baseURL: "https://www.artista-dev.com",
      // baseURL: "http://localhost:8082",
    });
    this.setInterceptor();
  }

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
    if (this.auth) newConfig = this.setAuthReq(newConfig);

    return newConfig;
  }

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
        withCredentials: true,
      },
    };

    return newConfig;
  }

  reqOnError(error: any) {
    return Promise.reject(error);
  }

  /* Res */
  resMiddleWare(res: any) {
    // const { authorization, refreshtoken } = res.headers;

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

  resOnError(error: any) {
    // console.log("error:" + error.response.status);

    // return Promise.reject(error.response);
    return Promise.reject(error);
  }

  get(endPoint: any) {
    return this.instance({
      method: "GET",
      url: endPoint,
    });
  }

  post(endPoint: any, data: any) {
    return this.instance({
      method: "POST",
      url: `${endPoint}`,
      data,
    });
  }

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

  // patch(endPoint: EndPoint, data: object = {}) {
  //   return this.#instance({
  //     method: METHOD.PATCH,
  //     url: endPoint,
  //     data,
  //   });
  // }

  // delete(endPoint: EndPoint, id: ID) {
  //   return this.#instance({
  //     method: METHOD.DELETE,
  //     url: `${endPoint}/${id}`,
  //   });
  // }
}
