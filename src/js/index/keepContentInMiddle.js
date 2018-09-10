export const keepContentInMiddle = ($element, $elementsToCenter) => {
    const $window = $(window);
    
    changeMarginTop($element, $elementsToCenter);

    $window.resize(() => {
        changeMarginTop($element, $elementsToCenter, $window.outerWidth());
    });
};

const changeMarginTop = ($element, $elementsToCenter, windowWidth) => {
    const outerHeight = $element.outerHeight();   
    if (windowWidth < 768) {
        $($elementsToCenter[0]).css('margin-top', 'inherit');
    } else {
        let currentHeight = 0;

        $elementsToCenter.each(index => {
            currentHeight += $($elementsToCenter[index]).outerHeight();
        });
    
        const marginTopPx = (outerHeight - currentHeight) / 2;
        $($elementsToCenter[0]).css('margin-top', marginTopPx);
    }
};