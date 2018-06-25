export const showElementWhenScrolledPastBreakpoint = ($element, $breakpointElement) => {
    const $window = $(window);
    $window.scroll(() => {
        if ($window.scrollTop() > calculateBottomOfElement($breakpointElement)) {
            $element.slideDown();
        } else {
            $element.slideUp();
        }
    });
};

const calculateBottomOfElement = ($element) => {
    return $element.position().top + $element.outerHeight(true);
};