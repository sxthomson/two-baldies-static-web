export const setHeight = ($wrapper, $dynamicElement) => {
    const $window = $(window);

    setHeightOfElement($wrapper, $dynamicElement, $window.outerWidth());

    $window.resize(() => {
        setHeightOfElement($wrapper, $dynamicElement, $window.outerWidth());
    });
};

const setHeightOfElement = ($wrapper, $dynamicElement ,windowWidth) => {
    if (windowWidth < 768) {
        $wrapper.height("auto");
        return;
    }
    const dynamicElementHeight = $($dynamicElement).height();
    $wrapper.height(dynamicElementHeight);
};