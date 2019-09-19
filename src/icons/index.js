import React from 'react'

import People from './src/People'
// import Layer from './src/Layer'
import Group from './src/Group'

const Icon = props => {
    switch (props.name) {
        // case 'layer':
        //     return <Layer {...props} />
        case 'people':
            return <People {...props} />
        case 'group':
            return <Group {...props} />
        default:
            return
    }
}

export default Icon
