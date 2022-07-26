export const replacePath = (path: string): string => {
  let pth = path
    .replace(/\.[^/.]+$/, "")
    .replace(/\./, "")
    .replace("/index", "");
  const arr = pth.split("/").map((e) => {
    if (e[0] === "[" && e[e.length - 1] === "]") {
      return `:${e.replace(/[\[ | \]]/g, "")}`;
    }
    return e;
  });
  return arr.join("/");
};
