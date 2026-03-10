import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    // Watch files in workspace packages so HMR fires when tokens.css is rebuilt
    config.server ??= {};
    config.server.watch ??= {};
    config.server.watch.ignored = (path: string) =>
      path.includes("node_modules") && !path.includes("@repo");
    return config;
  },
};

export default config;
