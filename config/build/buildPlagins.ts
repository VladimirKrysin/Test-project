import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCSSExtractplugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCSSExtractplugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}

export { buildPlugins };
