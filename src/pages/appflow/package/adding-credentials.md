---
title: 'Adding Certificates'
previousText: 'Generating Certificates'
previousUrl: '/docs/appflow/package/credentials'
nextText: 'Native Configurations'
nextUrl: '/docs/appflow/package/native-configs'
---

After you have generated your Signing Certificate, you must upload it to Ionic Appflow.

## Uploading Certificates

Navigate to your App, then to the `Build > Certificates` tab on the left hand side.

Click the `Add certificate` button to create a new signing certificate. Both iOS and Android certifications can be used with
one signing certificate, so we recommend making things like "Real App Store Certificate", etc.

<blockquote>
<b>Note:</b> Signing certificates are created as either `Production` of `Development` and can only house the the
<a href="/docs/appflow/package/build-types">build types</a> associated with the signing certificate type.
<br/>
<b>For example:</b> <a href="/docs/appflow/package/build-types#app-store">App Store builds</a> require an iOS production certificate & distribution provisioning profile
and therefore must use a </b>Production</b> type profile.
</blockquote>

![Add Profile](/docs/assets/img/appflow/ss-add-profile.png)

You'll need to choose the [certificate files you generated](/docs/appflow/package/credentials) and upload them
as well as put in any passwords needed to access the certificates.

Specifically for iOS, use [the generated](/docs/appflow/package/credentials) `.p12` file for the certificate, the `.mobileprovision` file for the Provisioning Profile, and the password used to generate the `.p12` file for the password.

Once that signing certificate has been created, can click the `Edit` button to remove and/or upload your iOS and Android certs.
