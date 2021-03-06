// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Data_Either = require("../Data.Either");
var Control_Coroutine = require("../Control.Coroutine");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Aff_AVar = require("../Control.Monad.Aff.AVar");
var Control_Monad_Aff_Class = require("../Control.Monad.Aff.Class");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Free_Trans = require("../Control.Monad.Free.Trans");
var Control_Monad_Trans = require("../Control.Monad.Trans");
var Control_Bind = require("../Control.Bind");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Functor = require("../Data.Functor");
var Data_Function = require("../Data.Function");
var Control_Applicative = require("../Control.Applicative");
var Data_Unit = require("../Data.Unit");
var produceAff = function (recv) {
    return Control_Bind.bind(Control_Monad_Free_Trans.bindFreeT(Control_Coroutine.functorEmit)(Control_Monad_Aff.monadAff))(Control_Monad_Trans.lift(Control_Monad_Free_Trans.monadTransFreeT(Control_Coroutine.functorEmit))(Control_Monad_Aff.monadAff)(Control_Monad_Aff_AVar.makeVar))(function (v) {
        return Control_Bind.bind(Control_Monad_Free_Trans.bindFreeT(Control_Coroutine.functorEmit)(Control_Monad_Aff.monadAff))(Control_Monad_Trans.lift(Control_Monad_Free_Trans.monadTransFreeT(Control_Coroutine.functorEmit))(Control_Monad_Aff.monadAff)(Control_Monad_Aff.forkAff(recv(Control_Monad_Aff_AVar.putVar(v)))))(function () {
            return Control_Coroutine.producer(Control_Monad_Aff.monadAff)(Control_Monad_Aff_AVar.takeVar(v));
        });
    });
};
var produce = function (recv) {
    return produceAff(function (send) {
        return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(recv(function ($3) {
            return Data_Functor["void"](Control_Monad_Eff.functorEff)(Control_Monad_Aff.runAff(Data_Function["const"](Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit)))(Control_Applicative.pure(Control_Monad_Eff.applicativeEff))(send($3)));
        }));
    });
};
var produce$prime = function (dictMonadAff) {
    return function ($4) {
        return Control_Monad_Free_Trans.hoistFreeT(Control_Coroutine.functorEmit)(((((dictMonadAff["__superclass_Control.Monad.Eff.Class.MonadEff_0"]())["__superclass_Control.Monad.Monad_0"]())["__superclass_Control.Bind.Bind_1"]())["__superclass_Control.Apply.Apply_0"]())["__superclass_Data.Functor.Functor_0"]())(Control_Monad_Aff_Class.liftAff(dictMonadAff))(produce($4));
    };
};
module.exports = {
    produce: produce, 
    "produce'": produce$prime, 
    produceAff: produceAff
};
