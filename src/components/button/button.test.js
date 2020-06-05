import React from 'react';
import {findByDataTestAttribute,checkProps} from './../../../Utils';

import SharedButton from './index';
import { shallow } from 'enzyme';

describe('SharedButton Component', () => {
    describe('Checking PropTypes' , () => {
        it('Sould NOT throw warning' , () => {
            const expectedProps = {
                buttonText : 'Example Button Text',
                emitEvent : () => {

                }
            };
            const propsError = checkProps(SharedButton,expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders',() => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText : 'Example Button Text',
                emitEvent : () => {
                }
            }
            wrapper = shallow(<SharedButton {...props} />);
        });

        it('Should render button' ,() => {
            const button = findByDataTestAttribute(wrapper,'buttonComponent');
            expect(button.length).toBe(1);
        });
    })
})

