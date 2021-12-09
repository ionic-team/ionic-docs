This command creates a deploy build on Appflow. While the build is running, it prints the remote build log to the terminal. If the build is successful, it downloads the created web build zip file in the current directory. Downloading build artifacts can be skipped by supplying the flag `skip-download`.

Apart from `--commit`, every option can be specified using the full name setup within the Appflow [Dashboard](https://dashboard.ionicframework.com).

Customizing the build:
- The `--environment` and `--channel` options can be used to customize the groups of values exposed to the build.