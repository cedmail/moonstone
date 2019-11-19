import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './PrimaryNav.md';

import {PrimaryNav} from './index';
import {PrimaryNavItem} from '~/components/PrimaryNav/PrimaryNavItem';
import {PrimaryNavItemsGroup} from '~/components/PrimaryNav/PrimaryNavItemsGroup';
import Apps from '~/icons/asset/Apps.svg';
import Feather from '~/icons/asset/Feather.svg';
import Setting from '~/icons/asset/Setting.svg';

storiesOf('Components|PrimaryNav', module)
    .addParameters({
        component: PrimaryNav,
        componentSubtitle: 'PrimaryNav',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <PrimaryNav
                headerLogo={<img src="logo.gif"/>}
                headerCaption="development"
                top={
                    <>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem label="NavItem not selected" icon={<Feather/>}/>
                            <PrimaryNavItem isSelected label="NavItem selected" icon={<Apps/>}/>
                        </PrimaryNavItemsGroup>
                        <PrimaryNavItemsGroup isDisplayedWhenCollapsed={false}>
                            <PrimaryNavItem url="https://jahia.com" label="Jahia Link"/>
                        </PrimaryNavItemsGroup>
                    </>
                }
                bottom={
                    <>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem label="Bottom item" icon={<Setting/>}/>
                        </PrimaryNavItemsGroup>
                    </>
                }
            />
        </div>
    ));