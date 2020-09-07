import { axios } from "./config";
import { AxiosPromise } from "axios";

function getWeibosApi(page: number, pageSize: number): AxiosPromise {
  return axios({
    url: "/api/weibo",
    params: { page, pageSize },
  });
}

export {getWeibosApi};
