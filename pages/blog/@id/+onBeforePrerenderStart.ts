const postModules = import.meta.glob("/src/pages/blog/posts/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export function onBeforePrerenderStart() {
  return Object.keys(postModules)
    .filter((path) => !path.includes("/arguments/"))
    .map((path) => {
      const fileName = path.split("/").pop()?.replace(".md", "") || "";
      return `/blog/${fileName}`;
    });
}
