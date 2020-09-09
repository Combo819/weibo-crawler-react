import { axios } from "./config";
import { AxiosPromise } from "axios";

function getWeibosApi(page: number, pageSize: number): AxiosPromise {
  return axios({
    url: "/weibo",
    params: { page, pageSize },
  });
}

/**
 * get a single weibo with comments by weiboId
 * @param weiboId the comments are under this weiboId
 * @param page page of comments
 * @param pageSize comments each page
 */
function getSingleWeiboApi(weiboId:string,page:number,pageSize:number):AxiosPromise{
  return axios({
    url:`/comments/${weiboId}`,
    params:{page,pageSize}
  })
}

export {getWeibosApi,getSingleWeiboApi};
