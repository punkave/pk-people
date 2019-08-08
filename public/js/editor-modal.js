apos.define('pk-people-editor-modal', {
  extend: 'apostrophe-pieces-editor-modal',
  construct: function (self, options) {
    const superBeforeShow = self.beforeShow;
    self.beforeShow = function (callback) {
      return superBeforeShow(function (err) {
        if (err) {
          return callback(err);
        }
        self.enableTitleViaName();
        return callback(null);
      });
    };

    self.enableTitleViaName = function () {
      self.$title = apos.schemas.findField(self.$el, 'title');
      self.$firstName = apos.schemas.findField(self.$el, 'firstName');
      self.$lastName = apos.schemas.findField(self.$el, 'lastName');
      self.$firstName.on('change', self.updateTitleViaName);
      self.$lastName.on('change', self.updateTitleViaName);
    };

    self.updateTitleViaName = function () {
      self.$title.val((self.$firstName.val() + ' ' + self.$lastName.val()).trim());
      self.$title.trigger('change');
      self.$title.trigger('textchange');
    };
  }
});
