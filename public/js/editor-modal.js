apos.define('pk-people-editor-modal', {
  extend: 'apostrophe-pieces-editor-modal',
  construct: (self, options) => {
    // TODO: Finish validation for title field before save
    const superBeforeSaveContent = self.saveContent;
    self.saveContent = (callback) => {
      return superBeforeSaveContent((err) => {
        if (!self.$title.val().length) {
          console.log('no title field. dont save this piece');
          return callback(err);
        }
        console.log('yay! saving content!');
        return callback(null);
      });
    };

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
