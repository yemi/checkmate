// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Control_Monad_Aff_Free = require("../Control.Monad.Aff.Free");
var Control_Monad_Free = require("../Control.Monad.Free");
var Halogen_Query_EventSource = require("../Halogen.Query.EventSource");
var Halogen_Query_HalogenF = require("../Halogen.Query.HalogenF");
var Halogen_Query_StateF = require("../Halogen.Query.StateF");
var Data_Unit = require("../Data.Unit");
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Function = require("../Data.Function");
var subscribe$prime = function (es) {
    return Control_Monad_Free.liftF(new Halogen_Query_HalogenF.SubscribeHF(Halogen_Query_EventSource.toParentEventSource(es), Data_Unit.unit));
};
var subscribe = function (es) {
    return Control_Monad_Free.liftF(new Halogen_Query_HalogenF.SubscribeHF(es, Data_Unit.unit));
};
var request = function (req) {
    return req(Control_Category.id(Control_Category.categoryFn));
};
var modify = function (f) {
    return Control_Monad_Free.liftF(new Halogen_Query_HalogenF.StateHF(new Halogen_Query_StateF.Modify(f, Data_Unit.unit)));
};
var set = function ($0) {
    return modify(Data_Function["const"]($0));
};
var liftH = function ($1) {
    return Control_Monad_Free.liftF(Halogen_Query_HalogenF.QueryHF.create($1));
};
var gets = function ($2) {
    return Control_Monad_Free.liftF(Halogen_Query_HalogenF.StateHF.create(Halogen_Query_StateF.Get.create($2)));
};
var get = gets(Control_Category.id(Control_Category.categoryFn));
var action = function (act) {
    return act(Data_Unit.unit);
};
module.exports = {
    action: action, 
    get: get, 
    gets: gets, 
    liftH: liftH, 
    modify: modify, 
    request: request, 
    set: set, 
    subscribe: subscribe, 
    "subscribe'": subscribe$prime
};
