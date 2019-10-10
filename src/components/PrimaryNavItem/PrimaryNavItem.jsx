import React from 'react';

import PropTypes from 'prop-types';
import styles from './PrimaryNavItem.scss';
import classnames from 'classnames';
import {Typography} from '../Typography';

export const PrimaryNavItem = ({children, className, selected, icon, ...props}) => (
    <li
        {...props}
        className={classnames(
            styles.navItem,
            {[styles.selected]: selected},
            className
        )}
    >
        <div className={classnames(styles.navItem_iconContainer)}>{icon}</div>
        <Typography component="div">{children}</Typography>
    </li>
);

PrimaryNavItem.defaultProps = {
    children: '',
    className: '',
    selected: false,
    hasNotification: false
};

PrimaryNavItem.propTypes = {
    /**
     * Children
     */
    children: PropTypes.node,

    /**
     * Icon node from our icon library
     */
    icon: PropTypes.node,

    /**
     * Element is selected or not
     */
    selected: PropTypes.bool,

    /**
     * Element is selected or not
     */
    onClick: PropTypes.func.isRequired,

    /**
     * Element has notification
     */
    hasNotification: PropTypes.bool,

    /**
     * Additional classname
     */
    className: PropTypes.string
};
