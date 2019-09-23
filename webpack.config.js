const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

module.exports = (env, argv) => {
    let config = {
        entry: {
            main: path.resolve(__dirname, 'src')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'moonstone.umd.js',
            library: 'monnstone',
            libraryTarget: 'umd'
        },
        externals: {},
        resolve: {
            mainFields: ['module', 'main'],
            extensions: ['.mjs', '.js', '.jsx', 'json']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: [path.join(__dirname, 'src')],
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    modules: false,
                                    targets: { safari: '7', ie: '10' }
                                }
                            ],
                            '@babel/preset-react'
                        ]
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        },
        mode: 'development'
    }

    config.devtool =
        argv.mode === 'production' ? 'source-map' : 'eval-source-map'

    if (argv.analyze) {
        config.devtool = 'source-map'
        config.plugins.push(new BundleAnalyzerPlugin())
    }

    return config
}
