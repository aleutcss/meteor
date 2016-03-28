Package.describe({
  name: 'tiush:aleutcss',
  version: '1.0.0',
  summary: 'Aleut is a fork of inuitcss. It is a powerful, Sass-based, BEM, OOCSS framework.',
  git: 'https://github.com/TiuSh/meteor-aleutcss.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('fourseven:scss@3.4.1');

  // SETTINGS
  api.addFiles('aleut.settings.defaults/_settings.defaults.scss', 'client', {isImport: true});
  api.addFiles('aleut.settings.responsive/_settings.responsive.scss', 'client', {isImport: true});

  // TOOLS
  api.addFiles('aleut.tools.clearfix/_tools.clearfix.scss', 'client', {isImport: true});
  api.addFiles('aleut.tools.functions/_tools.functions.scss', 'client', {isImport: true});
  api.addFiles('aleut.tools.mixins/_tools.mixins.scss', 'client', {isImport: true});
  api.addFiles('aleut.tools.responsive/_tools.responsive.scss', 'client', {isImport: true});
  api.addFiles('aleut.tools.widths/_tools.widths.scss', 'client', {isImport: true});

  // GENERIC
  api.addFiles('aleut.generic.box-sizing/_generic.box-sizing.scss', 'client', {isImport: true});
  api.addFiles('aleut.generic.normalize/_generic.normalize.scss', 'client', {isImport: true});
  api.addFiles('aleut.generic.reset/_generic.reset.scss', 'client', {isImport: true});
  api.addFiles('aleut.generic.shared/_generic.shared.scss', 'client', {isImport: true});

  // BASE
  api.addFiles('aleut.base.headings/_base.headings.scss', 'client', {isImport: true});
  api.addFiles('aleut.base.images/_base.images.scss', 'client', {isImport: true});
  api.addFiles('aleut.base.lists/_base.lists.scss', 'client', {isImport: true});
  api.addFiles('aleut.base.page/_base.page.scss', 'client', {isImport: true});

  // OBJECTS
  api.addFiles('aleut.objects.block/_objects.block.scss', 'client', {isImport: true});
  api.addFiles('aleut.objects.box/_objects.box.scss', 'client', {isImport: true});
  api.addFiles('aleut.objects.buttons/_objects.buttons.scss', 'client', {isImport: true});
  api.addFiles('aleut.objects.flag/_objects.flag.scss', 'client', {isImport: true});
  api.addFiles('aleut.objects.layout/_objects.layout.scss', 'client', {isImport: true});
  api.addFiles('aleut.objects.list-bare/_objects.list-bare.scss', 'client', {isImport: true});
  api.addFiles('aleut.objects.list-block/_objects.list-block.scss', 'client', {isImport: true});
  api.addFiles('aleut.objects.list-inline/_objects.list-inline.scss', 'client', {isImport: true});
  api.addFiles('aleut.objects.list-ui/_objects.list-ui.scss', 'client', {isImport: true});
  api.addFiles('aleut.objects.media/_objects.media.scss', 'client', {isImport: true});
  api.addFiles('aleut.objects.pack/_objects.pack.scss', 'client', {isImport: true});
  api.addFiles('aleut.objects.tables/_objects.tables.scss', 'client', {isImport: true});
  api.addFiles('aleut.objects.tabs/_objects.tabs.scss', 'client', {isImport: true});

  // UTILITIES
  api.addFiles('aleut.utilities.clearfix/_utilities.clearfix.scss', 'client', {isImport: true});
  api.addFiles('aleut.utilities.headings/_utilities.headings.scss', 'client', {isImport: true});
  api.addFiles('aleut.utilities.print/_utilities.print.scss', 'client', {isImport: true});
  api.addFiles('aleut.utilities.spacing/_utilities.spacing.scss', 'client', {isImport: true});
  api.addFiles('aleut.utilities.spacing-responsive/_utilities.spacing-responsive.scss', 'client', {isImport: true});
  api.addFiles('aleut.utilities.widths/_utilities.widths.scss', 'client', {isImport: true});
  api.addFiles('aleut.utilities.widths-responsive/_utilities.widths-responsive.scss', 'client', {isImport: true});

});
