const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'main.js',
        chunkFilename: "main.chunk.js"
    },
    optimization: {
        minimizer: [new TerserPlugin()],
        splitChunks: {
            chunks: 'all'
        },
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        // After all CSS loaders we use plugin to do his work.
                        // It gets all transformed CSS and extracts it into separate
                        // single bundled file
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                        options: {
                            implementation: require("sass"),
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.js',
            '.tsx'
        ]
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./../../assets/css/custom.css",
            chunkFilename: "./../../assets/css/[id].css"
        })
    ],
};