export const findByDataTestAttribute = (component, attr) => {
    const wraper = component.find(`[data-test='${attr}']`);
    return wraper;
}