const path = require('path');
const { Joi } = require('@docusaurus/utils-validation');

const theme = require(path.resolve(__dirname, '../../node_modules/@docusaurus/theme-classic/lib'));
const themePath = path.resolve(__dirname, '../../node_modules/@docusaurus/theme-classic/lib-next/theme');
const tsThemePath = path.resolve(__dirname, '../../node_modules/@docusaurus/theme-classic/src/theme');

let { ThemeConfigSchema } = require(path.resolve(__dirname, '../../node_modules/@docusaurus/theme-classic/lib/validateThemeConfig.js'));

const NavbarIconLinkSchema = Joi.object({
  type: Joi.string().equal('iconLink').required(),
  // to: Joi.string(),
  // docsPluginId: Joi.string(),
});

ThemeConfigSchema = ThemeConfigSchema.concat(
  Joi.object({
    navbar: { items: Joi.array().items(NavbarIconLinkSchema) }
  })
)

module.exports = {
  ...theme,
  default: (config, opts) => ({
    ...theme.default(config, opts),
    getThemePath() {
      return themePath;
    },
    getTypescriptThemePath() {
      return tsThemePath;
    }
  }),
  validateThemeConfig: ({validate, themeConfig}) => validate(ThemeConfigSchema, themeConfig)
}
