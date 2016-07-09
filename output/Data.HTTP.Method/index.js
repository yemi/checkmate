// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Data_Either = require("../Data.Either");
var Data_Generic = require("../Data.Generic");
var Data_String = require("../Data.String");
var Data_Eq = require("../Data.Eq");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Data_Maybe = require("../Data.Maybe");
var Data_Show = require("../Data.Show");
var Control_Apply = require("../Control.Apply");
var Data_Unit = require("../Data.Unit");
var Data_Semigroup = require("../Data.Semigroup");
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
var unCustomMethod = function (v) {
    return v;
};
var showMethod = new Data_Show.Show(function (v) {
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
    throw new Error("Failed pattern match at Data.HTTP.Method line 43, column 3 - line 44, column 3: " + [ v.constructor.name ]);
});
var showCustomMethod = new Data_Show.Show(function (v) {
    return "(CustomMethod " + (Data_Show.show(Data_Show.showString)(v) + ")");
});
var print = Data_Either.either(Data_Show.show(showMethod))(unCustomMethod);
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
    throw new Error("Failed pattern match at Data.HTTP.Method line 40, column 1 - line 40, column 48: " + [ v.constructor.name ]);
});
var genericCustomMethod = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.HTTP.Method.CustomMethod" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(CustomMethod))(Data_Generic.fromSpine(Data_Generic.genericString)(v.value1[0](Data_Unit.unit)));
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
    var $63 = Data_String.toUpper(s);
    if ($63 === "OPTIONS") {
        return new Data_Either.Left(OPTIONS.value);
    };
    if ($63 === "GET") {
        return new Data_Either.Left(GET.value);
    };
    if ($63 === "HEAD") {
        return new Data_Either.Left(HEAD.value);
    };
    if ($63 === "POST") {
        return new Data_Either.Left(POST.value);
    };
    if ($63 === "PUT") {
        return new Data_Either.Left(PUT.value);
    };
    if ($63 === "DELETE") {
        return new Data_Either.Left(DELETE.value);
    };
    if ($63 === "TRACE") {
        return new Data_Either.Left(TRACE.value);
    };
    if ($63 === "CONNECT") {
        return new Data_Either.Left(CONNECT.value);
    };
    if ($63 === "PROPFIND") {
        return new Data_Either.Left(PROPFIND.value);
    };
    if ($63 === "PROPPATCH") {
        return new Data_Either.Left(PROPPATCH.value);
    };
    if ($63 === "MKCOL") {
        return new Data_Either.Left(MKCOL.value);
    };
    if ($63 === "COPY") {
        return new Data_Either.Left(COPY.value);
    };
    if ($63 === "MOVE") {
        return new Data_Either.Left(MOVE.value);
    };
    if ($63 === "LOCK") {
        return new Data_Either.Left(LOCK.value);
    };
    if ($63 === "UNLOCK") {
        return new Data_Either.Left(UNLOCK.value);
    };
    return new Data_Either.Right($63);
};
var eqMethod = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof OPTIONS && y instanceof OPTIONS) {
            return true;
        };
        if (x instanceof GET && y instanceof GET) {
            return true;
        };
        if (x instanceof HEAD && y instanceof HEAD) {
            return true;
        };
        if (x instanceof POST && y instanceof POST) {
            return true;
        };
        if (x instanceof PUT && y instanceof PUT) {
            return true;
        };
        if (x instanceof DELETE && y instanceof DELETE) {
            return true;
        };
        if (x instanceof TRACE && y instanceof TRACE) {
            return true;
        };
        if (x instanceof CONNECT && y instanceof CONNECT) {
            return true;
        };
        if (x instanceof PROPFIND && y instanceof PROPFIND) {
            return true;
        };
        if (x instanceof PROPPATCH && y instanceof PROPPATCH) {
            return true;
        };
        if (x instanceof MKCOL && y instanceof MKCOL) {
            return true;
        };
        if (x instanceof COPY && y instanceof COPY) {
            return true;
        };
        if (x instanceof MOVE && y instanceof MOVE) {
            return true;
        };
        if (x instanceof LOCK && y instanceof LOCK) {
            return true;
        };
        if (x instanceof UNLOCK && y instanceof UNLOCK) {
            return true;
        };
        if (x instanceof PATCH && y instanceof PATCH) {
            return true;
        };
        return false;
    };
});
var ordMethod = new Data_Ord.Ord(function () {
    return eqMethod;
}, function (x) {
    return function (y) {
        if (x instanceof OPTIONS && y instanceof OPTIONS) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof OPTIONS) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof OPTIONS) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof GET && y instanceof GET) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof GET) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof GET) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof HEAD && y instanceof HEAD) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof HEAD) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof HEAD) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof POST && y instanceof POST) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof POST) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof POST) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof PUT && y instanceof PUT) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof PUT) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof PUT) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof DELETE && y instanceof DELETE) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof DELETE) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof DELETE) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof TRACE && y instanceof TRACE) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof TRACE) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof TRACE) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof CONNECT && y instanceof CONNECT) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof CONNECT) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof CONNECT) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof PROPFIND && y instanceof PROPFIND) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof PROPFIND) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof PROPFIND) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof PROPPATCH && y instanceof PROPPATCH) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof PROPPATCH) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof PROPPATCH) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof MKCOL && y instanceof MKCOL) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof MKCOL) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof MKCOL) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof COPY && y instanceof COPY) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof COPY) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof COPY) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof MOVE && y instanceof MOVE) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof MOVE) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof MOVE) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof LOCK && y instanceof LOCK) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof LOCK) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof LOCK) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof UNLOCK && y instanceof UNLOCK) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof UNLOCK) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof UNLOCK) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof PATCH && y instanceof PATCH) {
            return Data_Ordering.EQ.value;
        };
        throw new Error("Failed pattern match at Data.HTTP.Method line 39, column 1 - line 39, column 40: " + [ x.constructor.name, y.constructor.name ]);
    };
});
var eqCustomMethod = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordCustomMethod = new Data_Ord.Ord(function () {
    return eqCustomMethod;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordString)(x)(y);
    };
});
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
    fromString: fromString, 
    print: print, 
    unCustomMethod: unCustomMethod, 
    eqMethod: eqMethod, 
    ordMethod: ordMethod, 
    genericMethod: genericMethod, 
    showMethod: showMethod, 
    eqCustomMethod: eqCustomMethod, 
    ordCustomMethod: ordCustomMethod, 
    genericCustomMethod: genericCustomMethod, 
    showCustomMethod: showCustomMethod
};
