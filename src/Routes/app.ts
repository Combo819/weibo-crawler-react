import {FunctionComponent} from 'react';
import {Weibo} from '../Views/Weibo';

export interface Route {
    path:string,
    component:FunctionComponent
}

const routes:Route[] = [
    {
        path:'/weibo',
        component:Weibo
    }
]

export default routes;