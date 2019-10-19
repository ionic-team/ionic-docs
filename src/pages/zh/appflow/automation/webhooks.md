---
previousText: '环境'
previousUrl: '/docs/appflow/automation/environments'
nextText: '参考手册'
nextUrl: '/docs/apport/commodbook/intro'
---

# 了解 Webhooks

当为自动化指定webhook URL时，每次构建完成都会生成一个POST。 其中包括关于构建的信息，以及触发构建的用户和构建的提交。

## Webhook 内容

下面是webhook json的例子:

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

### Package Automation Webhook

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

## Webhooks响应

如果 webhook 请求没有收到 **200** 的状态代码，服务器会自动尝试重试。

## 重试

没有收到200个响应代码的情况下，服务器将重试连接最多5次，每次尝试之间的延迟不断增加(最多延迟1小时)。

## 已签名下载url(仅Package Automations)

Webhook中的`downloadUrl`字段只允许下载这个特定的构建，并且将使用24小时有效的令牌进行签名。 下载次数没有限制，但是超过时间限制后端点将不再运行。