import React from 'react';

import People from './src/People';
// Import Layer from './src/Layer'
import Group from './src/Group';

const Icon = props => {
    switch (props.name) {
        // Case 'layer':
        //     return <Layer {...props} />
        case 'people':
            return <People {...props}/>;
        case 'group':
            return <Group {...props}/>;
        default:
    }
};

export default Icon;
