import * as React from 'react';
import PropTypes from 'prop-types';

const SvgWidgets = (initialProps) => {
    const props = Object.assign({}, initialProps);
    props.className =
        initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"
                fill="currentColor"
            />
        </svg>
    );
};

SvgWidgets.defaultProps = {
    size: 'default',
    className: '',
};
SvgWidgets.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string,
};
export default SvgWidgets;
