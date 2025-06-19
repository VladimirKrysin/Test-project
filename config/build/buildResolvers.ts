import { ResolveOptions } from "webpack";

function buildResolvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}

export { buildResolvers };
