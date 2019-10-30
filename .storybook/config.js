import React from 'react';
import {addDecorator, configure} from '@storybook/react';
import {GlobalStyle} from '../src';

addDecorator(story => (
    <>
        <GlobalStyle/>
        {story()}
    </>
));

configure(require.context('../src', true, /\.stories.(jsx|mdx)$/), module);
