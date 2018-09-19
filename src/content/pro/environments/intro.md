# Build Environments

Every time Ionic deploys or packages code, it's done in a secure environment and provided with configurable key/value pairs which can be leveraged to customize the build and outputs.

## Default Environment

The following environment variables are provided in every build, which can be accessed in build scripts:

* `CI_APP_ID` **(string):** Your Ionic app's unique ID.
* `CI_APP_NAME` **(string):** Your Ionic app's name.
* `CI_AUTOMATED_BUILD` **(boolean):** Whether this build occurred as a result of an automation.
* `CI_AUTOMATION_ID` **(optional int):** The unique ID of the automation which created this build.
* `CI_AUTOMATION_NAME` **(optional string):** The name of the automation which created this build.
* `CI_GIT_COMMIT_SHA` **(string):** The SHA for the commit on which the build was run.
* `CI_GIT_REF` **(string):** The git ref from which the build was created (i.e. `master`).
* `CI_GIT_REF_TYPE` **(string):** The git ref type (i.e. `branch`).

## Custom Environments

**Coming soon...**
