const fs = require("fs");
const glob = require("glob");
const jsYaml = require("js-yaml");
const { compile } = require("json-schema-to-typescript");
const path = require("path");

const projectRoot = path.resolve(__dirname, "../..");
const schemataDir = path.resolve(projectRoot, "schemata");
const srcDir = path.resolve(schemataDir, "src");
const generatedDir = path.resolve(schemataDir, "generated");

const srcFiles = glob.sync(`/**/*.yml`, {
  root: srcDir,
});

(async () => {
  for (const srcFile of srcFiles) {
    // TODO: srcDir matching should be apply from the head.
    const fileId = srcFile.replace(srcDir + "/", "").replace(/\.yml$/, "");
    const generatedJsonAsPlainObject = jsYaml.load(fs.readFileSync(srcFile));
    const generatedJsonFile = path.resolve(generatedDir, fileId + ".json");
    const generatedJsonFileDir = path.dirname(generatedJsonFile);
    fs.mkdirSync(generatedJsonFileDir, {
      recursive: true,
    });
    await compile(generatedJsonAsPlainObject).then((output) => {
      fs.writeFileSync(path.resolve(generatedDir, fileId + ".ts"), output);
    });
  }
})();
