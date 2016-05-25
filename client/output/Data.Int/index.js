// Generated by psc version 0.8.5.0
"use strict";
var $foreign = require("./foreign");
var Prelude = require("../Prelude");
var Data_Int_Bits = require("../Data.Int.Bits");
var Data_Maybe = require("../Data.Maybe");
var Data_Maybe_Unsafe = require("../Data.Maybe.Unsafe");
var $$Math = require("../Math");
var odd = function (x) {
    return (x & 1) !== 0;
};
var fromString = $foreign.fromStringImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var fromNumber = $foreign.fromNumberImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var unsafeClamp = function (x) {
    if (x >= $foreign.toNumber(Prelude.top(Prelude.boundedInt))) {
        return Prelude.top(Prelude.boundedInt);
    };
    if (x <= $foreign.toNumber(Prelude.bottom(Prelude.boundedInt))) {
        return Prelude.bottom(Prelude.boundedInt);
    };
    if (Prelude.otherwise) {
        return Data_Maybe_Unsafe.fromJust(fromNumber(x));
    };
    throw new Error("Failed pattern match at Data.Int line 49, column 1 - line 56, column 1: " + [ x.constructor.name ]);
};
var round = function ($1) {
    return unsafeClamp($$Math.round($1));
};
var floor = function ($2) {
    return unsafeClamp($$Math.floor($2));
};
var even = function (x) {
    return (x & 1) === 0;
};
var ceil = function ($3) {
    return unsafeClamp($$Math.ceil($3));
};
module.exports = {
    odd: odd, 
    even: even, 
    fromString: fromString, 
    round: round, 
    floor: floor, 
    ceil: ceil, 
    fromNumber: fromNumber, 
    toNumber: $foreign.toNumber
};
