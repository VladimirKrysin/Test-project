import { lazy } from "react";
const MainPageAsync = lazy(
  () =>
      new Promise((res) => {
      /// @ts-ignore
      setTimeout(() => res(import("./MainPage")), 1500);
    })
);

export { MainPageAsync };
