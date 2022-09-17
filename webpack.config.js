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
          /**
           * NOTE:
           * There are two reasons for specifying this option.
           *
           * A) To ignore the following errors that occurred during the production build
           *
           * ```
           * npm run build:prod (== webpack --mode=production --node-env=production)
           * (...omission...)
           * ERROR in /Users/kjirou/projects/rails-vue-mpa/frontend/src/pages/articles/Index.vue.ts
           * 19:10-11
           * [tsl] ERROR in /Users/kjirou/projects/rails-vue-mpa/frontend/src/pages/articles/Index.vue.ts(19,11)
           * TS7006: Parameter 'b' implicitly has an 'any' type.
           * (...omission...)
           * ```
           *
           * B) To leave type checking to vue-tsc and Volar
           *
           *  Note that Volar assumes that Take Over Mode ( https://github.com/johnsoncodehk/volar/discussions/471 ) is used.
           */
          transpileOnly: true,
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
