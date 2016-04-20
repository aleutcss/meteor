# Aleut.css

Aleut is a fork of inuitcss. It is a powerful, Sass-based, BEM, OOCSS framework designed with
scalability and performance in mind.
The full documentation can be found [here](http://aleutcss.github.io/).

This Meteor package lets you import the Aleut.css modules in your .scss files with the help of
the famous [fourseven:scss](https://atmospherejs.com/fourseven/scss) package.

## Installation

Add this package and its dependency to your Meteor project:

```
meteor add tiush:aleutcss
meteor add fourseven:scss
```

## Starter Kit

Create a `main.scss` file in your `client/` directory, and import the starter kit:

```
@import "{tiush:aleutcss}/aleut.settings.defaults/settings.defaults";

@import "{tiush:aleutcss}/aleut.tools.functions/tools.functions";
@import "{tiush:aleutcss}/aleut.tools.mixins/tools.mixins";

@import "{tiush:aleutcss}/aleut.generic.normalize/generic.normalize";
@import "{tiush:aleutcss}/aleut.generic.box-sizing/generic.box-sizing";

@import "{tiush:aleutcss}/aleut.base.page/base.page";
```

Read the [Aleut.css documentation](http://aleutcss.github.io/), and then import any module
you need.
