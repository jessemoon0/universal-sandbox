const fs = require("fs-extra");

const projectName = "small-test";
(async () => {
  // Rename index.html to index.original.html, so firebase hosting
  // does not take over
  await fs.moveSync(
    "../dist/" + projectName + "/browser/index.html",
    "../dist/" + projectName + "/browser/index.original.html"
  );

  // Copy dist into function, so it can be served as ssr
  const src = "../dist";
  const copy = "./dist";

  await fs.remove(copy);
  await fs.copy(src, copy);
})();
