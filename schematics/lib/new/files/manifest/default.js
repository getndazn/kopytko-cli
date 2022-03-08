const { baseManifest } = require('@dazn/kopytko-packager');

module.exports = {
  ...baseManifest,
  title: 'Kopytko Example App',
  ui_resolutions: 'fhd',
  bs_const: {
    RALE: false,
  },
  apiUrl: 'https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Paris'
};
