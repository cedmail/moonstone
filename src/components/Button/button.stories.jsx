import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from './Button'
import doc from './button.md'

// Init storybook
const stories = storiesOf('Storybook Knobs', module)
stories.addDecorator(withKnobs)

// Define Knobs
const colors = {
    Success: 'success',
    Warning: 'warning',
    Danger: 'danger',
    Accent: 'accent',
    Secondary: 'secondary'
}
const onClick = () => action('onClick')
const label = () => text('Label', 'Button')
const variant = () =>
    select(
        'Variant',
        {
            None: null,
            Primary: 'primary',
            Ghost: 'ghost'
        },
        null
    )
const color = () => select('Color', colors, 'success')
const disabled = () => boolean('Disabled', false)

// Père Castor tell me a story
storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add(
        'Default',
        () => (
            <>
                <section>
                    <Button
                        label='Accent'
                        color='accent'
                        variant='primary'
                        isDisabled={false}
                        onClick={onClick()}
                    />
                    <Button
                        label='Success'
                        color='success'
                        variant='primary'
                        isDisabled={false}
                        onClick={onClick()}
                    />
                    <Button
                        label='Warning'
                        color='warning'
                        variant='primary'
                        isDisabled={false}
                        onClick={onClick()}
                    />
                    <Button
                        label='Danger'
                        color='danger'
                        variant='primary'
                        isDisabled={false}
                        onClick={onClick()}
                    />
                </section>
                <section>
                    <Button
                        label='Accent'
                        color='accent'
                        isDisabled={false}
                        onClick={onClick()}
                    />
                    <Button
                        label='Success'
                        color='success'
                        isDisabled={false}
                        onClick={onClick()}
                    />
                    <Button
                        label='Warning'
                        color='warning'
                        isDisabled={false}
                        onClick={onClick()}
                    />
                    <Button
                        label='Danger'
                        color='danger'
                        isDisabled={false}
                        onClick={onClick()}
                    />
                </section>
                <section>
                    <Button
                        label='Accent'
                        color='accent'
                        variant='ghost'
                        isDisabled={false}
                        onClick={onClick()}
                    />
                    <Button
                        label='Success'
                        color='success'
                        variant='ghost'
                        isDisabled={false}
                        onClick={onClick()}
                    />
                    <Button
                        label='Warning'
                        color='warning'
                        variant='ghost'
                        isDisabled={false}
                        onClick={onClick()}
                    />
                    <Button
                        label='Danger'
                        color='danger'
                        variant='ghost'
                        isDisabled={false}
                        onClick={onClick()}
                    />
                </section>
            </>
        ),
        { notes: { markdown: doc } }
    )
    .add(
        'Colors',
        () => (
            <Button
                label={label()}
                variant={variant()}
                color={color()}
                isDisabled={disabled()}
                onClick={onClick()}
            />
        ),
        {
            notes: { markdown: doc }
        }
    )
