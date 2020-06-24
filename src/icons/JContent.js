import * as React from 'react';
import PropTypes from 'prop-types';

const SvgJContent = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.293 18h2.708v-2.708L6.014 7.305l-2.708 2.708L11.293 18zM3.92 5.211a.72.72 0 00-1.018 0l-1.69 1.69a.72.72 0 000 1.018l1.322 1.322L5.24 6.533 3.919 5.21z"
        fill="currentColor"
      />
            <path
        d="M14.001 16H11v1.707l.293.293h2.708v-2zM12.71 14H9v-2h1.71l2 2zM14.123 14l-2-2H17v2h-2.877zM15.001 16v2H17v-2h-1.999z"
        fill="currentColor"
      />
            <path
        d="M7 15.121V20h12V9h-5V4H7v2.878l-2-2V4c0-1.1.9-2 2-2h8l6 6v12c0 1.1-.9 2-2 2H6.99C5.89 22 5 21.1 5 20v-6.879l2 2z"
        fill="currentColor"
      />
            <path
        d="M7 13.707V8.29l-.986-.986L5 8.32v3.387l2 2zM5 6.773l.24-.24L5 6.292v.481z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgJContent.defaultProps = {
    size: 'default',
    className: ''
};
SvgJContent.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgJContent;