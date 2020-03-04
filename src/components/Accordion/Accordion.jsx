import React from 'react';
import PropTypes from 'prop-types';
import {UncontrolledAccordion} from './UncontrolledAccordion';
import {ControlledAccordion} from './ControlledAccordion';
import {AccordionItem} from './AccordionItem';

export const Accordion = ({children, defaultOpenedItem, openedItem, onSetOpenedItem, ...props}) => {
    if (typeof openedItem === 'undefined') {
        return <UncontrolledAccordion defaultOpenedItem={defaultOpenedItem} {...props}>{children}</UncontrolledAccordion>;
    }

    return <ControlledAccordion openedItem={openedItem} onSetOpenedItem={onSetOpenedItem} {...props}>{children}</ControlledAccordion>;
};

Accordion.defaultProps = {
    isReversed: false
};

Accordion.propTypes = {
    /**
     * Reversed style for dark background with light text
     */
    isReversed: PropTypes.bool,

    /**
     * Content of the content
     */
    children: PropTypes.oneOfType([
        PropTypes.shape({
            type: PropTypes.oneOf([AccordionItem])
        }),
        PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.oneOf([AccordionItem])
            })
        )
    ]).isRequired,

    /**
     * AccordionItem's id opened by default
     */
    defaultOpenedItem: PropTypes.string,

    /**
     * AccordionItem's id open
     */
    openedItem: PropTypes.string,

    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Function to set accoridonItem opened
     */
    onSetOpenedItem: PropTypes.func
};

Accordion.displayName = 'Accordion';