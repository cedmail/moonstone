import React from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import PropTypes from 'prop-types';
import {StylesProvider} from '@material-ui/styles';

const dsGenericTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#b0a157',
            dark: '#87795e',
            light: '#dcd762'
        }
    }
});

// Const jss = create({
//     ...jssPreset(),
//     // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
//     insertionPoint: 'jss-insertion-point',
// });

export const DSProvider = ({children}) => (
    <StylesProvider injectFirst disableGeneration={false}>
        <MuiThemeProvider theme={dsGenericTheme}>{children}</MuiThemeProvider>
    </StylesProvider>
);

DSProvider.propTypes = {
    children: PropTypes.node.isRequired
};
