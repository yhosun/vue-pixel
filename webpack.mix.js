let mix = require('laravel-mix').mix;

let publicDir = 'public/';
let jsDir = 'cmp/';
let tplDir = 'tpl/';

/* =================================
 Webpack
 =================================== */
let webpackConfig = {
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'cmp')
        ]
    }
};

/* =================================
 mix
 =================================== */
mix.webpackConfig(webpackConfig)
    .setPublicPath(publicDir)
    .copy(tplDir + 'canvas.html', publicDir + 'canvas.html')
    .js(jsDir + 'canvas-main.js', '').sourceMaps();

