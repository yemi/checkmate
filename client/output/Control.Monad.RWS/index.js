// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Control_Monad_RWS_Class = require("../Control.Monad.RWS.Class");
var Control_Monad_RWS_Trans = require("../Control.Monad.RWS.Trans");
var Data_Identity = require("../Data.Identity");
var Data_Tuple = require("../Data.Tuple");
var withRWS = Control_Monad_RWS_Trans.withRWST;
var rws = function (f) {
    return function (r) {
        return function (s) {
            return Prelude["return"](Data_Identity.applicativeIdentity)(f(r)(s));
        };
    };
};
var runRWS = function (m) {
    return function (r) {
        return function (s) {
            return Data_Identity.runIdentity(Control_Monad_RWS_Trans.runRWST(m)(r)(s));
        };
    };
};
var mapRWS = function (f) {
    return Control_Monad_RWS_Trans.mapRWST(function ($0) {
        return Data_Identity.Identity(f(Data_Identity.runIdentity($0)));
    });
};
var execRWS = function (m) {
    return function (r) {
        return function (s) {
            return Data_Identity.runIdentity(Control_Monad_RWS_Trans.execRWST(Data_Identity.monadIdentity)(m)(r)(s));
        };
    };
};
var evalRWS = function (m) {
    return function (r) {
        return function (s) {
            return Data_Identity.runIdentity(Control_Monad_RWS_Trans.evalRWST(Data_Identity.monadIdentity)(m)(r)(s));
        };
    };
};
module.exports = {
    withRWS: withRWS, 
    mapRWS: mapRWS, 
    execRWS: execRWS, 
    evalRWS: evalRWS, 
    runRWS: runRWS, 
    rws: rws
};
