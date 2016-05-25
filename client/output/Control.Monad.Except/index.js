// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans");
var Data_Either = require("../Data.Either");
var Data_Identity = require("../Data.Identity");
var withExcept = Control_Monad_Except_Trans.withExceptT(Data_Identity.functorIdentity);
var runExcept = function ($0) {
    return Data_Identity.runIdentity(Control_Monad_Except_Trans.runExceptT($0));
};
var mapExcept = function (f) {
    return Control_Monad_Except_Trans.mapExceptT(function ($1) {
        return Data_Identity.Identity(f(Data_Identity.runIdentity($1)));
    });
};
var except = function ($2) {
    return Control_Monad_Except_Trans.ExceptT(Data_Identity.Identity($2));
};
module.exports = {
    withExcept: withExcept, 
    mapExcept: mapExcept, 
    runExcept: runExcept, 
    except: except
};
