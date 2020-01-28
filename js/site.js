/*jslint browser: true*/
window.jQuery(function ($) {
    'use strict';
    if (window.location.protocol === 'http:' && window.location.hostname.match(/^(www\.)?missionbit\.(org|com)$/)) {
        // Upgrade to TLS
        window.location.protocol = 'https:';
    }
});
