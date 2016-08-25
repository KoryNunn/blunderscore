# Blunderscore

Replaces underscore (or lodash) with a much lighter dependency.

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