/*jslint browser: true*/
window.jQuery(function ($) {
    'use strict';
    if (window.location.protocol === 'http:' && window.location.hostname === 'www.missionbit.com') {
        // Upgrade to TLS
        window.location.protocol = 'https:';
    }
    if ($.fn.qrcode !== undefined) {
        $('.doge-qrcode').qrcode($('.doge-qrcode').data('qrcode'));
    }
    Parse.initialize("xo38yYms5wCczcXUDt8NEld33H98ZIAtiNZefxqs", "dlgmY1RTvVKxa7N7pT83RNrVzrc0CryKTwujA590");
});
