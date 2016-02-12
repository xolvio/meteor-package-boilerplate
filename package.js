/* globals Package: false */

Package.describe({
  name: 'meteor-package-boilerplate',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function onUse(api) {
  api.export('MeteorPackageBoilerplate');

  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');

  api.addFiles('meteor-package-boilerplate.js');
});

Package.onTest(function onTest(api) {
  api.use('sanjo:jasmine@0.16.4');
  api.use('ecmascript');
  api.use('meteor-package-boilerplate');

  api.addFiles('tests/meteor-package-boilerplate-spec.js');
});
