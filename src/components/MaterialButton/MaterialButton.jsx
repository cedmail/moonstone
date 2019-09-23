import React from 'react';
import {Button as MuiButton} from '@material-ui/core';
import css from './MaterialButton.scss';
import classnames from 'classnames';

const MaterialButton = props => (
    <MuiButton
        {...props}
        classes={{
            root: css.jahiaButton,
            label: css.jahiaButton_label,
            text: classnames(css.jahiaButton, css.text),
            textPrimary: classnames(css.jahiaButton, css.textPrimary),
            textSecondary: classnames(css.jahiaButton, css.textSecondary)
        }}
    />
);

MaterialButton.displayName = 'MaterialButton';

console.log(MuiButton.defaultProps);

export default MaterialButton;
