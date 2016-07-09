// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Halogen_Component = require("../Halogen.Component");
var Halogen_Component_ChildPath = require("../Halogen.Component.ChildPath");
var Halogen_HTML_Core = require("../Halogen.HTML.Core");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements");
var Data_Functor = require("../Data.Functor");
var text = Halogen_HTML_Core.Text.create;
var slot$prime = function (dictFunctor) {
    return function (i) {
        return function (p) {
            return function (l) {
                var transform = function (def) {
                    return {
                        component: Halogen_Component.transformChild(dictFunctor)(i)(def.component), 
                        initialState: Halogen_Component_ChildPath.injState(i)(def.initialState)
                    };
                };
                return new Halogen_HTML_Core.Slot(new Halogen_Component.SlotConstructor(Halogen_Component_ChildPath.injSlot(i)(p), Data_Functor.map(Data_Functor.functorFn)(transform)(l)));
            };
        };
    };
};
var slot = function (p) {
    return function (l) {
        return new Halogen_HTML_Core.Slot(new Halogen_Component.SlotConstructor(p, l));
    };
};
module.exports = {
    slot: slot, 
    "slot'": slot$prime, 
    text: text
};
