// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Control_Comonad_Traced_Trans = require("../Control.Comonad.Traced.Trans");
var Data_Identity = require("../Data.Identity");
var traced = function ($0) {
    return Control_Comonad_Traced_Trans.TracedT(Data_Identity.Identity($0));
};
var runTraced = function ($1) {
    return Data_Identity.runIdentity(Control_Comonad_Traced_Trans.runTracedT($1));
};
module.exports = {
    traced: traced, 
    runTraced: runTraced
};