workflow "Build and Test" {
  on = "push"
  resolves = ["Build"]
}

action "Install" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  args = "install"
}

action "Lint" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  needs = ["Install"]
  args = "run lint"
}

action "Build" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  needs = ["Lint"]
  args = "run build.ci"
  secrets = ["GITHUB_TOKEN"]
}
