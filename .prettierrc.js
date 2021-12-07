module.exports = {
  ...require("@ionic/prettier-config"),
  overrides: [
    {
      files: "*.md",
      options: {
        "parser": "mdx"
      }
    }
  ]
};