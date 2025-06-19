type BuildMode = "development" | "production";

interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

interface BuildEnv {
  mode: BuildMode;
  port: number;
}

interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export type { BuildMode };
export { BuildEnv, BuildOptions, BuildPaths };
