// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Control_Plus = require("../Control.Plus");
var Alternative = function (__superclass_Control$dotPlus$dotPlus_1, __superclass_Prelude$dotApplicative_0) {
    this["__superclass_Control.Plus.Plus_1"] = __superclass_Control$dotPlus$dotPlus_1;
    this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
};
var alternativeArray = new Alternative(function () {
    return Control_Plus.plusArray;
}, function () {
    return Prelude.applicativeArray;
});
module.exports = {
    Alternative: Alternative, 
    alternativeArray: alternativeArray
};
