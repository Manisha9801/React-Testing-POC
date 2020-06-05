import React, { Component } from 'react';
import  { shallow } from 'enzyme';
import {findByDataTestAttribute,checkProps} from './../../../Utils';
import ListItem from './index';

describe('ListItem Component',() => {
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProp = {
                title : 'Test Title',
                desc : 'Test Desc'
            };
            const propsError = checkProps(ListItem,expectedProp);
            expect(propsError).toBeUndefined();
        })
    });

    describe('Componenyt renders', () => {
        let wrapper;
        beforeEach(() => {
            const expectedProp = {
                title : 'Test Tite',
                desc : 'Test Desc'
            }
            wrapper = shallow(<ListItem {...expectedProp} />);
        });
        it('Should render without error' , () => {
            let component = findByDataTestAttribute(wrapper, 'ListItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should have a title' , () => {
            let component = findByDataTestAttribute(wrapper,'ListItemTitle');
            expect(component.length).toBe(1);
        });
        
        it('Should have a description' , () => {
            let component = findByDataTestAttribute(wrapper,'ListItemDescription');
            expect(component.length).toBe(1);
        });  
    });

    describe('should NOT render', () => {
        let wrapper ;
        beforeEach(() => {
            const tempProps = {
                desc : "Test Desc"
            }
            wrapper = shallow(<ListItem {...tempProps} />);
        });
        it('should not render when there is no title', () => {
            let component = findByDataTestAttribute(wrapper,'ListItemComponent');
            console.log(component.debug());
            expect(component.length).toBe(0);
        })
    })
});