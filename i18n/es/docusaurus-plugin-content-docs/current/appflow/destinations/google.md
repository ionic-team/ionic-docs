---
title: 'Google Play Store'
previousText: 'Deploy To Apple App Store'
previousUrl: '/docs/appflow/destinations/apple'
nextText: 'Builds/Automations'
nextUrl: '/docs/appflow/destinations/builds'
---

The Google Play destination allows you to upload your finished binaries to the store for Android.

> **Note:** The first upload for a new Android app <b>must</b> be uploaded from the Google Play Store website.

![/docs/assets/img/appflow/google-overview.png](/docs/assets/img/appflow/google-overview.png)

- **Track**
    - Which track on the Google Play Store the app will be upload into.
- **Package name**
    - in reverse domain name format.
        - e.g. com.yourdomain.yourappname
- **JSON key**
    - To upload to the Google Play Store you will need to create a service account and download the JSON file containing security info for the service account.
        1. Go to [Google Play Console](https://play.google.com/apps/publish/)
        2. Navigate to **Settings** and then **API access**
        3. Click **`CREATE SERVICE ACCOUNT`** 
        4. Navigate to the **Google Developers Console** link in the dialog, which opens a new tab/window:
            1. Click the **CREATE SERVICE ACCOUNT** button at the top of the **Google Developers Console**
            2. Enter a `Service account name`
            3. Click **Select a role** and choose **Service Accounts > Service Account User**
            4. Check the **Furnish a new private key** checkbox
            5. Make sure **JSON** is selected as the `Key type`
            6. Click **SAVE** to close the dialog
            7. Download the JSON file to your computer
        5. Back on the **Google Play Console**, click **DONE** to close the dialog
        6. Click on **Grant Access** for the newly added service account
        7. Choose **Release Manager** (or **Project Lead**) from the `Role` dropdown. (Note that choosing **Release Manager** grants access to the production track and all other tracks. Choosing **Project Lead** grants access to update all tracks *except* the production track.)
        8. Click **ADD USER** to close the dialog