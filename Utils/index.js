import checkPropTypes from 'check-prop-types';   
//for integration testing following packages are imported
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../src/reducers';
import {middlewares} from './../src/createStore';

export const findByDataTestAttribute = (component, attr) => {
    const wraper = component.find(`[data-test='${attr}']`);
    return wraper;
}

export const checkProps = (component, expectedProps) => {
    const propsErrors = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
    return propsErrors;
}

//integration testing

export const testStore = (intialState) => {
    const createStoreWithMiddleWares = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleWares(rootReducer,intialState);
}