apos.define('pk-people-editor-modal', {
  extend: 'apostrophe-pieces-editor-modal',
  construct: (self, options) => {
    // TODO: Validation for title field before save

    const superBeforeShow = self.beforeShow;
    self.beforeShow = (callback) => {
      return superBeforeShow((err) => {
        if (err) {
          return callback(err);
        }
        self.enableTitleViaName();
        return callback(null);
      });
    };

    self.enableTitleViaName = () => {
      self.$title = apos.schemas.findField(self.$el, 'title');
      self.$firstName = apos.schemas.findField(self.$el, 'firstName');
      self.$lastName = apos.schemas.findField(self.$el, 'lastName');
      self.$firstName.on('change', self.updateTitleViaName);
      self.$lastName.on('change', self.updateTitleViaName);
    };

    self.updateTitleViaName = () => {
      self.$title.val((self.$firstName.val() + ' ' + self.$lastName.val()).trim());
      self.$title.trigger('change');
      self.$title.trigger('textchange');
    };
  }
});
