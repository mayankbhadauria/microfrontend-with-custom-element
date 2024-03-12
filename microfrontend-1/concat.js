const concat = require('concat');
(async function build() {
    const files = [
        'dist/microfrontend_01/runtime.js',
        'dist/microfrontend_01/polyfills.js',
        'dist/microfrontend_01/main.js',
        'dist/microfrontend_01/styles.css'
    ];
    await concat(files, 'dist/microfrontend_01/microfrontend_01.js')
})();