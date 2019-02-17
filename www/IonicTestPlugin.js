var exec = require('cordova/exec');

var PLUGIN_NAME = "IonicTestPlugin"; // This is just for code completion uses.

var IonicTestPlugin = function() {}; // This just makes it easier for us to export all of the functions at once.
// All of your plugin functions go below this. 
// Note: We are not passing any options in the [] block for this, so make sure you include the empty [] block.
IonicTestPlugin.pluginFunction = function(onSuccess, onError) {
   exec(onSuccess, onError, PLUGIN_NAME, "pluginFunction", []);
};

// IonicTestPlugin.pluginFunction2 = function(options) {
//    exec( null, null, PLUGIN_NAME, "pluginFunction2", [options]);
// };

IonicTestPlugin.pluginFunction2 = function(options, callback) {
   exec(callback, function(err) { callback('there was an error: ', err); }, PLUGIN_NAME, "pluginFunction2", [options]);
};

// this works...kinda
IonicTestPlugin.pluginFunction3 = function(options, onSuccess, onError) {
   exec(onSuccess, onError, PLUGIN_NAME, "pluginFunction3", [options]); // or options.first
};

// IonicTestPlugin.pluginFunction3 = function(options, callback) {
//    exec(callback, function(err) { callback('there was an error: ', err); }, PLUGIN_NAME, "pluginFunction3", [options]);
// };

// IonicTestPlugin.pluginFunction4 = function(options, callback) {
//    exec(callback, function(err) { callback('there was an error: ', err); }, PLUGIN_NAME, "pluginFunction4", [options]);
// };

module.exports = IonicTestPlugin;