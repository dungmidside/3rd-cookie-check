const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            name: 'cookieCheck',
            type: 'umd',
        },
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node-modules/,
            },
        ],
    },
}