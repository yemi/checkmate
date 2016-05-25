// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Control_Comonad = require("../Control.Comonad");
var Control_Comonad_Trans = require("../Control.Comonad.Trans");
var Control_Extend = require("../Control.Extend");
var Data_Tuple = require("../Data.Tuple");
var StoreT = function (x) {
    return x;
};
var runStoreT = function (v) {
    return v;
};
var functorStoreT = function (dictFunctor) {
    return new Prelude.Functor(function (f) {
        return function (v) {
            return StoreT(new Data_Tuple.Tuple(Prelude["<$>"](dictFunctor)(function (h) {
                return function ($24) {
                    return f(h($24));
                };
            })(v.value0), v.value1));
        };
    });
};
var extendStoreT = function (dictExtend) {
    return new Control_Extend.Extend(function () {
        return functorStoreT(dictExtend["__superclass_Prelude.Functor_0"]());
    }, function (f) {
        return function (v) {
            return StoreT(new Data_Tuple.Tuple(Control_Extend["<<="](dictExtend)(function (w$prime) {
                return function (s$prime) {
                    return f(StoreT(new Data_Tuple.Tuple(w$prime, s$prime)));
                };
            })(v.value0), v.value1));
        };
    });
};
var comonadTransStoreT = new Control_Comonad_Trans.ComonadTrans(function (dictComonad) {
    return function (v) {
        return Prelude["<$>"]((dictComonad["__superclass_Control.Extend.Extend_0"]())["__superclass_Prelude.Functor_0"]())(function (f) {
            return f(v.value1);
        })(v.value0);
    };
});
var comonadStoreT = function (dictComonad) {
    return new Control_Comonad.Comonad(function () {
        return extendStoreT(dictComonad["__superclass_Control.Extend.Extend_0"]());
    }, function (v) {
        return Control_Comonad.extract(dictComonad)(v.value0)(v.value1);
    });
};
module.exports = {
    StoreT: StoreT, 
    runStoreT: runStoreT, 
    functorStoreT: functorStoreT, 
    extendStoreT: extendStoreT, 
    comonadStoreT: comonadStoreT, 
    comonadTransStoreT: comonadTransStoreT
};
