
This plugin only works when your app is built with XCode 10. Shortcuts will only appear on iOS-versions >= 12.0

This plugin enables the use of Siri shortcuts in Cordova. Siri Shortcuts enable the user to perform certain actions by adding them to Siri.
After you have donated a shortcut to Siri, it will appear in the settings menu, after which the user is able to add the action. You can check
whether the user launched your app through a shortcut by calling `getActivatedShortcut()` when the app is resumed. It will return `null`
if it has not been launched by Siri, and if it did, it will return an object with `SiriShortcut` properties.
