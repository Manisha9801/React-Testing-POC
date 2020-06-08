import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import {findByDataTestAttribute, testStore} from './../Utils';


const setUp = (intitialState = {}) => {
    const store = testStore(intitialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive(); //use console to see what we get in this shallow.
    // console.log(wrapper.debug());
    return wrapper;
}

describe('App Component',() => {
    let wrapper;
    beforeEach(() => {
        const intitialState = {
            posts : [
                {title : 'Example title', desc : 'Some Text'},
                {title : 'Example title', desc : 'Some Text'},
                {title : 'Example title', desc : 'Some Text'}
            ]
        };
        wrapper = setUp(intitialState);
    });
    it('Should render without errors' ,() => {
        const component = findByDataTestAttribute(wrapper,'appComponent');
        expect(component.length).toBe(1); 
    })
})