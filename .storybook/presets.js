module.exports = [
    {
        name: '@storybook/addon-docs/react/preset',
        options: {
            configureJSX: true,
        }
    },
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

