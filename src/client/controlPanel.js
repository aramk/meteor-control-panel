const TemplateClass = Template.controlPanel;

TemplateClass.events({
  'click .restart.button'(event) {
    const $button = $(event.currentTarget);
    $button.attr('disabled', true);
    Meteor.call('service/restart', (err, result) => {
      if (err) {
        Logger.error(err);
      }
      $button.attr('disabled', false);
    });
  },
  'click .logout.button'() {
    Meteor.logout();
  }
});
