const shell = require('shelljs');

Meteor.methods({
  'service/restart'() {
    this.unblock();
    const {restartScriptPath} = Meteor.settings;
    if (!restartScriptPath) throw new Meteor.Error(500, 'Restart script not provided');
    shell.exec(restartScriptPath, (err, result) => {
      if (err) Logger.error(err);
    });
  }
});
