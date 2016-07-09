// Generated by psc version 0.9.1
"use strict";
var Data_Function = require("../Data.Function");
var Data_Functor_Contravariant = require("../Data.Functor.Contravariant");
var Data_Monoid = require("../Data.Monoid");
var Data_Ord = require("../Data.Ord");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Ordering = require("../Data.Ordering");
var Comparison = function (x) {
    return x;
};
var semigroupComparison = new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
        return Data_Semigroup.append(Data_Semigroup.semigroupFn(Data_Semigroup.semigroupFn(Data_Ordering.semigroupOrdering)))(v)(v1);
    };
});
var runComparison = function (v) {
    return v;
};
var monoidComparison = new Data_Monoid.Monoid(function () {
    return semigroupComparison;
}, function (v) {
    return function (v1) {
        return Data_Ordering.EQ.value;
    };
});
var defaultComparison = function (dictOrd) {
    return Data_Ord.compare(dictOrd);
};
var contravariantComparison = new Data_Functor_Contravariant.Contravariant(function (f) {
    return function (v) {
        return Data_Function.on(v)(f);
    };
});
module.exports = {
    Comparison: Comparison, 
    defaultComparison: defaultComparison, 
    runComparison: runComparison, 
    contravariantComparison: contravariantComparison, 
    semigroupComparison: semigroupComparison, 
    monoidComparison: monoidComparison
};