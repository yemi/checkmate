// Generated by psc version 0.8.5.0
"use strict";
var $foreign = require("./foreign");
var Prelude = require("../Prelude");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_Enum = require("../Data.Enum");
var Data_Maybe_Unsafe = require("../Data.Maybe.Unsafe");
var DOM = require("../DOM");
var DOM_HTML_HTMLTrackElement_ReadyState = require("../DOM.HTML.HTMLTrackElement.ReadyState");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var readyState = function ($0) {
    return Prelude.map(Control_Monad_Eff.functorEff)(function ($1) {
        return Data_Maybe_Unsafe.fromJust(Data_Enum.toEnum(DOM_HTML_HTMLTrackElement_ReadyState.enumReadyState)($1));
    })($foreign.readyStateIndex($0));
};
module.exports = {
    readyState: readyState, 
    readyStateIndex: $foreign.readyStateIndex, 
    setDefault: $foreign.setDefault, 
    "default": $foreign["default"], 
    setLabel: $foreign.setLabel, 
    label: $foreign.label, 
    setSrclang: $foreign.setSrclang, 
    srclang: $foreign.srclang, 
    setSrc: $foreign.setSrc, 
    src: $foreign.src, 
    setKind: $foreign.setKind, 
    kind: $foreign.kind
};
