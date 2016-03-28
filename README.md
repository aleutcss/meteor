# Aleut.css

Aleut is a fork of inuitcss. It is a powerful, Sass-based, BEM, OOCSS framework designed with scalability and performance in mind.
The full documentation can be found [here](http://aleutcss.github.io/).

## Installation

Add this package and its dependency to your project:
```
meteor add tiush:aleutcss
meteor add fourseven:scss
```

Create a `main.scss` file, and import the starter kit:
```
@import "{tiush:aleutcss}/aleut.settings.defaults/settings.defaults";

@import "{tiush:aleutcss}/aleut.tools.functions/tools.functions";
@import "{tiush:aleutcss}/aleut.tools.mixins/tools.mixins";

@import "{tiush:aleutcss}/aleut.generic.normalize/generic.normalize";
@import "{tiush:aleutcss}/aleut.generic.box-sizing/generic.box-sizing";

@import "{tiush:aleutcss}/aleut.base.page/base.page";
```

Read the Aleut documentation, and then import any module you need.
