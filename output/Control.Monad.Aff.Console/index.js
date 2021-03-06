// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var logShow = function (dictShow) {
    return function ($1) {
        return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Console.logShow(dictShow)($1));
    };
};
var log = function ($2) {
    return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Console.log($2));
};
module.exports = {
    log: log, 
    logShow: logShow
};
