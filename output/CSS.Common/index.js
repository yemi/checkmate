// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Data_Monoid = require("../Data.Monoid");
var Data_Tuple = require("../Data.Tuple");
var CSS_Property = require("../CSS.Property");
var CSS_String = require("../CSS.String");
var Control_Category = require("../Control.Category");
var Data_Semigroup = require("../Data.Semigroup");
var All = function (all) {
    this.all = all;
};
var Auto = function (auto) {
    this.auto = auto;
};
var Baseline = function (baseline) {
    this.baseline = baseline;
};
var Center = function (center) {
    this.center = center;
};
var Inherit = function (inherit) {
    this.inherit = inherit;
};
var None = function (none) {
    this.none = none;
};
var Normal = function (normal) {
    this.normal = normal;
};
var Visible = function (visible) {
    this.visible = visible;
};
var Hidden = function (hidden) {
    this.hidden = hidden;
};
var Initial = function (initial) {
    this.initial = initial;
};
var Unset = function (unset) {
    this.unset = unset;
};
var Other = function (other) {
    this.other = other;
};
var visibleValue = new Visible(CSS_String.fromString(CSS_Property.isStringValue)("visible"));
var visible = function (dict) {
    return dict.visible;
};
var unsetValue = new Unset(CSS_String.fromString(CSS_Property.isStringValue)("unset"));
var unset = function (dict) {
    return dict.unset;
};
var otherValue = new Other(Control_Category.id(Control_Category.categoryFn));
var other = function (dict) {
    return dict.other;
};
var normalValue = new Normal(CSS_String.fromString(CSS_Property.isStringValue)("normal"));
var normal = function (dict) {
    return dict.normal;
};
var noneValue = new None(CSS_String.fromString(CSS_Property.isStringValue)("none"));
var none = function (dict) {
    return dict.none;
};
var initialValue = new Initial(CSS_String.fromString(CSS_Property.isStringValue)("initial"));
var initial = function (dict) {
    return dict.initial;
};
var inheritValue = new Inherit(CSS_String.fromString(CSS_Property.isStringValue)("inherit"));
var inherit = function (dict) {
    return dict.inherit;
};
var hiddenValue = new Hidden(CSS_String.fromString(CSS_Property.isStringValue)("hidden"));
var hidden = function (dict) {
    return dict.hidden;
};
var centerValue = new Center(CSS_String.fromString(CSS_Property.isStringValue)("center"));
var center = function (dict) {
    return dict.center;
};
var call = function (dictIsString) {
    return function (dictMonoid) {
        return function (fn) {
            return function (arg) {
                return Data_Semigroup.append(dictMonoid["__superclass_Data.Semigroup.Semigroup_0"]())(fn)(Data_Semigroup.append(dictMonoid["__superclass_Data.Semigroup.Semigroup_0"]())(CSS_String.fromString(dictIsString)("("))(Data_Semigroup.append(dictMonoid["__superclass_Data.Semigroup.Semigroup_0"]())(arg)(CSS_String.fromString(dictIsString)(")"))));
            };
        };
    };
};
var browsers = new CSS_Property.Prefixed([ new Data_Tuple.Tuple("-webkit-", ""), new Data_Tuple.Tuple("-moz-", ""), new Data_Tuple.Tuple("-ms-", ""), new Data_Tuple.Tuple("-o-", ""), new Data_Tuple.Tuple("", "") ]);
var baselineValue = new Baseline(CSS_String.fromString(CSS_Property.isStringValue)("baseline"));
var baseline = function (dict) {
    return dict.baseline;
};
var autoValue = new Auto(CSS_String.fromString(CSS_Property.isStringValue)("auto"));
var auto = function (dict) {
    return dict.auto;
};
var allValue = new All(CSS_String.fromString(CSS_Property.isStringValue)("all"));
var all = function (dict) {
    return dict.all;
};
module.exports = {
    All: All, 
    Auto: Auto, 
    Baseline: Baseline, 
    Center: Center, 
    Hidden: Hidden, 
    Inherit: Inherit, 
    Initial: Initial, 
    None: None, 
    Normal: Normal, 
    Other: Other, 
    Unset: Unset, 
    Visible: Visible, 
    all: all, 
    auto: auto, 
    baseline: baseline, 
    browsers: browsers, 
    call: call, 
    center: center, 
    hidden: hidden, 
    inherit: inherit, 
    initial: initial, 
    none: none, 
    normal: normal, 
    other: other, 
    unset: unset, 
    visible: visible, 
    allValue: allValue, 
    autoValue: autoValue, 
    baselineValue: baselineValue, 
    centerValue: centerValue, 
    inheritValue: inheritValue, 
    normalValue: normalValue, 
    noneValue: noneValue, 
    visibleValue: visibleValue, 
    hiddenValue: hiddenValue, 
    otherValue: otherValue, 
    initialValue: initialValue, 
    unsetValue: unsetValue
};
