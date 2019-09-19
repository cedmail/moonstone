import React from 'react'
import Button from '@material-ui/core/ButtonBase'
import PropTypes from 'prop-types'
import { StylesProvider } from '@material-ui/styles'
import './_button.scss'

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
    let classNames = classes ? classes : ''
    let colorButton = color ? `is-${color}` : ''
    let disabled = isDisabled ? 'is-disabled' : ''
    let variantButton = variant ? `mdk-button_${variant}` : 'mdk-button'

    return (
        <StylesProvider injectFirst>
            <Button
                action={action}
                type={type}
                color={color}
                size={size}
                onClick={onClick}
                className={`${variantButton} ${colorButton} ${disabled} ${classNames}`}
            >
                {label}
            </Button>
        </StylesProvider>
    )
}

Button.propTypes =
    process.env.NODE_ENV !== 'production'
        ? {
              label: PropTypes.string,
              onClick: PropTypes.func.isRequired,
              variant: PropTypes.oneOf(['ghost', 'primary']),
              size: PropTypes.oneOf(['small', 'medium', 'big']),
              disabled: PropTypes.bool,
              color: PropTypes.oneOf([
                  'accent',
                  'secondary',
                  'success',
                  'warning',
                  'danger'
              ]),
              type: PropTypes.oneOf(['button', 'submit', 'reset'])
          }
        : {}

Button.defaultProps = {
    variant: null,
    size: 'medium',
    disabled: false,
    color: 'primary',
    type: 'button',
    onClick: () => {}
}

Button.displayName = 'mds-Button'

export default MdsButton
