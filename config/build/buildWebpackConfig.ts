import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlagins";
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";

function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
export { buildWebpackConfig };
