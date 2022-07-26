import { ModelsInterface, RequireContext } from "@/types";

function importAll(context: RequireContext) {
  let m: { [key: string]: ModelsInterface } = {};
  context.keys().forEach((item) => {
    const i = context(item);
    if (i.default?.namespace) {
      m[i.default.namespace] = i.default;
    }
  });
  return m;
}
const modules = importAll(require.context("./models", false, /\.(js|ts|tsx)$/));
export default modules;
