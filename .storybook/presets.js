module.exports = [
    '@storybook/addon-docs/react/preset',
    {
        name: '@storybook/preset-scss',
        options: {
            cssLoaderOptions: {
                modules: {
                    mode: 'local',
                    localIdentName: '[name]__[local]'
                },
            }
        }
    }
];

