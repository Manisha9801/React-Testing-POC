import React from 'react';
import {shallow} from 'enzyme'
import Headline from './index';

import {findByDataTestAttribute} from './../../../Utils/index';

const setUp = (props = {}) => shallow(<Headline {...props} />);

describe('Headline Component', () => {
    describe('Have Props' ,() => {
        let wrapper ;
        beforeEach(() => {
            const props = {   //props which healine component expects.
                header : 'test header',
                desc : "test desc"
            }
            wrapper = setUp(props);
        });
        it('should render without errors',() => {
            const component = findByDataTestAttribute(wrapper,'HeadlineComponent');
            expect(component.length).toBe(1);
        });
        it('should render h1', () => {
            const component = findByDataTestAttribute(wrapper, 'header');
            expect(component.length).toBe(1);
        });
        it('should render p', () => {
            const component = findByDataTestAttribute(wrapper, 'desc');
            expect(component.length).toBe(1);
        })
    });
    describe('Have NO props', () => {
        let wrapper ;
        beforeEach(() => {
            wrapper = setUp();
        });
        it('should not render',() => {
            const component = findByDataTestAttribute(wrapper,'HeadlineComponent');
            expect(component.length).toBe(0);
        })
    })
});