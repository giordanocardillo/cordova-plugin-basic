var exec = require('cordova/exec');

exports.coolMethod = function (name, success, error) {
    exec(success, error, 'basicPlugin', 'coolMethod', [name]);
};

