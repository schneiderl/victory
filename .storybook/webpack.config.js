const path = require("path");

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.js$/,
    use: [
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: { injectParameters: true }
      }
    ],
    include: [path.resolve(__dirname, "../stories")],
    enforce: "pre"
  });
  return config;
};
