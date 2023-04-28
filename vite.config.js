var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { defineConfig, loadEnv } from 'vite';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var mode = _a.mode;
    process.env = __assign(__assign({}, process.env), loadEnv(mode, process.cwd()));
    return {
        plugins: [vue()],
        logLevel: 'info',
        base: './',
        resolve: {
            alias: [
                { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
                { find: '@Components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
                { find: '@Views', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
                { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
            ]
        },
        server: {
            port: 4000,
            open: true,
            cors: true,
            strictPort: true,
            proxy: {
                '/api': {
                    target: 'http://127.0.0.1:3000/api',
                    changeOrigin: true,
                    rewrite: function (path) { return path.replace(/^\/api/, ''); }
                }
            },
            build: {
                outDir: './dist',
                assetsDir: './src'
            }
        }
    };
});
