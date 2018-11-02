module.exports = {
  name: 'person',
  label: 'Person',
  pluralLabel: 'People',
  construct: (self, options) => {
    options.addFields = [
      {
        name: 'title',
        label: 'Full Name'
      },
      {
        type: 'string',
        name: 'firstName',
        label: 'First Name',
        required: true
      },
      {
        type: 'string',
        name: 'lastName',
        label: 'Last Name',
        required: true
      }
    ].concat(options.addFields || []);
  }
};
