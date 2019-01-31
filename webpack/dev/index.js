const Webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const postcssFocus = require('postcss-focus')
const postcssReporter = require('postcss-reporter')
const config = require('../../config/config.json')
const devConfig = require('../../config/development.json')

module.exports = {
    devtool: 'cheap-module-source-map',

    entry: {
        app: [
            'eventsource-polyfill',
            'webpack-hot-middleware/client',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            './client/index.js',
        ],
        vendor: [
            'react',
            'react-dom',
        ],
    },

    output: {
        path: __dirname,
        filename: 'index.js',
        publicPath: `http://${devConfig.publicPath}:${devConfig.port}${config.requestURI}`
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'client',
            'node_modules',
        ]
    },

    module: {
        rules: [{
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                            modules: true,
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                postcssFocus(),
                                cssnext({ browsers: ['last 2 versions', 'IE > 10'] }),
                                postcssReporter({ clearMessages: true }),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jsx*$/,
                exclude: [/node_modules/, /.+\.config.js/],
                use: 'babel-loader'
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    },
                }, ],
            },
        ],
    },

    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.optimize.CommonsChunkPlugin({ name: 'vendor', minChunks: Infinity, filename: 'vendor.js' }),
        new Webpack.DefinePlugin({ 'process.env': { CLIENT: JSON.stringify(true), 'NODE_ENV': JSON.stringify('development') } }),
    ]
}
