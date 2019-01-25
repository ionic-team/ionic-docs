---
previousText: 'Environments'
previousUrl: '/docs/appflow/automation/environments'
nextText: 'Cookbook'
nextUrl: '/docs/appflow/cookbook/intro'
---

# Understanding Webhooks

When a webhook URL is specified for an automation, a POST is made every time a build completes.  Information is
included about the build, as well as the user who triggered it and the commit that it was built from.

## Webhook Body

Below are example webhook json payloads:

### Package Automation Webhook

```json
{
    "state": "success",
    "automationId": 777,
    "automation": {
        "id": 777,
        "buidType": "debug",
        "environmentName": "staging",
        "nativeConfigName": "staging",
        "created": "2018-08-24T14:49:01.462549+00:00",
        "creatorId": 10000023,
        "name": "my-awesome-automation",
        "creator": {
            "name": "Ionitron",
            "picture": "https://www.ionicjs.com/picture",
            "avatars": {
                "small": "https://www.ionicjs.com/picture-sm",
                "medium": "https://www.ionicjs.com/picture-md",
                "large": "https://www.ionicjs.com/picture-lg"
            },
            "username": "ionic"
        },
        "platform": "android",
        "profile": "debug"
    },
    "environmentName": "staging",
    "id": "2216322b-35be-4af2-aaad-2b4e57354f88",
    "type": "debug",
    "created": "2018-08-24T14:49:01.462549+00:00",
    "started": "2018-08-24T14:49:08.556804+00:00",
    "finished": "2018-08-24T14:56:45.986317+00:00",
    "downloadUrl": "https://www.ionicjs.com/one-awesome-app",
    "profile": "debug",
    "buildInfo": {
        "id": 777,
        "state": "success",
        "job_type": "package-android"
    },
    "appId": "abcd1234",
    "platform": "android",
    "app": {
        "slug": "awesomeapp",
        "org": null,
        "name": "Awesome App",
        "owner": {
            "name": "Ionitron",
            "picture": "https://www.ionicjs.com/picture",
            "avatars": {
                "small": "https://www.ionicjs.com/picture-sm",
                "medium": "https://www.ionicjs.com/picture-md",
                "large": "https://www.ionicjs.com/picture-lg"
            },
            "username": "ionic"
        },
        "id": "abcd1234",
        "updated": "2018-03-22T02:12:21.183081+00:00",
        "created": "2018-03-13T14:20:46.628090+00:00",
        "icon": "https://www.ionicjs.com/picture"
    },
    "commit": {
        "user": {
            "name": "Ionitron",
            "picture": "https://www.ionicjs.com/picture",
            "avatars": {
                "small": "https://www.ionicjs.com/picture-sm",
                "medium": "https://www.ionicjs.com/picture-md",
                "large": "https://www.ionicjs.com/picture-lg"
            },
            "htmlUrl": "https://github.com/ionitron",
            "profile": "https://github.com/ionitron",
            "username": "ionitron"
        },
        "sha": "e900ae1863482df4f9c24ee759d15a9250de77a7",
        "note": "github 🦊",
        "beforeSha": "5161d6d939409f94d33c8cc549c4c89a861d0042",
        "uuid": "74797ffe-8ee2-4ab7-9e1a-3a1e5969f7bb",
        "userId": 1000000,
        "refType": "branch",
        "ref": "different-branch",
        "appId": "abcd1234",
        "repositoryId": 777,
        "created": "2018-08-24T02:51:20.477835+00:00"
    }
}
```

### Web Automation Webhook

```json
{
    "started": "2018-08-24T14:49:08.556804+00:00",
    "state": "success",
    "automationId": 777,
    "automation": {
        "id": 777,
        "created": "2018-08-24T14:49:01.462549+00:00",
        "creatorId": 10000023,
        "environmentName": "staging",
        "name": "my-awesome-automation",
        "channel": {
            "name": "threeve",
            "updated": "2018-02-13T20:35:46.486541Z+00:00",
            "id": "24464de6-6684-46f4-831b-f66c379db096",
            "created": "2018-02-09T21:38:19.086808Z+00:00"
        },
        "creator": {
            "name": "Ionitron",
            "picture": "https://www.ionicjs.com/picture",
            "avatars": {
                "small": "https://www.ionicjs.com/picture-sm",
                "medium": "https://www.ionicjs.com/picture-md",
                "large": "https://www.ionicjs.com/picture-lg"
            },
            "username": "ionic"
        }
    },
    "environmentName": "staging",
    "id": "2216322b-35be-4af2-aaad-2b4e57354f88",
    "created": "2018-08-24T14:49:01.462549+00:00",
    "finished": "2018-08-24T14:56:45.986317+00:00",
    "buildInfo": {
        "id": 101,
        "state": "success",
        "job_type": "snapshot"
    },
    "appId": "abcd1234",
    "app": {
        "slug": "awesomeapp",
        "org": null,
        "name": "Awesome App",
        "owner": {
            "name": "Ionitron",
            "picture": "https://www.ionicjs.com/picture",
            "avatars": {
                "small": "https://www.ionicjs.com/picture-sm",
                "medium": "https://www.ionicjs.com/picture-md",
                "large": "https://www.ionicjs.com/picture-lg"
            },
            "username": "ionic"
        },
        "id": "abcd1234",
        "updated": "2018-03-22T02:12:21.183081+00:00",
        "created": "2018-03-13T14:20:46.628090+00:00",
        "icon": "https://www.ionicjs.com/picture"
    },
    "commit": {
        "user": {
            "name": "Ionitron",
            "picture": "https://www.ionicjs.com/picture",
            "avatars": {
                "small": "https://www.ionicjs.com/picture-sm",
                "medium": "https://www.ionicjs.com/picture-md",
                "large": "https://www.ionicjs.com/picture-lg"
            },
            "htmlUrl": "https://github.com/ionitron",
            "profile": "https://github.com/ionitron",
            "username": "ionitron"
        },
        "sha": "e900ae1863482df4f9c24ee759d15a9250de77a7",
        "note": "github 🦊",
        "beforeSha": "5161d6d939409f94d33c8cc549c4c89a861d0042",
        "uuid": "74797ffe-8ee2-4ab7-9e1a-3a1e5969f7bb",
        "userId": 1000000,
        "refType": "branch",
        "ref": "different-branch",
        "appId": "abcd1234",
        "repositoryId": 777,
        "created": "2018-08-24T02:51:20.477835+00:00"
    }
}
```

## Responding to Webhooks

The server will automatically attempt a retry if the webhook request does not receive a status code of **200**.

## Retries

The server will retry the hook up to 5 times with an increasing delay between attempts (up to a delay of one hour) in
the case where it does not receive a 200 response code.

## Signed Download URLs (Package Automations Only)

The `downloadUrl` field in the webhook allows only this specific build to be downloaded, and will be signed with a
token that is valid for 24 hours.  There is no limit on the number of downloads, but after the time limit the endpoint
will no longer function.
