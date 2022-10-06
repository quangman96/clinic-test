import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "64dzd3",
  e2e: {
    baseUrl: "http://192.168.138.7:2024/login",
  },
});
