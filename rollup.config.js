import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import sourcemaps from 'rollup-plugin-sourcemaps';

const paths = {
    root: '/',
    source: {
        root: './src/',
    },
    dist: {
        root: './dist/',
    },
};

let fileName,
    Configure;

fileName = process.env.NODE_ENV === 'development' ? 'colon' : 'colon.min';

Configure = {
    format: 'umd', // 'amd', 'cjs', 'es', 'iife', 'umd'
    moduleName: 'colon',
    moduleId: 'colon',
    entry: `${paths.source.root}index.js`,
    dest: `${paths.dist.root}${fileName}.js`,
    sourceMap: true,
    plugins: [
        babel(),
        sourcemaps(),
    ],
};

if (process.env.NODE_ENV === 'production') {
    Configure.plugins.push(uglify());
}

export default Configure;
