export const showElementWhenScrolled = ($element, scrollY) => {
    const $window = $(window);
    $window.scroll(() => {
        if ($window.scrollTop() > scrollY) {
            $element.slideDown();
        } else {
            $element.slideUp();
        }
    });
};