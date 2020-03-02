---
title: 'Adding Credentials'
previousText: 'Generating Credentials'
previousUrl: '/docs/appflow/package/credentials'
nextText: 'Native Configurations'
nextUrl: '/docs/appflow/package/native-configs'
---

After you have generated your Security Profile, you must upload it to Ionic Appflow.

## Uploading Credentials

Navigate to your App, then to the `Build > Certificates` tab on the left hand side.

Click the `Add Profile` button to create a new Profile.Both iOS and Android certifications can be used with
one Profile, so we recommend making things like "Real App Store Profile", etc.

<blockquote>
<b>Note:</b> Profiles are created as either `Production` of `Development` and can only house the the
<a href="/docs/appflow/package/build-types">build types</a> associated with the profile type.
<br/>
<b>For example:</b> <a href="/docs/appflow/package/build-types#app-store">App Store builds</a> require an iOS production certificate & distribution provisioning profile
and therefore must use a </b>Production</b> type profile.
</blockquote>

![Add Profile](/docs/assets/img/appflow/ss-add-profile.png)

You'll need to choose the [certificate files you generated](/docs/appflow/package/credentials) and upload them
as well as put in any passwords needed to access the credentials.

Once that Profile has been created, can click the `Edit` button to remove and/or upload your iOS and Android certs.
