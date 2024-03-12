const concat = require('concat');
(async function build() {
    const files = [
        'dist/microfrontend_02/runtime.js',
        'dist/microfrontend_02/polyfills.js',
        'dist/microfrontend_02/main.js'
    ];
    await concat(files, 'dist/microfrontend_02/microfrontend_02.js')
})();