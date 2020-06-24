import * as React from 'react';
import PropTypes from 'prop-types';

const SvgFileContent = (initialProps) => {
    const props = Object.assign({}, initialProps);
    props.className =
        initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
                fill="currentColor"
            />
        </svg>
    );
};

SvgFileContent.defaultProps = {
    size: 'default',
    className: ''
};
SvgFileContent.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgFileContent;
