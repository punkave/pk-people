module.exports = {
  name: 'pk-people',
  label: 'Person',
  pluralLabel: 'People',
  extend: 'apostrophe-pieces',
  moogBundle: {
    modules: ['pk-people-pages', 'pk-people-widgets'],
    directory: 'lib/modules'
  },
  beforeConstruct: (self, options) => {
    options.addFields = [
      {
        name: 'title',
        label: 'Full Name',
        type: 'string'
      }
    ].concat(options.addFields || []);
  }
};
