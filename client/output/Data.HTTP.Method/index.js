// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Data_Either = require("../Data.Either");
var Data_Generic = require("../Data.Generic");
var Data_String = require("../Data.String");
var Data_Maybe = require("../Data.Maybe");
var OPTIONS = (function () {
    function OPTIONS() {

    };
    OPTIONS.value = new OPTIONS();
    return OPTIONS;
})();
var GET = (function () {
    function GET() {

    };
    GET.value = new GET();
    return GET;
})();
var HEAD = (function () {
    function HEAD() {

    };
    HEAD.value = new HEAD();
    return HEAD;
})();
var POST = (function () {
    function POST() {

    };
    POST.value = new POST();
    return POST;
})();
var PUT = (function () {
    function PUT() {

    };
    PUT.value = new PUT();
    return PUT;
})();
var DELETE = (function () {
    function DELETE() {

    };
    DELETE.value = new DELETE();
    return DELETE;
})();
var TRACE = (function () {
    function TRACE() {

    };
    TRACE.value = new TRACE();
    return TRACE;
})();
var CONNECT = (function () {
    function CONNECT() {

    };
    CONNECT.value = new CONNECT();
    return CONNECT;
})();
var PROPFIND = (function () {
    function PROPFIND() {

    };
    PROPFIND.value = new PROPFIND();
    return PROPFIND;
})();
var PROPPATCH = (function () {
    function PROPPATCH() {

    };
    PROPPATCH.value = new PROPPATCH();
    return PROPPATCH;
})();
var MKCOL = (function () {
    function MKCOL() {

    };
    MKCOL.value = new MKCOL();
    return MKCOL;
})();
var COPY = (function () {
    function COPY() {

    };
    COPY.value = new COPY();
    return COPY;
})();
var MOVE = (function () {
    function MOVE() {

    };
    MOVE.value = new MOVE();
    return MOVE;
})();
var LOCK = (function () {
    function LOCK() {

    };
    LOCK.value = new LOCK();
    return LOCK;
})();
var UNLOCK = (function () {
    function UNLOCK() {

    };
    UNLOCK.value = new UNLOCK();
    return UNLOCK;
})();
var PATCH = (function () {
    function PATCH() {

    };
    PATCH.value = new PATCH();
    return PATCH;
})();
var CustomMethod = function (x) {
    return x;
};
var showMethod = new Prelude.Show(function (v) {
    if (v instanceof OPTIONS) {
        return "OPTIONS";
    };
    if (v instanceof GET) {
        return "GET";
    };
    if (v instanceof HEAD) {
        return "HEAD";
    };
    if (v instanceof POST) {
        return "POST";
    };
    if (v instanceof PUT) {
        return "PUT";
    };
    if (v instanceof DELETE) {
        return "DELETE";
    };
    if (v instanceof TRACE) {
        return "TRACE";
    };
    if (v instanceof CONNECT) {
        return "CONNECT";
    };
    if (v instanceof PROPFIND) {
        return "PROPFIND";
    };
    if (v instanceof PROPPATCH) {
        return "PROPPATCH";
    };
    if (v instanceof MKCOL) {
        return "MKCOL";
    };
    if (v instanceof COPY) {
        return "COPY";
    };
    if (v instanceof MOVE) {
        return "MOVE";
    };
    if (v instanceof LOCK) {
        return "LOCK";
    };
    if (v instanceof UNLOCK) {
        return "UNLOCK";
    };
    if (v instanceof PATCH) {
        return "PATCH";
    };
    throw new Error("Failed pattern match at Data.HTTP.Method line 63, column 3 - line 64, column 3: " + [ v.constructor.name ]);
});
var showCustomMethod = new Prelude.Show(function (v) {
    return "(CustomMethod " + (Prelude.show(Prelude.showString)(v) + ")");
});
var runCustomMethod = function (v) {
    return v;
};
var print = Data_Either.either(Prelude.show(showMethod))(runCustomMethod);
var genericMethod = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.OPTIONS" && v.value1.length === 0)) {
        return new Data_Maybe.Just(OPTIONS.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.GET" && v.value1.length === 0)) {
        return new Data_Maybe.Just(GET.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.HEAD" && v.value1.length === 0)) {
        return new Data_Maybe.Just(HEAD.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.POST" && v.value1.length === 0)) {
        return new Data_Maybe.Just(POST.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.PUT" && v.value1.length === 0)) {
        return new Data_Maybe.Just(PUT.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.DELETE" && v.value1.length === 0)) {
        return new Data_Maybe.Just(DELETE.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.TRACE" && v.value1.length === 0)) {
        return new Data_Maybe.Just(TRACE.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.CONNECT" && v.value1.length === 0)) {
        return new Data_Maybe.Just(CONNECT.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.PROPFIND" && v.value1.length === 0)) {
        return new Data_Maybe.Just(PROPFIND.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.PROPPATCH" && v.value1.length === 0)) {
        return new Data_Maybe.Just(PROPPATCH.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.MKCOL" && v.value1.length === 0)) {
        return new Data_Maybe.Just(MKCOL.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.COPY" && v.value1.length === 0)) {
        return new Data_Maybe.Just(COPY.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.MOVE" && v.value1.length === 0)) {
        return new Data_Maybe.Just(MOVE.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.LOCK" && v.value1.length === 0)) {
        return new Data_Maybe.Just(LOCK.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.UNLOCK" && v.value1.length === 0)) {
        return new Data_Maybe.Just(UNLOCK.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.PATCH" && v.value1.length === 0)) {
        return new Data_Maybe.Just(PATCH.value);
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("Data.HTTP.Method.Method", [ {
        sigConstructor: "Data.HTTP.Method.OPTIONS", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.GET", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.HEAD", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.POST", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.PUT", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.DELETE", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.TRACE", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.CONNECT", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.PROPFIND", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.PROPPATCH", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.MKCOL", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.COPY", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.MOVE", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.LOCK", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.UNLOCK", 
        sigValues: [  ]
    }, {
        sigConstructor: "Data.HTTP.Method.PATCH", 
        sigValues: [  ]
    } ]);
}, function (v) {
    if (v instanceof OPTIONS) {
        return new Data_Generic.SProd("Data.HTTP.Method.OPTIONS", [  ]);
    };
    if (v instanceof GET) {
        return new Data_Generic.SProd("Data.HTTP.Method.GET", [  ]);
    };
    if (v instanceof HEAD) {
        return new Data_Generic.SProd("Data.HTTP.Method.HEAD", [  ]);
    };
    if (v instanceof POST) {
        return new Data_Generic.SProd("Data.HTTP.Method.POST", [  ]);
    };
    if (v instanceof PUT) {
        return new Data_Generic.SProd("Data.HTTP.Method.PUT", [  ]);
    };
    if (v instanceof DELETE) {
        return new Data_Generic.SProd("Data.HTTP.Method.DELETE", [  ]);
    };
    if (v instanceof TRACE) {
        return new Data_Generic.SProd("Data.HTTP.Method.TRACE", [  ]);
    };
    if (v instanceof CONNECT) {
        return new Data_Generic.SProd("Data.HTTP.Method.CONNECT", [  ]);
    };
    if (v instanceof PROPFIND) {
        return new Data_Generic.SProd("Data.HTTP.Method.PROPFIND", [  ]);
    };
    if (v instanceof PROPPATCH) {
        return new Data_Generic.SProd("Data.HTTP.Method.PROPPATCH", [  ]);
    };
    if (v instanceof MKCOL) {
        return new Data_Generic.SProd("Data.HTTP.Method.MKCOL", [  ]);
    };
    if (v instanceof COPY) {
        return new Data_Generic.SProd("Data.HTTP.Method.COPY", [  ]);
    };
    if (v instanceof MOVE) {
        return new Data_Generic.SProd("Data.HTTP.Method.MOVE", [  ]);
    };
    if (v instanceof LOCK) {
        return new Data_Generic.SProd("Data.HTTP.Method.LOCK", [  ]);
    };
    if (v instanceof UNLOCK) {
        return new Data_Generic.SProd("Data.HTTP.Method.UNLOCK", [  ]);
    };
    if (v instanceof PATCH) {
        return new Data_Generic.SProd("Data.HTTP.Method.PATCH", [  ]);
    };
    throw new Error("Failed pattern match at Data.HTTP.Method line 38, column 1 - line 40, column 1: " + [ v.constructor.name ]);
});
var genericCustomMethod = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.CustomMethod" && v.value1.length === 1)) {
        return Prelude.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(CustomMethod))(Data_Generic.fromSpine(Data_Generic.genericString)(v.value1[0](Prelude.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("Data.HTTP.Method.CustomMethod", [ {
        sigConstructor: "Data.HTTP.Method.CustomMethod", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("Data.HTTP.Method.CustomMethod", [ function ($dollarq) {
        return Data_Generic.toSpine(Data_Generic.genericString)(v);
    } ]);
});
var fromString = function (s) {
    var $55 = Data_String.toUpper(s);
    if ($55 === "OPTIONS") {
        return new Data_Either.Left(OPTIONS.value);
    };
    if ($55 === "GET") {
        return new Data_Either.Left(GET.value);
    };
    if ($55 === "HEAD") {
        return new Data_Either.Left(HEAD.value);
    };
    if ($55 === "POST") {
        return new Data_Either.Left(POST.value);
    };
    if ($55 === "PUT") {
        return new Data_Either.Left(PUT.value);
    };
    if ($55 === "DELETE") {
        return new Data_Either.Left(DELETE.value);
    };
    if ($55 === "TRACE") {
        return new Data_Either.Left(TRACE.value);
    };
    if ($55 === "CONNECT") {
        return new Data_Either.Left(CONNECT.value);
    };
    if ($55 === "PROPFIND") {
        return new Data_Either.Left(PROPFIND.value);
    };
    if ($55 === "PROPPATCH") {
        return new Data_Either.Left(PROPPATCH.value);
    };
    if ($55 === "MKCOL") {
        return new Data_Either.Left(MKCOL.value);
    };
    if ($55 === "COPY") {
        return new Data_Either.Left(COPY.value);
    };
    if ($55 === "MOVE") {
        return new Data_Either.Left(MOVE.value);
    };
    if ($55 === "LOCK") {
        return new Data_Either.Left(LOCK.value);
    };
    if ($55 === "UNLOCK") {
        return new Data_Either.Left(UNLOCK.value);
    };
    return new Data_Either.Right($55);
};
var eqMethod = new Prelude.Eq(function (v) {
    return function (v1) {
        if (v instanceof OPTIONS && v1 instanceof OPTIONS) {
            return true;
        };
        if (v instanceof GET && v1 instanceof GET) {
            return true;
        };
        if (v instanceof HEAD && v1 instanceof HEAD) {
            return true;
        };
        if (v instanceof POST && v1 instanceof POST) {
            return true;
        };
        if (v instanceof PUT && v1 instanceof PUT) {
            return true;
        };
        if (v instanceof DELETE && v1 instanceof DELETE) {
            return true;
        };
        if (v instanceof TRACE && v1 instanceof TRACE) {
            return true;
        };
        if (v instanceof CONNECT && v1 instanceof CONNECT) {
            return true;
        };
        if (v instanceof PROPFIND && v1 instanceof PROPFIND) {
            return true;
        };
        if (v instanceof PROPPATCH && v1 instanceof PROPPATCH) {
            return true;
        };
        if (v instanceof MKCOL && v1 instanceof MKCOL) {
            return true;
        };
        if (v instanceof COPY && v1 instanceof COPY) {
            return true;
        };
        if (v instanceof MOVE && v1 instanceof MOVE) {
            return true;
        };
        if (v instanceof LOCK && v1 instanceof LOCK) {
            return true;
        };
        if (v instanceof UNLOCK && v1 instanceof UNLOCK) {
            return true;
        };
        if (v instanceof PATCH && v1 instanceof PATCH) {
            return true;
        };
        return false;
    };
});
var ordMethod = new Prelude.Ord(function () {
    return eqMethod;
}, Data_Generic.gCompare(genericMethod));
var eqCustomMethod = new Prelude.Eq(function (v) {
    return function (v1) {
        return v === v1;
    };
});
var ordCustomMethod = new Prelude.Ord(function () {
    return eqCustomMethod;
}, Data_Generic.gCompare(genericCustomMethod));
module.exports = {
    OPTIONS: OPTIONS, 
    GET: GET, 
    HEAD: HEAD, 
    POST: POST, 
    PUT: PUT, 
    DELETE: DELETE, 
    TRACE: TRACE, 
    CONNECT: CONNECT, 
    PROPFIND: PROPFIND, 
    PROPPATCH: PROPPATCH, 
    MKCOL: MKCOL, 
    COPY: COPY, 
    MOVE: MOVE, 
    LOCK: LOCK, 
    UNLOCK: UNLOCK, 
    PATCH: PATCH, 
    print: print, 
    fromString: fromString, 
    runCustomMethod: runCustomMethod, 
    genericMethod: genericMethod, 
    eqMethod: eqMethod, 
    ordMethod: ordMethod, 
    showMethod: showMethod, 
    genericCustomMethod: genericCustomMethod, 
    eqCustomMethod: eqCustomMethod, 
    ordCustomMethod: ordCustomMethod, 
    showCustomMethod: showCustomMethod
};
