# Blunderscore

Underscore/lodash but with literally no bloat.

## Usage

`npm i --save blunderscore`

This both installs blunderscore, and uninstalls underscore and lodash. handy!

To use in JS:

``` javascript
var _ = require('blunderscore'),
    items = [1, 2, 3];

_.forEach(items, function(){
    // why would you not just use Array.forEach but anyway..)
});
```

The above `throws` try https://npmsearch.com/?q=forEach instead.

## Why?

Almost every module that depends on `lodash` uses around 4 methods from it.
This module can help those developers who are keen to not install 14 petabytes of
unused code.
