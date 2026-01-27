import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy'; // Para suporte a browsers antigos (substitui o Babel do Gulp)

export default defineConfig({
    root: 'app', // Define onde está seu código fonte (equivalente ao baseDir do Gulp)
    publicDir: '../public', // Pasta para arquivos estáticos (extras) que não passam pelo build
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        minify: 'terser', // Equivalente ao uglify/cssnano
        sourcemap: true,
        rollupOptions: {
            // Configuração para múltiplos HTMLs se necessário
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler' // Recomendado para versões novas do Sass
            }
        },
        postcss: {
            plugins: [
                require('autoprefixer')()
            ]
        }
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        })
    ],
    server: {
        port: 9000,
        open: true
    }
});