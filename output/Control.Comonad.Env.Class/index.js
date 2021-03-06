// Generated by psc version 0.9.1
"use strict";
var Control_Comonad = require("../Control.Comonad");
var Control_Comonad_Env_Trans = require("../Control.Comonad.Env.Trans");
var Data_Tuple = require("../Data.Tuple");
var ComonadEnv = function (__superclass_Control$dotComonad$dotComonad_0, ask, local) {
    this["__superclass_Control.Comonad.Comonad_0"] = __superclass_Control$dotComonad$dotComonad_0;
    this.ask = ask;
    this.local = local;
};
var local = function (dict) {
    return dict.local;
};
var comonadEnvTuple = new ComonadEnv(function () {
    return Data_Tuple.comonadTuple;
}, Data_Tuple.fst, function (f) {
    return function (v) {
        return new Data_Tuple.Tuple(f(v.value0), v.value1);
    };
});
var comonadEnvEnvT = function (dictComonad) {
    return new ComonadEnv(function () {
        return Control_Comonad_Env_Trans.comonadEnvT(dictComonad);
    }, function (v) {
        return Data_Tuple.fst(v);
    }, function (f) {
        return function (v) {
            return new Data_Tuple.Tuple(f(v.value0), v.value1);
        };
    });
};
var ask = function (dict) {
    return dict.ask;
};
var asks = function (dictComonadEnv) {
    return function (f) {
        return function (x) {
            return f(ask(dictComonadEnv)(x));
        };
    };
};
module.exports = {
    ComonadEnv: ComonadEnv, 
    ask: ask, 
    asks: asks, 
    local: local, 
    comonadEnvTuple: comonadEnvTuple, 
    comonadEnvEnvT: comonadEnvEnvT
};
