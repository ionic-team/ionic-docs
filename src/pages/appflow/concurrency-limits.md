# Concurrency limits

Each account plan has a defined maximum amount of concurrent builds allowed (see [Plans Details](/pricing)).
This limit is enforced at the account level across different apps.

When you trigger a build, in the Appflow Dashboard you will notice that a build can have different statuses before it is processed:

* **Queued**: this means that your build is queued for the next available runner. Usually your build should not be in this state for more than few seconds.
* **Pending**: this means that you have reached your concurrent build limit and your build will continue when your current builds are completed.

After the build starts to be processed the statuses are:

* **Running**: the build is currently being processed. You can read the logs in the build details.
* **Successful**: the build terminated in a correct state.
* **Failed**: the build terminated in an incorrect state.

More concurrent builds can be added to your plan.
If you have a Starter or Developer plan, you can get more builds by [upgrading plan](https://dashboard.ionicframework.com/settings/billing).
If you have a Teams or Business plan, please [contact us](https://ionic.zendesk.com/hc/en-us/requests/new).
