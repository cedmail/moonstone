import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './MaterialButton';
import {DSProvider} from '../../provider';
import {action} from '@storybook/addon-actions';
import {select, withKnobs} from '@storybook/addon-knobs';
import doc from './MaterialButton.md';

const variant = () =>
    select('variant', ['text', 'outlined', 'contained'], 'text');
const color = () =>
    select('color', ['default', 'inherit', 'primary', 'secondary'], 'default');
const size = () => select('size', ['small', 'medium', 'large'], 'medium');

storiesOf('MaterialButton', module)
    .addDecorator(withKnobs)
    .add(
        'Simple button',
        () => (
            <DSProvider>
                <Button
                    variant={variant()}
                    size={size()}
                    color={color()}
                    onClick={action('button-click')}
                >
                    Simple Button
                </Button>
            </DSProvider>
        ),
        {notes: {markdown: doc}}
    );
