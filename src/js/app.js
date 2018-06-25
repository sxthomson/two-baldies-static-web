import 'bootstrap';
import { showElementWhenScrolledPastBreakpoint } from './index/showElementWhenScrolledPastBreakpoint';

$(document).ready(() => {
    const $navbar = $('.navbar');
    const $heroContainer = $('.hero-container');
    showElementWhenScrolledPastBreakpoint($navbar, $heroContainer);
});

