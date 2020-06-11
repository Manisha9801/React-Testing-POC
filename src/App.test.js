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
    });

    it('updateBtnStatus method should update the state as expected' , () => {
        const classInstance = wrapper.instance();   //it creates an instance of the class so that we can fire function on it.
        classInstance.updateBtnStatus();
        const newState = classInstance.state.btnState;
        expect(newState).toBe(true);
    });
    it('exampleMethod_returnsAValue to return a increased value', () => {
        const classInstance = wrapper.instance();
        const valueReturned = classInstance.exampleMethod_returnsAValue(2);
        expect(valueReturned).toBe(3);
    })
})