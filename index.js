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
    options.contextual = true;
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
        help: 'Automatically generated from first and last name, but feel free to edit.'
      },
      {
        name: 'image',
        label: 'Image',
        type: 'singleton',
        widgetType: 'apostrophe-images',
        options: {
          limit: 1
        }
      },
      {
        name: 'position',
        label: 'Position/Job Title',
        type: 'string'
      },
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
    options.arrangeFields = [
      {
        name: 'basics',
        label: 'Basics',
        fields: [ 'firstName', 'lastName', 'title', 'image', 'position', 'email', 'tel', 'summary' ]
      },
      {
        name: 'admin',
        label: 'Admin',
        fields: [ 'slug', 'tags', 'published' ]
      }
    ].concat(options.arrangeFields || []);
  }
};
