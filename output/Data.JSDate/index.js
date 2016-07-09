// Generated by psc version 0.9.1
"use strict";
var $foreign = require("./foreign");
var Prelude = require("../Prelude");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Data_Date = require("../Data.Date");
var Data_DateTime_1 = require("../Data.DateTime");
var Data_DateTime_1 = require("../Data.DateTime");
var Data_DateTime_Instant_1 = require("../Data.DateTime.Instant");
var Data_DateTime_Instant_1 = require("../Data.DateTime.Instant");
var Data_Enum = require("../Data.Enum");
var Data_Function_Uncurried = require("../Data.Function.Uncurried");
var Data_Int = require("../Data.Int");
var Data_Maybe = require("../Data.Maybe");
var Data_Time = require("../Data.Time");
var Data_Time_Duration = require("../Data.Time.Duration");
var Control_Bind = require("../Control.Bind");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Functor = require("../Data.Functor");
var Data_Date_Component = require("../Data.Date.Component");
var Data_Ring = require("../Data.Ring");
var Data_Time_Component = require("../Data.Time.Component");
var toUTCString = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("toUTCString")(dt);
};
var toTimeString = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("toTimeString")(dt);
};
var toString = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("toString")(dt);
};
var toInstant = Control_Bind.composeKleisliFlipped(Data_Maybe.bindMaybe)(function ($4) {
    return Data_DateTime_Instant_1.instant(Data_Time_Duration.Milliseconds($4));
})($foreign.toInstantImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value));
var toISOString = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethodEff)("toISOString")(dt);
};
var toDateTime = Data_Functor.map(Data_Functor.functorFn)(Data_Functor.map(Data_Maybe.functorMaybe)(Data_DateTime_Instant_1.toDateTime))(toInstant);
var toDateString = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("toDateString")(dt);
};
var toDate = Data_Functor.map(Data_Functor.functorFn)(Data_Functor.map(Data_Maybe.functorMaybe)(Data_DateTime_1.date))(toDateTime);
var getUTCSeconds = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("getUTCSeconds")(dt);
};
var getUTCMonth = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("getUTCMonth")(dt);
};
var getUTCMinutes = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("getUTCMinutes")(dt);
};
var getUTCMilliseconds = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("getUTCMilliseconds")(dt);
};
var getUTCHours = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("getUTCHours")(dt);
};
var getUTCFullYear = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("getUTCFullYear")(dt);
};
var getUTCDay = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("getUTCDay")(dt);
};
var getUTCDate = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("getUTCDate")(dt);
};
var getTimezoneOffset = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethodEff)("getTimezoneOffset")(dt);
};
var getTime = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethod)("getTime")(dt);
};
var getSeconds = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethodEff)("getSeconds")(dt);
};
var getMonth = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethodEff)("getMonth")(dt);
};
var getMinutes = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethodEff)("getMinutes")(dt);
};
var getMilliseconds = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethodEff)("getMilliseconds")(dt);
};
var getHours = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethodEff)("getHours")(dt);
};
var getFullYear = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethodEff)("getFullYear")(dt);
};
var getDay = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethodEff)("getDay")(dt);
};
var getDate = function (dt) {
    return Data_Function_Uncurried.runFn2($foreign.dateMethodEff)("getDate")(dt);
};
var fromDateTime = function (v) {
    return $foreign.jsdate({
        year: Data_Int.toNumber(Data_Enum.fromEnum(Data_Date_Component.boundedEnumYear)(Data_Date.year(v.value0))), 
        month: Data_Int.toNumber(Data_Enum.fromEnum(Data_Date_Component.boundedEnumMonth)(Data_Date.month(v.value0)) - 1), 
        day: Data_Int.toNumber(Data_Enum.fromEnum(Data_Date_Component.boundedEnumDay)(Data_Date.day(v.value0))), 
        hour: Data_Int.toNumber(Data_Enum.fromEnum(Data_Time_Component.boundedEnumHour)(Data_Time.hour(v.value1))), 
        minute: Data_Int.toNumber(Data_Enum.fromEnum(Data_Time_Component.boundedEnumMinute)(Data_Time.minute(v.value1))), 
        second: Data_Int.toNumber(Data_Enum.fromEnum(Data_Time_Component.boundedEnumSecond)(Data_Time.second(v.value1))), 
        millisecond: Data_Int.toNumber(Data_Enum.fromEnum(Data_Time_Component.boundedEnumMillisecond)(Data_Time.millisecond(v.value1)))
    });
};
module.exports = {
    fromDateTime: fromDateTime, 
    getDate: getDate, 
    getDay: getDay, 
    getFullYear: getFullYear, 
    getHours: getHours, 
    getMilliseconds: getMilliseconds, 
    getMinutes: getMinutes, 
    getMonth: getMonth, 
    getSeconds: getSeconds, 
    getTime: getTime, 
    getTimezoneOffset: getTimezoneOffset, 
    getUTCDate: getUTCDate, 
    getUTCDay: getUTCDay, 
    getUTCFullYear: getUTCFullYear, 
    getUTCHours: getUTCHours, 
    getUTCMilliseconds: getUTCMilliseconds, 
    getUTCMinutes: getUTCMinutes, 
    getUTCMonth: getUTCMonth, 
    getUTCSeconds: getUTCSeconds, 
    toDate: toDate, 
    toDateString: toDateString, 
    toDateTime: toDateTime, 
    toISOString: toISOString, 
    toInstant: toInstant, 
    toString: toString, 
    toTimeString: toTimeString, 
    toUTCString: toUTCString, 
    dateMethod: $foreign.dateMethod, 
    dateMethodEff: $foreign.dateMethodEff, 
    isValid: $foreign.isValid, 
    jsdate: $foreign.jsdate, 
    jsdateLocal: $foreign.jsdateLocal, 
    toInstantImpl: $foreign.toInstantImpl
};
