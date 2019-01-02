const cssnext = require('postcss-cssnext')
const postcssFocus = require('postcss-focus')
const postcssReporter = require('postcss-reporter')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    output: {
        publicPath: '/',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'client',
            'node_modules',
        ],
    },
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: isProd ? '[hash:base64]' : '[name]__[local]__[hash:base64:5]',
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
                                cssnext({
                                    browsers: ['last 2 versions', 'IE > 10'],
                                }),
                                postcssReporter({
                                    clearMessages: true,
                                }),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    },
                }, ],
            },
        ],
    },
}
