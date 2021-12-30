const baseManifest = require('@dazn/kopytko-packager/base-manifest');

module.exports = {
  ...baseManifest,
  title: 'Kopytko Example App',
  ui_resolutions: 'fhd',
  bs_const: {
    RALE: false,
  },
};
