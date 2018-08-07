Package.describe({
  name: "origenstudio:vulcan-material-ui-layout",
  summary: "Material UI theme for Vulcan",
  version: "0.0.1",
  git: "https://github.com/OrigenStudio/vulcan-material-ui-layout"
});

Package.onUse(function(api) {
  api.versionsFrom(["METEOR@1.0"]);

  api.use([
    // Vulcan packages
    "vulcan:core@1.8.11"
  ]);

  api.mainModule("lib/client.js", "client");
  api.mainModule("lib/server.js", "server");
});
