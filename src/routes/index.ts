import { RequireContext, RouteMap } from "@/types";
import { replacePath } from "@/utils";
const importAll = (context: RequireContext) => {
  const keys = context.keys();
  const routes: RouteMap[] = keys.reduce((pre, key) => {
    if (!key.includes("components")) {
      const e = context(key);
      const data: RouteMap = { route: replacePath(key), Component: e.default };
      pre.push(data as never);
    }
    return pre;
  }, []);
  return routes;
};
let routes = importAll(require.context("../pages", !0, /\.(js|ts|tsx)$/));
export default routes;
