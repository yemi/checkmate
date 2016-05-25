// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Data_Either = require("../Data.Either");
var Data_Foreign = require("../Data.Foreign");
var Data_Foreign_Class = require("../Data.Foreign.Class");
var Data_Maybe = require("../Data.Maybe");
var Halogen_HTML_Core = require("../Halogen.HTML.Core");
var Halogen_HTML_Events_Handler = require("../Halogen.HTML.Events.Handler");
var Data_Foreign_Index = require("../Data.Foreign.Index");
var addForeignPropHandler = function (dictIsForeign) {
    return function (key) {
        return function (prop) {
            return function (f) {
                return Halogen_HTML_Core.handler(Halogen_HTML_Core.eventName(key))(function ($2) {
                    return Data_Either.either(Prelude["const"](Prelude.pure(Halogen_HTML_Events_Handler.applicativeEventHandler)(Data_Maybe.Nothing.value)))(f)(Data_Foreign_Class.readProp(dictIsForeign)(Data_Foreign_Index.indexString)(prop)(Data_Foreign.toForeign((function (v) {
                        return v.target;
                    })($2))));
                });
            };
        };
    };
};
var onChecked = addForeignPropHandler(Data_Foreign_Class.booleanIsForeign)("change")("checked");
var onSelectedIndexChange = addForeignPropHandler(Data_Foreign_Class.intIsForeign)("change")("selectedIndex");
var onValueChange = addForeignPropHandler(Data_Foreign_Class.stringIsForeign)("change")("value");
var onValueInput = addForeignPropHandler(Data_Foreign_Class.stringIsForeign)("input")("value");
module.exports = {
    onChecked: onChecked, 
    onValueInput: onValueInput, 
    onSelectedIndexChange: onSelectedIndexChange, 
    onValueChange: onValueChange
};
