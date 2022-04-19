import App from "./App.svelte";
import fetch from "node-fetch";

let serverBase = "http://localhost:2000/";

// fetch(`${serverBase}/login`);

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
