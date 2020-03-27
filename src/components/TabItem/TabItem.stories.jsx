import React from 'react';
import classnames from 'classnames';
import {storiesOf} from '@storybook/react';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import storyStyles from '~/__storybook__/storybook.scss';
import IconWrapper from '~/__storybook__/IconWrapper';
import {iconsName} from '~/__storybook__/utils';

import markdownNotes from './TabItem.md';
import {TabItem, tabItemColors, tabItemSizes, tabItemVariants} from './index';

const labelValue = () => text('Label', 'TabItem');
const colorValues = () => select('Color', tabItemColors, 'default');
const sizeValues = () => select('Size', tabItemSizes, 'default');
const variantValues = () => select('Variant', tabItemVariants, 'ghost');
const isReversed = () => boolean('Is reversed', false);
const isDisabled = () => boolean('Is disabled', false);
const isSelected = () => boolean('Is selected', false);
const selectIcon = () => select('Icon', iconsName, 'Apps');

storiesOf('Components|TabItem', module)
    .addParameters({
        component: TabItem,
        componentSubtitle: 'TabItem',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('TabItem with icon and label', () => (
        <div style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>Variant</h3>
                </div>
                {
                    tabItemColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <h3>{color}</h3>
                        </div>
                    ))
                }
            </section>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>default</h3>
                </div>

                <div className={classnames(storyStyles.storyGridItem)}>
                    <TabItem icon={<IconWrapper iconName={selectIcon()}/>}
                             label={labelValue()}
                             color={colorValues()}
                             size={sizeValues()}
                             variant={variantValues()}
                             isSelected={isSelected()}
                             isReversed={isReversed()}
                             isDisabled={isDisabled()}
                             onClick={() => {}}
                        />
                </div>
            </section>
        </div>
    ));