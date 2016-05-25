// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var CanPlayType = function (x) {
    return x;
};
var unspecified = "";
var showCanPlayType = new Prelude.Show(function (v) {
    return "(CanPlayType " + (Prelude.show(Prelude.showString)(v) + ")");
});
var runCanPlayType = function (v) {
    return v;
};
var probably = "probably";
var maybe = "maybe";
var eqCanPlayType = new Prelude.Eq(function (v) {
    return function (v1) {
        return v === v1;
    };
});
var ordCanPlayType = new Prelude.Ord(function () {
    return eqCanPlayType;
}, function (v) {
    return function (v1) {
        return Prelude.compare(Prelude.ordString)(v)(v1);
    };
});
module.exports = {
    probably: probably, 
    maybe: maybe, 
    unspecified: unspecified, 
    runCanPlayType: runCanPlayType, 
    eqCanPlayType: eqCanPlayType, 
    ordCanPlayType: ordCanPlayType, 
    showCanPlayType: showCanPlayType
};