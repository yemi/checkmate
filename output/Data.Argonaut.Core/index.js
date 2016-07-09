// Generated by psc version 0.9.1
"use strict";
var $foreign = require("./foreign");
var Prelude = require("../Prelude");
var Data_Tuple = require("../Data.Tuple");
var Data_Maybe = require("../Data.Maybe");
var Data_Function_Uncurried = require("../Data.Function.Uncurried");
var Data_StrMap = require("../Data.StrMap");
var Data_Eq = require("../Data.Eq");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Data_Show = require("../Data.Show");
var Data_Function = require("../Data.Function");
var verbJsonType = function (def) {
    return function (f) {
        return function (fold) {
            return fold(def)(f);
        };
    };
};
var toJsonType = verbJsonType(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
var showJson = new Data_Show.Show($foreign._stringify);
var showJNull = new Data_Show.Show(function (v) {
    return "null";
});
var jsonZero = $foreign.fromNumber(0.0);
var jsonTrue = $foreign.fromBoolean(true);
var jsonSingletonObject = function (key) {
    return function (val) {
        return Data_Function.apply($foreign.fromObject)(Data_StrMap.singleton(key)(val));
    };
};
var jsonSingletonArray = function (j) {
    return $foreign.fromArray([ j ]);
};
var jsonFalse = $foreign.fromBoolean(false);
var jsonEmptyString = $foreign.fromString("");
var jsonEmptyObject = $foreign.fromObject(Data_StrMap.empty);
var jsonEmptyArray = $foreign.fromArray([  ]);
var isJsonType = verbJsonType(false)(Data_Function["const"](true));
var foldJsonString = function (d) {
    return function (f) {
        return function (j) {
            return Data_Function_Uncurried.runFn7($foreign._foldJson)(Data_Function["const"](d))(Data_Function["const"](d))(Data_Function["const"](d))(f)(Data_Function["const"](d))(Data_Function["const"](d))(j);
        };
    };
};
var isString = isJsonType(foldJsonString);
var toString = toJsonType(foldJsonString);
var foldJsonObject = function (d) {
    return function (f) {
        return function (j) {
            return Data_Function_Uncurried.runFn7($foreign._foldJson)(Data_Function["const"](d))(Data_Function["const"](d))(Data_Function["const"](d))(Data_Function["const"](d))(Data_Function["const"](d))(f)(j);
        };
    };
};
var isObject = isJsonType(foldJsonObject);
var toObject = toJsonType(foldJsonObject);
var foldJsonNumber = function (d) {
    return function (f) {
        return function (j) {
            return Data_Function_Uncurried.runFn7($foreign._foldJson)(Data_Function["const"](d))(Data_Function["const"](d))(f)(Data_Function["const"](d))(Data_Function["const"](d))(Data_Function["const"](d))(j);
        };
    };
};
var isNumber = isJsonType(foldJsonNumber);
var toNumber = toJsonType(foldJsonNumber);
var foldJsonNull = function (d) {
    return function (f) {
        return function (j) {
            return Data_Function_Uncurried.runFn7($foreign._foldJson)(f)(Data_Function["const"](d))(Data_Function["const"](d))(Data_Function["const"](d))(Data_Function["const"](d))(Data_Function["const"](d))(j);
        };
    };
};
var isNull = isJsonType(foldJsonNull);
var toNull = toJsonType(foldJsonNull);
var foldJsonBoolean = function (d) {
    return function (f) {
        return function (j) {
            return Data_Function_Uncurried.runFn7($foreign._foldJson)(Data_Function["const"](d))(f)(Data_Function["const"](d))(Data_Function["const"](d))(Data_Function["const"](d))(Data_Function["const"](d))(j);
        };
    };
};
var isBoolean = isJsonType(foldJsonBoolean);
var toBoolean = toJsonType(foldJsonBoolean);
var foldJsonArray = function (d) {
    return function (f) {
        return function (j) {
            return Data_Function_Uncurried.runFn7($foreign._foldJson)(Data_Function["const"](d))(Data_Function["const"](d))(Data_Function["const"](d))(Data_Function["const"](d))(f)(Data_Function["const"](d))(j);
        };
    };
};
var isArray = isJsonType(foldJsonArray);
var toArray = toJsonType(foldJsonArray);
var foldJson = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (json) {
                            return Data_Function_Uncurried.runFn7($foreign._foldJson)(a)(b)(c)(d)(e)(f)(json);
                        };
                    };
                };
            };
        };
    };
};
var ordJson = new Data_Ord.Ord(function () {
    return eqJson;
}, function (a) {
    return function (b) {
        return Data_Function_Uncurried.runFn5($foreign._compare)(Data_Ordering.EQ.value)(Data_Ordering.GT.value)(Data_Ordering.LT.value)(a)(b);
    };
});
var eqJson = new Data_Eq.Eq(function (j1) {
    return function (j2) {
        return Data_Eq.eq(Data_Ordering.eqOrdering)(Data_Ord.compare(ordJson)(j1)(j2))(Data_Ordering.EQ.value);
    };
});
var eqJNull = new Data_Eq.Eq(function (v) {
    return function (v1) {
        return true;
    };
});
var ordJNull = new Data_Ord.Ord(function () {
    return eqJNull;
}, function (v) {
    return function (v1) {
        return Data_Ordering.EQ.value;
    };
});
module.exports = {
    foldJson: foldJson, 
    foldJsonArray: foldJsonArray, 
    foldJsonBoolean: foldJsonBoolean, 
    foldJsonNull: foldJsonNull, 
    foldJsonNumber: foldJsonNumber, 
    foldJsonObject: foldJsonObject, 
    foldJsonString: foldJsonString, 
    isArray: isArray, 
    isBoolean: isBoolean, 
    isNull: isNull, 
    isNumber: isNumber, 
    isObject: isObject, 
    isString: isString, 
    jsonEmptyArray: jsonEmptyArray, 
    jsonEmptyObject: jsonEmptyObject, 
    jsonFalse: jsonFalse, 
    jsonSingletonArray: jsonSingletonArray, 
    jsonSingletonObject: jsonSingletonObject, 
    jsonTrue: jsonTrue, 
    jsonZero: jsonZero, 
    toArray: toArray, 
    toBoolean: toBoolean, 
    toNull: toNull, 
    toNumber: toNumber, 
    toObject: toObject, 
    toString: toString, 
    eqJNull: eqJNull, 
    ordJNull: ordJNull, 
    showJNull: showJNull, 
    eqJson: eqJson, 
    ordJson: ordJson, 
    showJson: showJson, 
    fromArray: $foreign.fromArray, 
    fromBoolean: $foreign.fromBoolean, 
    fromNull: $foreign.fromNull, 
    fromNumber: $foreign.fromNumber, 
    fromObject: $foreign.fromObject, 
    fromString: $foreign.fromString, 
    jsonNull: $foreign.jsonNull
};
