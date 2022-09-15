// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const isProduction = process.env.NODE_ENV == "production";

const projectRoot = __dirname;
const frontendDir = path.resolve(projectRoot, "frontend");
const srcDir = path.resolve(frontendDir, "src");
const publicDir = path.resolve(projectRoot, "public");

const stylesHandler = "style-loader";

const config = {
  entry: {
    webpacked: path.resolve(srcDir, "index.ts"),
  },
  output: {
    filename: "[name]-[contenthash].js",
    clean: true,
    path: path.resolve(publicDir, "dist"),
    publicPath: "/dist/",
  },
  plugins: [new VueLoaderPlugin(), new WebpackManifestPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          enableTsInTemplate: false,
        },
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
        options: {
          appendTsSuffixTo: ["\\.vue$"],
        },
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
