var methods = require('./methods');

var blunderscore = {};

methods.forEach(function(method){
    blunderscore[method] = function(){
        throw 'try https://npmsearch.com/?q=' + method + ' instead.';
    }
});

module.exports = blunderscore;