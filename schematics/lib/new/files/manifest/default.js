const { baseManifest } = require('@dazn/kopytko-packager');

module.exports = {
  ...baseManifest,
  title: 'Kopytko Example App',
  ui_resolutions: 'fhd',
  bs_const: {
    RALE: false,
  },
  apiUrl: 'http://worldclockapi.com/api/json/cet/now'
};
