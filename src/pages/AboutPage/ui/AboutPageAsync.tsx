import { lazy } from "react";

const AboutPageAsync = lazy(
  () =>
    new Promise((res) => {
      /// @ts-ignore
      setTimeout(() => res(import("./AboutPage")), 1500);
    })
);

export { AboutPageAsync };
