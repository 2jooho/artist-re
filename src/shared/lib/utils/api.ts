const AUTH = Object.freeze({
  LOG_IN: "/aa/auth/login",
  JOIN: "/aa/auth/join",
  UPDATE: "/aa/user/update",
  MAIN_PAGE: `/aa/main.do`,
  GALLERY_BEST_INFO: `/aa/gallery/firstInfo`,
  GALLERY_LIST: (
    page: number,
    size: number,
    userId: any,
    categoryId: any,
    orderType: any,
    selectType: any
  ) =>
    `/aa/gallery/galleryList?page=${page}&size=${size}&userId=${userId}&categoryId=${categoryId}&orderType=${orderType}&selectType=${selectType}`,
  CATEGORY_LIST: `/aa/gallery/categoryList`,
  COLLABO_LIST: (page: number, size: number) =>
    `/aa/collabor/collaborList?page=${page}&size=${size}`,
  STAR_LIST: (year: number, month: number) =>
    `/aa/star/starList?year=${year}&month=${month}`,
  STAR_SELECT_DATE_LIST: `/aa/star/starDateList`,
  GALLERY_DETAIL: (artId: number) => `/aa/gallery/galleryDetail?artId=${artId}`,
  COLLECTION_INFO: (userId: string) =>
    `/aa/collection/collectionInfo?userId=${userId}`,
  SERCH: (serchType: string, serchValue: string, page: number, size: number) =>
    `/aa/serch?serchType=${serchType}&serchValue=${serchValue}&page=${page}&size=${size}`,
  OAUTH_CALLBACK: (code: string) => `/aa/auth/KAKAO/callback${code}`,
  USER_ID_CHECK: (userId: string) => `/aa/user/idCheck?userId=${userId}`,
  NICKNAME_CHECK: (nickName: string) =>
    `/aa/user/nickNameCheck?nickName=${nickName}`,
  ART_UPDATE: `/aa/gallery/galleryUpdate`,
  ART_INSERT: `/aa/gallery/galleryUpload`,
  LIKE_UPDATE: (userId: any, artId: any, isLike: any) =>
    `/aa/gallery/likeUpdate?userId=${userId}&artId=${artId}&isLike=${isLike}`,
  LIKE_ART_LIST: (page: number, size: number, userId: any) =>
    `/aa/collection/likeArtList?page=${page}&size=${size}&userId=${userId}`,
  COLLECTION_EDIT: `/aa/collection/update`,
  PASS_AUTH_API: `/aa/auth/pass`,
  PASS_SUCCESS_API: `/aa/auth/pass/success`,
  PASS_CHECK_API: `/aa/user/restPw/Check`,
});

export const API_ROUTE = Object.freeze({
  AUTH,
});
