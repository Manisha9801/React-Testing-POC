import React from 'react';
import {shallow} from 'enzyme';

import Header from './index';
import {findByDataTestAttribute} from './../../../Utils';


/**
 * Uncomment following describe and It one by one to see in the console the nested error .
 */

// it('It Should render without error' , () => {
//     expect(1).toBe(3)
// });

// describe('Header Component',() => {
//     it('It Should render without error' , () => {
//         expect(1).toBe(3)
//     });
// });

// describe('Header Component',() => {
//     describe('nested' , () => {
//         it('It Should render without error' , () => {
//             expect(1).toBe(3)
//         });
//     })
// });

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}


describe('Header Component', () => {   //describe is test suites and  'it' is test cases.

    let component ;
    beforeEach(() => {     //before each executes before any test case of this test suites.
        component = setUp();
    });

    it('Should render without error', () => {
        // console.log(component.debug());   //see the output on console, 'it' will have the component tree (enzyme provides this.)
        // const wrapper = component.find('.headerComponent');
        // const wrapper = component.find(`[data-test='headeComponent']`);
        const wrapper = findByDataTestAttribute(component,'headerComponent');
        expect(wrapper.length).toBe(1);    //to make it fail add same class to another div, this condition/test will fail
    });

    it('Should render a logo' ,() => {
        // const logo = component.find(`[data-test='logoIMG']`);
        const logo = findByDataTestAttribute(component,'logoIMG');
        expect(logo.length).toBe(1);
    })
})