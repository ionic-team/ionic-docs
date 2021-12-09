---
sidebar_label: 'doctor list'
---

# ionic doctor list

List all issues and their identifiers

```shell
$ ionic doctor list [options]
```

Issues can have various tags:

- **treatable**: `ionic doctor treat` can attempt to fix the issue
- **ignored**: configured not to be detected in `ionic doctor check` or `ionic doctor treat`
- **explicit-detection**: issue is only detected explicitly with `ionic doctor check <issue-id>`

You can flip whether an issue is ignored or not by using `ionic config set -g doctor.issues.<issue-id>.ignored true/false`, where `<issue-id>` matches an ID listed with this command.
