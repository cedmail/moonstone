const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({config, mode}) => {
    // Add alias to import files easily
    config.resolve.alias['~'] = path.resolve(__dirname, '../src/');

    config.module.rules.push({
        test: /\.svg$/,
        issuer: {
            test: /\.jsx?$/
        },
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    template: require('../src/icons/svgrTemplate').template,
                    icon: true,
                    dimensions: false,
                    replaceAttrValues: { '#000': 'currentColor' }
                }
            }
        ],
        include: path.resolve(__dirname, '../')
    });

    // removing the file-loader for svg
    const baseSvgRuleIndex = config.module.rules.findIndex(r => r.test.toString().includes('svg'));
    config.module.rules[baseSvgRuleIndex].test = new RegExp(
        config.module.rules[baseSvgRuleIndex].test.toString()
            .replace('svg|', '')
            .replace(/^\//, '')
            .replace(/\/$/, '')
    );

    // Return the altered config
    return config;
};
