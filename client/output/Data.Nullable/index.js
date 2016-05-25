// Generated by psc version 0.8.5.0
"use strict";
var $foreign = require("./foreign");
var Prelude = require("../Prelude");
var Data_Maybe = require("../Data.Maybe");
var Data_Function = require("../Data.Function");
var toNullable = Data_Maybe.maybe($foreign["null"])($foreign.notNull);
var toMaybe = function (n) {
    return $foreign.nullable(n, Data_Maybe.Nothing.value, Data_Maybe.Just.create);
};
var showNullable = function (dictShow) {
    return new Prelude.Show(function (n) {
        var $3 = toMaybe(n);
        if ($3 instanceof Data_Maybe.Nothing) {
            return "null";
        };
        if ($3 instanceof Data_Maybe.Just) {
            return Prelude.show(dictShow)($3.value0);
        };
        throw new Error("Failed pattern match at Data.Nullable line 38, column 12 - line 42, column 1: " + [ $3.constructor.name ]);
    });
};
var eqNullable = function (dictEq) {
    return new Prelude.Eq(Data_Function.on(Prelude.eq(Data_Maybe.eqMaybe(dictEq)))(toMaybe));
};
var ordNullable = function (dictOrd) {
    return new Prelude.Ord(function () {
        return eqNullable(dictOrd["__superclass_Prelude.Eq_0"]());
    }, Data_Function.on(Prelude.compare(Data_Maybe.ordMaybe(dictOrd)))(toMaybe));
};
module.exports = {
    toNullable: toNullable, 
    toMaybe: toMaybe, 
    showNullable: showNullable, 
    eqNullable: eqNullable, 
    ordNullable: ordNullable
};
