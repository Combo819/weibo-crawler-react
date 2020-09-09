import { FunctionComponent, ComponentClass } from "react";
import { Weibo } from "../Views/Weibo";
import { Comments } from "../Views/Comments";

export interface Route {
  path: string;
  component: FunctionComponent|ComponentClass;
  exact?: boolean;
}

const routes: Route[] = [
  { path: "/comments/:weiboId", component: Comments },
  {
    path: "/",
    component: Weibo,
    exact: true,
  },
];

export default routes;
