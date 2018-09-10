import 'bootstrap';
import { showElementWhenScrolledPastBreakpoint } from './index/showElementWhenScrolledPastBreakpoint';
import { instagramFeed } from './index/instagramFeed';
import { keepContentInMiddle } from './index/keepContentInMiddle';
import { setHeight} from './index/setHeight';

$(document).ready(() => {
    const $navbar = $('.navbar');
    const $heroContainer = $('.hero-container');
    showElementWhenScrolledPastBreakpoint($navbar, $heroContainer);

    const instagramUserId = 7365920496;
    const instagramAccessToken = '7365920496.5063176.ca09082793114d2fbfd872e1d55f9d50';
    const template = '<div class="instagram-photo col-xl-2 col-md-3 col-sm-6 col-6"><a href={{link}} target="_blank"><div class="square"><img class="img-fluid" src="{{image}}" title="{{caption}}" alt="{{caption}}" /></div></a></div>';

    instagramFeed({
        get: 'user',
        userId: instagramUserId,
        accessToken: instagramAccessToken,
        target: $('.instagram-feed')[0],
        template: template,
        limit: 6,
        resolution: 'standard_resolution',
        after: () => {
            $('.instagram-photo').slice(4).addClass('d-none d-xl-block');
        }
    });


    const $overlappedSectionImage = $('.overlapped-section.section-image');
    const $overlappedSectionContent = $('.overlapped-section.section-content');
    const $overlappedWrapper = $('.overlapped-section-container');
    keepContentInMiddle($overlappedSectionImage, $overlappedSectionContent);

    setHeight($overlappedWrapper, $overlappedSectionImage);
});

