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

## Extends
