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
        name: 'firstName',
        label: 'First Name',
        type: 'string'
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'string'
      },
      {
        name: 'title',
        label: 'Full Name',
        type: 'string',
        required: true,
        readOnly: true
      },
      {
        name: 'position',
        label: 'Position/Job Title',
        type: 'string'
      },
      // TODO: photo - how do we allow this to be
      // overridden project level
      {
        name: 'email',
        label: 'Email',
        type: 'string'
      },
      {
        name: 'tel',
        label: 'Telephone Number',
        type: 'string'
      },
      {
        name: 'summary',
        label: 'Summary/Bio',
        type: 'string',
        textarea: true
      }
    ].concat(options.addFields || []);
    // TODO: arrange fields
  }
};
