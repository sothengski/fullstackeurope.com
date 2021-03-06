let mix = require('laravel-mix');
let build = require('./tasks/build.js');
let tailwindcss = require('tailwindcss');

mix.disableSuccessNotifications();
mix.setPublicPath('source/2020/assets/build');
mix.webpackConfig({
    plugins: [
        build.jigsaw,
        build.browserSync(),
        build.watch([
            'source/**/*.md',
            'source/*.php',
            'source/**/*.php',
            'source/*.blade.php',
            'source/**/*.blade.php',
            'source/*.html',
            'source/**/*.html',
            'source/**/*.scss',
            '!source/**/_tmp/*',
            './config*.php',
            './tailwind.js',
        ]),
    ]
});

mix.js('source/2020/_assets/js/main.js', 'js')
    .sass('source/2020/_assets/sass/main.scss', 'css')
    .copyDirectory('node_modules/chocolat/dist/images', 'source/2020/assets/build/images')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ],
    })
    .version();
