package com.basic.plugin;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;

public class Cool extends CordovaPlugin {

  @Override
  public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {
    if (action.equals("coolMethod")) {
      String name = data.getString(0);
      String message = "Hello, " + name + " you're cool!";
      callbackContext.success(message);
      return true;
    }
    return false;
  }
}

