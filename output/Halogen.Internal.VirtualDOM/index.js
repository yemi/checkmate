// Generated by psc version 0.9.1
"use strict";
var $foreign = require("./foreign");
var Prelude = require("../Prelude");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_Monoid = require("../Data.Monoid");
var Data_Maybe = require("../Data.Maybe");
var Data_Nullable = require("../Data.Nullable");
var Data_Function_Uncurried = require("../Data.Function.Uncurried");
var DOM = require("../DOM");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var Halogen_Component_Tree = require("../Halogen.Component.Tree");
var Data_Semigroup = require("../Data.Semigroup");
var semigroupProps = new Data_Semigroup.Semigroup(Data_Function_Uncurried.runFn2($foreign.concatProps));
var refProp = $foreign.refPropImpl(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
var monoidProps = new Data_Monoid.Monoid(function () {
    return semigroupProps;
}, $foreign.emptyProps);
module.exports = {
    refProp: refProp, 
    semigroupProps: semigroupProps, 
    monoidProps: monoidProps, 
    attr: $foreign.attr, 
    createElement: $foreign.createElement, 
    diff: $foreign.diff, 
    handlerProp: $foreign.handlerProp, 
    patch: $foreign.patch, 
    prop: $foreign.prop, 
    vnode: $foreign.vnode, 
    vtext: $foreign.vtext, 
    widget: $foreign.widget
};
