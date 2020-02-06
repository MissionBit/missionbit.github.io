/*jslint browser: true*/
'use strict';
if (window.location.protocol === 'http:' && window.location.hostname.match(/^(www\.)?missionbit\.(org|com)$/)) {
    // Upgrade to TLS
    window.location.protocol = 'https:';
} else if (window.location.pathname.match(/\/index\.html$/)) {
  // Use canonical /path/ instead of /path/index.html
  window.location.pathname = window.location.pathname.replace(/\/index.html$/, '');
} else if (!window.location.pathname.match(/(\.html|\/)$/)) {
  // Ensure that we are at /path/ instead of /path
  window.location.pathname = window.location.pathname + '/';
}
