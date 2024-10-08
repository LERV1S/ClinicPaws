import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/app2.css',
                'resources/css/imagen.css',
                'resources/js/app.js',
                'resources/js/app2.js',
            ],
            refresh: true,
        }),
    ],
});
