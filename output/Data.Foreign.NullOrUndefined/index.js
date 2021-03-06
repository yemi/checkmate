// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Data_Maybe = require("../Data.Maybe");
var Data_Foreign = require("../Data.Foreign");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Control_Applicative = require("../Control.Applicative");
var Data_Either = require("../Data.Either");
var Data_Functor = require("../Data.Functor");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var NullOrUndefined = function (x) {
    return x;
};
var unNullOrUndefined = function (v) {
    return v;
};
var readNullOrUndefined = function (v) {
    return function (value) {
        if (Data_Foreign.isNull(value) || Data_Foreign.isUndefined(value)) {
            return Control_Applicative.pure(Data_Either.applicativeEither)(Data_Maybe.Nothing.value);
        };
        return Data_Functor.map(Data_Either.functorEither)(function ($5) {
            return NullOrUndefined(Data_Maybe.Just.create($5));
        })(v(value));
    };
};
module.exports = {
    NullOrUndefined: NullOrUndefined, 
    readNullOrUndefined: readNullOrUndefined, 
    unNullOrUndefined: unNullOrUndefined
};
