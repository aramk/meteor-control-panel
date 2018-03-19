Package.describe({
  name: 'aramk:control-panel',
  summary: 'A control panel to manage a Meteor service',
  version: '1.0.0',
  git: 'https://github.com/aramk/meteor-control-panel.git'
});

Package.onUse(function(api) {
  Npm.depends({
    'shelljs': '0.8.1',
  });
  api.versionsFrom('METEOR@1.6.1');
  api.use([
    'jquery',
    'less',
    'templating',
  ], 'client');
  api.use([
    'ecmascript',
    'aramk:notifications@0.3.1'
  ], ['server', 'client']);
  api.addFiles([
    'src/client/controlPanel.html',
    'src/client/controlPanel.js',
    'src/client/main.less',
  ], 'client');
  api.addFiles([
    'src/server/service.js',
  ], 'server');
});
