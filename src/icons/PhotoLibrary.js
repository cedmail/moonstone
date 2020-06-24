import * as React from 'react';
import PropTypes from 'prop-types';

const SvgPhotoLibrary = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
        initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"
                fill="currentColor"
            />
        </svg>
    );
};

SvgPhotoLibrary.defaultProps = {
    size: 'default',
    className: ''
};
SvgPhotoLibrary.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgPhotoLibrary;
