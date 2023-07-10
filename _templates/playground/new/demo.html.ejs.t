---
arbitrary: <% nameWithoutIon = name.replace('ion-', ''); numberOfAncestors = (path.match(/\//g) || []).length; directoryChanges = '../'.repeat(numberOfAncestors) %>
to: "<%= `static/usage/v${version}/${nameWithoutIon}/${path}/demo.html` %>"
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= h.changeCase.titleCase(nameWithoutIon) %></title>
    <link rel="stylesheet" href="<%= directoryChanges %>../../../common.css" />
    <script src="<%= directoryChanges %>../../../common.js"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core@<%= version %>/dist/ionic/ionic.esm.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core@<%= version %>/css/ionic.bundle.css" /><% if (css){ %>

    <style>
      <%= name %> {
        /* styles go here */
      }
    </style><% } %>
  </head>

  <body>
    <ion-app>
      <ion-content>
        <div class="container">
          <<%= name %>></<%= name %>>
        </div>
      </ion-content>
    </ion-app>
  </body>
</html>
