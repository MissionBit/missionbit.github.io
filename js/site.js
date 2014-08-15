/*jslint browser: true*/
window.jQuery(function ($) {
    'use strict';
    if ($.fn.qrcode !== undefined) {
        $('.doge-qrcode').qrcode($('.doge-qrcode').data('qrcode'));
    }
});
