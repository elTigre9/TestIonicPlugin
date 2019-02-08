var exec = require('cordova/exec');

var PLUGIN_NAME = "TestIonicPlugin"; // This is just for code completion uses.

var TestIonicPlugin = function() {}; // This just makes it easier for us to export all of the functions at once.
// All of your plugin functions go below this. 
// Note: We are not passing any options in the [] block for this, so make sure you include the empty [] block.
TestIonicPlugin.pluginFunction = function(onSuccess, onError) {
   exec(onSuccess, onError, PLUGIN_NAME, "pluginFunction", []);
};
module.exports = TestIonicPlugin;