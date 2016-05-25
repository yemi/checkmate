// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Control_Monad_Free = require("../Control.Monad.Free");
var Data_Lazy = require("../Data.Lazy");
var suspend = Control_Monad_Free.suspendF(Data_Lazy.applicativeLazy);
var runTrampoline = Control_Monad_Free.runFree(Data_Lazy.functorLazy)(Data_Lazy.force);
var done = Prelude.pure(Control_Monad_Free.freeApplicative);
var delay$prime = Control_Monad_Free.liftF;
var delay = function ($0) {
    return delay$prime(Data_Lazy.defer($0));
};
module.exports = {
    runTrampoline: runTrampoline, 
    delay: delay, 
    "delay'": delay$prime, 
    suspend: suspend, 
    done: done
};