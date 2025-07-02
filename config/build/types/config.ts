type BuildMode = 'development' | 'production';

interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}

interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
}

export type { BuildMode };
export { BuildEnv, BuildOptions, BuildPaths };
