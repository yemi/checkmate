// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Data_Generic = require("../Data.Generic");
var CSS_Property = require("../CSS.Property");
var CSS_String = require("../CSS.String");
var CSS_Stylesheet = require("../CSS.Stylesheet");
var Data_Eq = require("../Data.Eq");
var Data_Ord = require("../Data.Ord");
var Control_Apply = require("../Control.Apply");
var Data_Maybe = require("../Data.Maybe");
var Data_Unit = require("../Data.Unit");
var Data_Function = require("../Data.Function");
var TextDecoration = function (x) {
    return x;
};
var valTextDecoration = new CSS_Property.Val(function (v) {
    return v;
});
var underline = Data_Function.apply(TextDecoration)(CSS_String.fromString(CSS_Property.isStringValue)("underline"));
var textDecoration = Data_Function.apply(CSS_Stylesheet.key(valTextDecoration))(CSS_String.fromString(CSS_Property.isStringKey)("text-decoration"));
var overline = Data_Function.apply(TextDecoration)(CSS_String.fromString(CSS_Property.isStringValue)("overline"));
var noneTextDecoration = Data_Function.apply(TextDecoration)(CSS_String.fromString(CSS_Property.isStringValue)("none"));
var lineThrough = Data_Function.apply(TextDecoration)(CSS_String.fromString(CSS_Property.isStringValue)("line-through"));
var genericTextDecoration = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Text.TextDecoration" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(TextDecoration))(Data_Generic.fromSpine(CSS_Property.genericValue)(v.value1[0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Text.TextDecoration", [ {
        sigConstructor: "CSS.Text.TextDecoration", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Text.TextDecoration", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var eqTextDecoration = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordTextDecoration = new Data_Ord.Ord(function () {
    return eqTextDecoration;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var blink = Data_Function.apply(TextDecoration)(CSS_String.fromString(CSS_Property.isStringValue)("blink"));
module.exports = {
    TextDecoration: TextDecoration, 
    blink: blink, 
    lineThrough: lineThrough, 
    noneTextDecoration: noneTextDecoration, 
    overline: overline, 
    textDecoration: textDecoration, 
    underline: underline, 
    eqTextDecoration: eqTextDecoration, 
    ordTextDecoration: ordTextDecoration, 
    genericTextDecoration: genericTextDecoration, 
    valTextDecoration: valTextDecoration
};
