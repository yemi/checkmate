// Generated by psc version 0.8.5.0
"use strict";
var $foreign = require("./foreign");
var Prelude = require("../Prelude");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_Monoid = require("../Data.Monoid");
var Data_Maybe = require("../Data.Maybe");
var Data_Nullable = require("../Data.Nullable");
var Data_Function = require("../Data.Function");
var DOM = require("../DOM");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var Halogen_Component_Tree = require("../Halogen.Component.Tree");
var semigroupProps = new Prelude.Semigroup(Data_Function.runFn2($foreign.concatProps));
var refProp = $foreign.refPropImpl(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
var monoidProps = new Data_Monoid.Monoid(function () {
    return semigroupProps;
}, $foreign.emptyProps);
module.exports = {
    refProp: refProp, 
    semigroupProps: semigroupProps, 
    monoidProps: monoidProps, 
    vnode: $foreign.vnode, 
    vtext: $foreign.vtext, 
    patch: $foreign.patch, 
    diff: $foreign.diff, 
    createElement: $foreign.createElement, 
    widget: $foreign.widget, 
    handlerProp: $foreign.handlerProp, 
    attr: $foreign.attr, 
    prop: $foreign.prop
};
