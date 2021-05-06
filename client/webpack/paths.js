const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  outputPath: path.resolve(__dirname, "../", "dist"),
  entryPath: path.resolve(__dirname, "../", "src/index.js"),
  templatePath: path.resolve(__dirname, "../", "public/index.html"),
  logoPath: path.resolve(__dirname, "../", "public/logo.png"),
  imagesFolder: "images",
  fontsFolder: "fonts",
  cssFolder: "css",
  jsFolder: "js",
};
