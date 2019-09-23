import React from 'react';
import Button from '@material-ui/core/ButtonBase';
import PropTypes from 'prop-types';
import {StylesProvider} from '@material-ui/styles';
import './_button.scss';

const MdsButton = ({
    label,
    isDisabled,
    size,
    variant,
    color,
    classes,
    type,
    action,
    onClick
}) => {
    let variantButton = variant ? `mdk-button_${variant}` : 'mdk-button';
    let colorButton = color ? `is-${color}` : '';
    let disabled = isDisabled ? 'is-disabled' : '';
    let classNames = classes ? classes : '';

    return (
        <StylesProvider injectFirst>
            <Button
                action={action}
                type={type}
                color={color}
                size={size}
                className={(variantButton, colorButton, disabled, classNames)}
                onClick={onClick}
            >
                {label}
            </Button>
        </StylesProvider>
    );
};

MdsButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['ghost', 'primary']),
    size: PropTypes.oneOf(['small', 'medium', 'big']),
    isDisabled: PropTypes.bool,
    color: PropTypes.oneOf([
        'accent',
        'secondary',
        'success',
        'warning',
        'danger'
    ]),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    classes: PropTypes.object.isRequired,
    action: PropTypes.any.isRequired
};

MdsButton.defaultProps = {
    variant: null,
    size: 'medium',
    isDisabled: false,
    color: 'primary',
    type: 'button'
};

Button.displayName = 'mds-Button';

export default MdsButton;
