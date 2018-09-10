export const setHeight = ($wrapper, $dynamicElement) => {
    const $window = $(window);
    
    setHeightOfElement($wrapper, $dynamicElement);

    $window.resize(() => {
        setHeightOfElement($wrapper, $dynamicElement);
    });
};

const setHeightOfElement = ($wrapper, $dynamicElement) => {
    var dynamicElementHeight = $($dynamicElement).height();
    $wrapper.height(dynamicElementHeight);
};