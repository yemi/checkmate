// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var ResponseHeader = (function () {
    function ResponseHeader(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    ResponseHeader.create = function (value0) {
        return function (value1) {
            return new ResponseHeader(value0, value1);
        };
    };
    return ResponseHeader;
})();
var showResponseHeader = new Prelude.Show(function (v) {
    return "(ResponseHeader " + (Prelude.show(Prelude.showString)(v.value0) + (" " + (Prelude.show(Prelude.showString)(v.value1) + ")")));
});
var responseHeaderValue = function (v) {
    return v.value1;
};
var responseHeaderName = function (v) {
    return v.value0;
};
var responseHeader = function (field) {
    return function (value) {
        return new ResponseHeader(field, value);
    };
};
var eqResponseHeader = new Prelude.Eq(function (v) {
    return function (v1) {
        return v.value0 === v1.value0 && v.value1 === v1.value1;
    };
});
module.exports = {
    responseHeaderValue: responseHeaderValue, 
    responseHeaderName: responseHeaderName, 
    responseHeader: responseHeader, 
    eqResponseHeader: eqResponseHeader, 
    showResponseHeader: showResponseHeader
};
