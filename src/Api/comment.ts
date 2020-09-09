import {axios} from './config';
import { AxiosPromise } from 'axios';

/**
 * get comments from weiboId
 * @param weiboId the comments are under this weiboId
 * @param page 
 * @param pageSize 
 */
function getComments(weiboId:string,page:number,pageSize:number):AxiosPromise{
    return axios({
        url:'/comments',
        params:{page,pageSize}
    })
}

export {getComments};