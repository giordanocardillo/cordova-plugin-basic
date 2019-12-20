#!/usr/bin/env node
'use strict';

module.exports = function (context) {
  //get platform from the context supplied by cordova
  var platforms = context.opts.cordova.platforms;
  if (platforms.indexOf('android') !== -1) {
    console.log('[AFTER PLUGIN INSTALL] Cool Plugin on Android');
  }
};


