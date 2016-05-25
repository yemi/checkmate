// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Data_Maybe = require("../Data.Maybe");
var Data_Foreign = require("../Data.Foreign");
var Data_Either = require("../Data.Either");
var NullOrUndefined = function (x) {
    return x;
};
var runNullOrUndefined = function (v) {
    return v;
};
var readNullOrUndefined = function (v) {
    return function (value) {
        if (Data_Foreign.isNull(value) || Data_Foreign.isUndefined(value)) {
            return Prelude.pure(Data_Either.applicativeEither)(Data_Maybe.Nothing.value);
        };
        return Prelude["<$>"](Data_Either.functorEither)(function ($5) {
            return NullOrUndefined(Data_Maybe.Just.create($5));
        })(v(value));
    };
};
module.exports = {
    NullOrUndefined: NullOrUndefined, 
    readNullOrUndefined: readNullOrUndefined, 
    runNullOrUndefined: runNullOrUndefined
};
