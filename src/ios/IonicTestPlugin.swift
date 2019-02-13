/*
* Notes: The @objc shows that this class & function should be exposed to Cordova.
*/
@objc(IonicTestPlugin) class IonicTestPlugin : CDVPlugin {
  @objc(pluginFunction:) // Declare your function name.
  func pluginFunction(command: CDVInvokedUrlCommand) { // write the function code.
  print("plugin function 1 fired!")
    /* 
     * Always assume that the plugin will fail.
     * Even if in this example, it can't.
     */
    // Set the plugin result to fail.
    var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR, messageAs: "The Plugin Failed");
    // Set the plugin result to succeed.
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: "The plugin succeeded");
    // Send the function result back to Cordova.
    self.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
  }
  
  @objc(pluginFunction2:)
  func pluginFunction2(command: CDVInvokedUrlCommand) {
    print("getting that money!")
    print(command.arguments![0])
    var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR, messageAs: "The Plugin Failed");

    pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: "The plugin succeeded");
    // Send the function result back to Cordova.
    self.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
  }
}