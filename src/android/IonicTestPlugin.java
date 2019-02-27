package org.apache.cordova.plugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
* This class echoes a string called from JavaScript.
*/
public class IonicTestPlugin extends CordovaPlugin {

    protected static final String TAG = "IonicTestPluginLog: ";

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("pluginFunction")) {
            this.pluginFunction(callbackContext);
            return true;
        } else if (action.equals("pluginFunction2")) {
            this.pluginFunction(callbackContext);
            return true;
        } else if (action.equals("pluginFunction3")) {
            String message = args.getString(0);
            this.pluginFunction(message, callbackContext);
            return true;
        }
        return false;
    }

    private void pluginFunction(CallbackContext callbackContext) {
        Log.i(TAG, "pluginFunction fired!" + callbackContext.getCallbackId());

        callbackContext.success("Got it pluginFunction to fire off!" + callbackContext.getCallbackId());
        
        // callbackContext.error("Expected one non-empty string argument.");
    }

    private void pluginFunction2(CallbackContext callbackContext) {
        Log.i(TAG, "pluginFunction2 fired!" + callbackContext.getCallbackId());
        
        PluginResult result = new PluginResult(PluginResult.Status.OK, "pluginFunction2 success!");
        
        
        callbackContext.sendPluginResult(result, callbackContext.getCallbackId());
        // callbackContext.error("Expected one non-empty string argument.");
    }

    private void pluginFunction3(String message, CallbackContext callbackContext) {
        Log.i(TAG, "pluginFunction3 fired!" + callbackContext.getCallbackId());
        if (message != null && message.length() > 0) {
            callbackContext.success(message + callbackContext.getCallbackId());
        } else {
            callbackContext.error("Expected one non-empty string argument." + callbackContext.getCallbackId());
        }
    }
}