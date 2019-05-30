module.exports = {
  label: 'People Widget',
  extend: 'apostrophe-pieces-widgets',
  beforeConstruct: (self, options) => {
    options.addFields = [
      {
        name: 'title',
        label: 'Widget Title',
        type: 'string'
      },
      {
        name: 'linkIndex',
        label: 'Add link to index?',
        type: 'select',
        choices: [
          {
            value: 'no',
            label: 'No'
          },
          {
            value: 'yes',
            label: 'Yes',
            showFields: ['linkText']
          }
        ]
      },
      {
        name: 'linkText',
        label: 'Link Text',
        type: 'string'
      }
    ].concat(options.addFields || []);
  }
};
