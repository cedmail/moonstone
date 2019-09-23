module.exports = function({ config }) {
    config.module.rules.push({
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
    })

    return config
}
