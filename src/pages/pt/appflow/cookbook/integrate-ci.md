---
title: Using Appflow in Jenkins, GitLab CI, & GitHub Actions
sidebar_label: Jenkins, GitHub Actions, GitLab
previousText: "PhoneGap Build Migration"
previousUrl: "/docs/appflow/cookbook/phonegap-build-migration"
nextText: "Using private Git repositories"
nextUrl: "/docs/appflow/cookbook/private_git"
---

For those who already use a CI/CD system like Jenkins, GitLab CI, & GitHub Actions you can easily integrate Appflow with those systems to do both live updates from them as well as native binary builds. Triggering native builds in particular can save you the headache of having to appropriately configure the OS, Xcode version, credentials, etc. Simply specify the configurations you'd like to use & let Appflow do the heavy lifting.

> Building your native binaries in the cloud with Appflow requires a subscription to the Launch plan and above. Jenkins & GitLab CI integrations using the CLI is only available for the Scale plan. Our official [GitHub Action](https://github.com/marketplace/actions/trigger-mobile-builds-with-appflow) is available free! 🚀 [Sign up here](https://ionicframework.com/pricing/compare).

## GitHub Actions

Appflow has it's very own [GitHub Action](https://github.com/marketplace/actions/trigger-mobile-builds-with-appflow) that you can use to trigger builds. When you use the action you native binaries can be uploaded to GitHub as build artifacts so that you can easily access them. Since Appflow does the builds you don't need to run builds on any particular OS so don't worry about setting up & configure MacOS & codesigning Appflow can take care of that for you. You can read more about the action see the docs [here](https://github.com/marketplace/actions/trigger-mobile-builds-with-appflow).

The following is a sample `github-workflow.yml` file that will build iOS, Android, & Live Updates:

> Remember to [get your appflow token](#getting-an-appflow-token) and set it using [GitHub Secrets](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).

```yaml
name: Build with Appflow

# Controls when the action will run. Triggers the workflow on push or pull request
# events but only for the master branch
on:
  push:
    branches: [ master ]

jobs:
  # This will build an IPA & Upload the artifact in iOS.zip
  build-ios:
    runs-on: ubuntu-latest
    steps:
      - name: Build iOS with Appflow
        uses: ionic-team/appflow-build@v1
        with:
          token: ${{ secrets.APPFLOW_TOKEN }}
          app-id: yourappid
          platform: iOS
          build-type: ad-hoc
          environment: MyEnv
          native-config: MyNativeConfig
          certificate: MyCertificate
          build-stack: macOS - 2020.09
          upload-artifact: iOS

  # This will build an APK & Upload the artifact in Android.zip
  build-android:
    runs-on: ubuntu-latest
    steps:
      - name: Build Android with Appflow
        uses: ionic-team/appflow-build@v1
        with:
          token: ${{ secrets.APPFLOW_TOKEN }}
          app-id: yourappid
          platform: Android
          build-type: debug
          environment: MyEnv
          native-config: MyNativeConfig
          upload-artifact: Android

  # This will trigger a live update
  build-live-update:
    runs-on: ubuntu-latest
    steps:
      - name: Build Live Update with Appflow
        uses: ionic-team/appflow-build@v1
        with:
          token: ${{ secrets.APPFLOW_TOKEN }}
          app-id: yourappid
          platform: Web
          environment: MyEnv
```

## Jenkins

You can use the Ionic CLI to trigger builds from Jenkins as well. This can help save time having to setup agents on multiple OSs & managing dependencies. The `Jenkinsfile` below uses the [Ionic CLI Docker Image](https://github.com/orgs/ionic-team/packages/container/package/ionic-cli) as the container to run builds in. The container can run anywhere docker can run.

The following is a sample `Jenkinsfile` file that will build iOS, Android, & Live Updates:

> Remember to [get your appflow token](#getting-an-appflow-token) and set it using Jenkins Credentials & load it into the `IONIC_TOKEN` environment variable.

```groovy
pipeline {
  agent any
  environment {
      IONIC_TOKEN = credentials('ionic-token')
  }
  stages {
    stage('NPM Tests') {
      agent {
        docker {
          image  'ghcr.io/ionic-team/ionic-cli:6.11.11'
          args '-v $PWD:/usr/src/app/ -u 0:0'
        }
      }
      steps {
          sh 'npm ci'
          sh 'npm run test'
      }
    }

    stage('Build') {
      parallel {
        stage('Build Android') {
          agent {
            docker {
              image  'ghcr.io/ionic-team/ionic-cli:6.11.11'
              args '-v $PWD:/usr/src/app/ -u 0:0'
            }
          }
          steps {
              sh 'ionic package build android debug --environment="Jenkins" --native-config"=Jenkins" --build-file-name="Jenkins-$BUILD_ID.apk"'
          }
          post {
            success {
              archiveArtifacts artifacts: 'Jenkins-*.apk', fingerprint: true
            }
          }
        }

        stage('Build iOS') {
          agent {
            docker {
              image  'ghcr.io/ionic-team/ionic-cli:6.11.11'
              args '-v $PWD:/usr/src/app/ -u 0:0'
            }
          }
          steps {
              sh 'ionic package build ios ad-hoc --environment="Jenkins" --native-config"=Jenkins" --signing-certificate="Jenkins" --build-stack="macOS - 2020.09" --build-file-name="Jenkins-$BUILD_ID.ipa"'
          }
          post {
            success {
              archiveArtifacts artifacts: 'Jenkins-*.ipa', fingerprint: true
            }
          }
        }

        stage('Build Live Update') {
          agent {
            docker {
              image  'ghcr.io/ionic-team/ionic-cli:6.11.11'
              args '-v $PWD:/usr/src/app/ -u 0:0'
            }
          }
          steps {
              sh 'ionic deploy build --environment="Jenkins"'
          }
        }
      }
    }
  }
}
```

## GitLab CI

You can use the Ionic CLI to trigger builds from GitLab CI as well. This can help save time having to setup GitLab Runners on multiple OSs & managing dependencies. The `.gitlab-ci.yml` below uses the [Ionic CLI Docker Image](https://github.com/orgs/ionic-team/packages/container/package/ionic-cli) as the container to run builds in. The container can run anywhere docker can run.

The following is a sample `.gitlab-ci.yml` file that will build iOS, Android, & Live Updates:

> Remember to [get your appflow token](#getting-an-appflow-token) and set it using [GitLab variables](https://docs.gitlab.com/ce/ci/variables/#create-a-custom-variable-in-the-ui) as `IONIC_TOKEN` variable.

```yaml
image: ghcr.io/ionic-team/ionic-cli:6.11.11

stages:
  - test
  - build

test:
  stage: test
  script:
    - npm ci
    - npm run test

build-ios:
  stage: build
  script:
    - ionic package build ios ad-hoc --environment="GitLab" --native-config"=GitLab" --signing-certificate="GitLab" --build-stack="macOS - 2020.09" --build-file-name="GitLab-$CI_PIPELINE_ID.ipa"
  artifacts:
    paths:
      - GitLab-$CI_PIPELINE_ID.ipa
  only:
    - /^master$/

build-android:
  stage: build
  script:
    - ionic package build android debug --environment="GitLab" --native-config"=GitLab" --build-file-name="GitLab-$CI_PIPELINE_ID.apk"
  artifacts:
    paths:
      - GitLab-$CI_PIPELINE_ID.apk
  only:
    - /^master$/

build-live-update:
  stage: build
  script:
    - ionic deploy build --environment="Jenkins"
  only:
    - /^master$/
```

## Getting an Appflow Token

You will need a token to authenticate with Appflow from your CI/CD System. The easiest way to get your token is to use the Ionic CLI to login & retrieve the token.

To login type:

```bash
npm i -g @ionic/cli
ionic login
```

Then you can use the following command to see your token:

```bash
ionic config -g tokens.user
```

When using the Ionic CLI you can login then using the token as an environment variable by setting it in you CI/CD system.

```bash
export IONIC_TOKEN=mytoken
```
