// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Data_Either = require("../Data.Either");
var Data_Profunctor = require("../Data.Profunctor");
var Cochoice = function (__superclass_Data$dotProfunctor$dotProfunctor_0, unleft, unright) {
    this["__superclass_Data.Profunctor.Profunctor_0"] = __superclass_Data$dotProfunctor$dotProfunctor_0;
    this.unleft = unleft;
    this.unright = unright;
};
var unright = function (dict) {
    return dict.unright;
};
var unleft = function (dict) {
    return dict.unleft;
};
module.exports = {
    Cochoice: Cochoice, 
    unright: unright, 
    unleft: unleft
};
