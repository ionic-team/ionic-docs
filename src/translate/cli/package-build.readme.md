This command creates a package build on Ionic Appflow. While the build is running, it prints the remote build log to the terminal. If the build is successful, it downloads the created app package file in the current directory.

Apart from `--commit`, every option can be specified using the full name setup within the Appflow [Dashboard](https://dashboard.ionicframework.com).

The `--security-profile` option is mandatory for any iOS build but not for Android debug builds.

Customizing the build:
- The `--environment` and `--native-config` options can be used to customize the groups of values exposed to the build.
- Override the preferred platform with `--target-platform`. This is useful for building older iOS apps.