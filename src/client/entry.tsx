// oxlint-disable-next-line import/no-unassigned-import
import "virtual:uno.css";
import "@/styles/globals.css";
import { render } from "preact";

import { App } from "@/App";

if (typeof window !== "undefined") {
  const rootElement = document.querySelector("#app");
  if (rootElement) {
    render(<App />, rootElement);
  }
}
