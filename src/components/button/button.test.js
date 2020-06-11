import React from 'react';
import {findByDataTestAttribute,checkProps} from './../../../Utils';

import SharedButton from './index';
import { shallow } from 'enzyme';

describe('SharedButton Component', () => {
    describe('Checking PropTypes' , () => {
        it('Sould NOT throw warning' , () => {
            const expectedProps = {
                buttonText : 'Example Button Text',  //jest allows to create a mock function.
                emitEvent : () => {   

                }
            };
            const propsError = checkProps(SharedButton,expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders',() => {
        let wrapper;
        let mockFunc ;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText : 'Example Button Text',
                emitEvent : mockFunc
            }
            wrapper = shallow(<SharedButton {...props} />);
        });

        it('Should render button' ,() => {
            const button = findByDataTestAttribute(wrapper,'buttonComponent');
            expect(button.length).toBe(1);
        });

        it("Should emit callback on click event" , () => {
            const button = findByDataTestAttribute(wrapper,'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        })
    });
})

