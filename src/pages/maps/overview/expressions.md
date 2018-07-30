---
title: "Expressions"
description: "The Mapbox Maps SDK for Android."
---

Similar to the rest of the Mapbox developer experience, expressions are all about fine grain control. Expressions enable you to dynamically style spatial data based on the data's properties. They offer you many flexible and powerful operations. You can style data with multiple feature properties at once, apply conditional logic, and manipulate data with arithmetic or string operations for a more sophisticated relationship between your data and how it is styled.

The value for any layout property, paint property, or filter may be specified as an expression. An expression defines a formula for computing the value of the property using the operators described below. 

The set of expression operators provided by Mapbox GL includes:

- Mathematical operators for performing arithmetic and other operations on numeric values
- Logical operators for manipulating boolean values and making conditional decisions
- String operators for manipulating strings
- Data operators, providing access to the properties of source features
- Camera operators, providing access to the parameters defining the current map view

Expressions are represented as JSON arrays. The first element of an expression array is a string naming the expression operator, e.g. "*" or "case". Subsequent elements (if any) are the arguments to the expression. Each argument is either a literal value (a string, number, boolean, or null), or another expression array.

## Popular expresions

You have many expressions to choose from. Especially if you're just beginning with expressions, you should become familiar with the following ones. You are likely to use these expressions for many of your data-driven styling goals:

- ​​get
- match
- switchCase
- equal
- ​​literal

## Learning resources 

The concept and specific syntax for using expressions can be difficult in the beginning. There are several Mapbox resources that can provide more guidance and examples for you to understand the concept of expressions.

**Javadocs** – [The `Expressions` Java class in the Mapbox Maps SDK for Android](https://github.com/mapbox/mapbox-gl-native/blob/master/platform/android/MapboxGLAndroidSDK/src/main/java/com/mapbox/mapboxsdk/style/expressions/Expression.java) offers explanations and code samples to explain how each expression method should be used.

**The Mapbox Android demo app** – [The app's data-driven styling folder](https://github.com/mapbox/mapbox-android-demo/tree/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/dds) has many examples that use expressions in various ways. Don't have the app? [Click here to download it](https://play.google.com/store/apps/details?id=com.mapbox.mapboxandroiddemo&hl=en).


**Introductory blog post** – [Read our blog post that was published to introduce expressions when they were first released](https://blog.mapbox.com/announcing-expressions-in-gl-js-a72b55d0a6af).


**Style specficiation** – Want the minute details about each and every expression? [The Mapbox Style Specification](https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions) has them.