import React from 'react';
import {Typography, variants, weights} from './index';
import {shallow} from 'component-test-utils-react';

describe('Typography', () => {
    it('should display a text children', () => {
        const wrapper = shallow(<Typography>Content children</Typography>);
        expect(wrapper.html()).toContain('Content children');
    });

    it('should display a body variant by default', () => {
        const wrapper = shallow(<Typography>Content children</Typography>);
        expect(wrapper.props.className).toContain('typography variant_body');
    });

    it('should display the specified variant', () => {
        variants.forEach(variant => {
            const wrapper = shallow(<Typography variant={variant}>Content children</Typography>);
            expect(wrapper.props.className).toContain(`variant_${variant}`);
        });
    });

    it('should use the default weight', () => {
        const wrapper = shallow(<Typography>Test</Typography>);
        expect(wrapper.props.className).toContain('weight_default');
    });

    it('should use the specified weight', () => {
        weights.forEach(weight => {
            const wrapper = shallow(<Typography weight={weight}>Test</Typography>);
            expect(wrapper.props.className).toContain(`weight_${weight}`);
        });
    });

    it('should display a text in italic', () => {
        const wrapper = shallow(<Typography isItalic>Test</Typography>);
        expect(wrapper.props.className).toContain('italic');
    });

    it('should not display a text in italic', () => {
        const wrapper = shallow(<Typography>Test</Typography>);
        expect(wrapper.props.className).not.toContain('italic');
    });

    it('should display a text in upper case', () => {
        const wrapper = shallow(<Typography isUpperCase>Test</Typography>);
        expect(wrapper.props.className).toContain('upperCase');
    });

    it('should not display a text in upper case', () => {
        const wrapper = shallow(<Typography>Test</Typography>);
        expect(wrapper.props.className).not.toContain('upperCase');
    });

    it('should display a text with a line-through', () => {
        const wrapper = shallow(<Typography hasLineThrough>Test</Typography>);
        expect(wrapper.props.className).toContain('lineThrough');
    });

    it('should not display a text with a line-through', () => {
        const wrapper = shallow(<Typography>Test</Typography>);
        expect(wrapper.props.className).not.toContain('lineThrough');
    });

    it('should display a tag html p by default', () => {
        const wrapper = shallow(<Typography>Content children</Typography>);
        expect(wrapper.html()).toContain('p');
    });

    it('should display a tag html h1', () => {
        const wrapper = shallow(<Typography component="h1">Content children</Typography>);
        expect(wrapper.html()).toContain('h1');
    });

    it('should add extra props', () => {
        const wrapper = shallow(
            <Typography onClick={() => {}}>Content children</Typography>
        );
        expect(wrapper.html()).toContain('onClick');
    });

    it('should add extra className', () => {
        const wrapper = shallow(
            <Typography className="yoloooo">Content children</Typography>
        );
        expect(wrapper.props.className).toContain('yoloooo');
    });

    it('should not bind isHtml prop to the html component', () => {
        const wrapper = shallow(
            <Typography isHtml><div>string</div></Typography>
        );
        expect(wrapper.html()).not.toContain('isHtml');
    });

    // Run mutiple tests here as prop-types are staked before calling console.error.
    it('prop-types', () => {
        global.console.originalError = console.error;
        global.console.error = jest.fn();

        // It should display an error message when sending something else than a string when html props is not send
        shallow(
            <Typography><div/></Typography>
        );

        expect(console.error).toHaveBeenCalledTimes(1);

        // It should display an error message when sending a unrenderable children when html props is true
        shallow(
            <Typography isHtml>{true}</Typography>
        );

        expect(global.console.error).toHaveBeenCalledTimes(2);

        global.console.error = global.console.originalError;
        delete global.console.originalError;
    });

    it('should not validate propTypes when on production environment', () => {
        global.console.originalError = console.error;
        global.console.error = jest.fn();

        jest.resetModules();
        process.env.NODE_ENV = 'production';
        const Typography = require('./Typography');

        shallow(
            <Typography.Typography isHtml>{true}</Typography.Typography>
        );

        expect(global.console.error).not.toHaveBeenCalled();

        global.console.error = global.console.originalError;
        delete global.console.originalError;
    });
});