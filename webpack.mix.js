let mix = require('laravel-mix');
// node paths to convert //
const nodePath = 'node-assets';
// Mix //
mix.sass(`${nodePath}/scss/styles.scss`, `assets/jb-styles.min.css`)
mix.js(`${nodePath}/js/scripts.js`, `${nodePath}/js/scripts.min.js`)
// JS Compile //
mix.combine([
  // external scripts such as swiper etc would be combined here //
  `${nodePath}/js/scripts.min.js`
], 'assets/jb-scripts.min.js');
// Options //
mix.options({ processCssUrls: false })