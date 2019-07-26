# pk-people

This bundle provides a complete foundation for adding a people piece type to an Apostrophe CMS project.

The bundle consists of three Apostrophe modules:

- `pk-people`
- `pk-people-pages`
- `pk-people-widgets`

The `pk-people` module provides the ability to create and edit people.

The `pk-people-pages` module displays people in an index and on individual show pages. It extends the `apostrophe-pieces-pages` module.

The `pk-people-widgets` module provides an `pk-people` widget, which you can use to select people to appear anywhere on your site.

These three modules extend `apostrophe-pieces`, `apostrophe-pieces-pages` and `apostrophe-pieces-widgets`, and you can extend them further as well.

## Example configuration:

```
// in app.js
// We must declare the bundle!
bundles: [ 'pk-people' ],
modules: {
  'pk-people': {},
  'pk-people-pages': {},
  'pk-people-widgets': {},
  'apostrophe-pages': {
    // We must list `pk-people-page` as one of the available page types
    types: [
      ...
      {
        name: 'pk-people-page',
        label: 'People'
      }
    ]
  }
}
```

## Classes

## Extending

Example of project-level extension...
```
// in app.js
...
modules: {
  ...
  'my-people': { extend: 'pk-people' },
  'my-people-pages': { extend: 'pk-people-pages' },
  'my-people-widgets': { extend: 'pk-people-widgets' }
}
...
```

Adding a field to people...
`lib/modules/my-people/index.js`
```
module.exports = {
  addFields: [
    {
      name: 'newField',
      label: 'New Field',
      type: 'string'
    }
  ]
};
```

Extending a template...
`lib/modules/my-people-pages/views/index.html`
```
{% extends 'indexBase.html' %}

{% block header %}
<h1>HELLO</h1>
{% endblock %}
```

The `pk-people-widgets` module has some special conveniences. You can set a `namespace` option to override the widget class names. There are also `beforeWidget` and `afterWidget` blocks for you to override for conveniently wrapping the widget with your own custom markup.
