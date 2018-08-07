Package.describe({
  name: "origenstudio:vulcan-material-ui-layout",
  summary: "Material UI theme for Vulcan",
  version: '0.0.1',
  git: "", // coming soon
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    // Vulcan packages
    'vulcan:core@1.8.11',
    'zetoff:vulcan',
  ]);

  api.mainModule("lib/client.js", "client");
  api.mainModule("lib/server.js", "server");

});
