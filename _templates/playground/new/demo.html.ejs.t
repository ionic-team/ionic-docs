---
arbitrary: <% numberOfAncestors = (path.match(/\//g) || []).length; directoryChanges = '../'.repeat(numberOfAncestors) %>
to: "<%= `static/usage/v${version}/${name}/${path}/demo.html` %>"
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= h.changeCase.titleCase(name) %></title>
    <link rel="stylesheet" href="<%= directoryChanges %>../../common.css" />
    <script src="<%= directoryChanges %>../../common.js"></script><% if (cdnVersion !== version) { %>
    <!-- TODO(FW-XXXX): load Ionic <%= version %> once it is published --><% } %>
    <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core@<%= cdnVersion %>/dist/ionic/ionic.esm.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core@<%= cdnVersion %>/css/ionic.bundle.css" /><% if (css){ %>

    <style>
      <%= component %> {
        /* styles go here */
      }
    </style><% } %>
  </head>

  <body>
    <ion-app>
      <ion-content>
        <div class="container">
          <<%= component %>></<%= component %>>
        </div>
      </ion-content>
    </ion-app>
  </body>
</html>
