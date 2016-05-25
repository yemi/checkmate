// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var SelectionMode = function (x) {
    return x;
};
var start = "start";
var showSelectionMode = new Prelude.Show(function (v) {
    return "(SelectionMode " + (Prelude.show(Prelude.showString)(v) + ")");
});
var select = "select";
var runSelectionMode = function (v) {
    return v;
};
var preserve = "preserve";
var eqSelectionMode = new Prelude.Eq(function (v) {
    return function (v1) {
        return v === v1;
    };
});
var ordSelectionMode = new Prelude.Ord(function () {
    return eqSelectionMode;
}, function (v) {
    return function (v1) {
        return Prelude.compare(Prelude.ordString)(v)(v1);
    };
});
var end = "end";
module.exports = {
    preserve: preserve, 
    end: end, 
    start: start, 
    select: select, 
    runSelectionMode: runSelectionMode, 
    eqSelectionMode: eqSelectionMode, 
    ordSelectionMode: ordSelectionMode, 
    showSelectionMode: showSelectionMode
};