import checkPropTypes from 'check-prop-types';   

export const findByDataTestAttribute = (component, attr) => {
    const wraper = component.find(`[data-test='${attr}']`);
    return wraper;
}

export const checkProps = (component, expectedProps) => {
    const propsErrors = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
    return propsErrors;
}