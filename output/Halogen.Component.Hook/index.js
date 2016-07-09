// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Control_Monad_Free = require("../Control.Monad.Free");
var Halogen_Query_HalogenF = require("../Halogen.Query.HalogenF");
var Unsafe_Coerce = require("../Unsafe.Coerce");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var PostRender = (function () {
    function PostRender(value0) {
        this.value0 = value0;
    };
    PostRender.create = function (value0) {
        return new PostRender(value0);
    };
    return PostRender;
})();
var Finalized = (function () {
    function Finalized(value0) {
        this.value0 = value0;
    };
    Finalized.create = function (value0) {
        return new Finalized(value0);
    };
    return Finalized;
})();
var FinalizedF = (function () {
    function FinalizedF(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    FinalizedF.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new FinalizedF(value0, value1, value2);
            };
        };
    };
    return FinalizedF;
})();
var runFinalized = function (k) {
    return function (f) {
        var $6 = Unsafe_Coerce.unsafeCoerce(f);
        return k($6.value0)($6.value1)($6.value2);
    };
};
var lmapHook = function (v) {
    return function (v1) {
        if (v1 instanceof PostRender) {
            return new PostRender(v(v1.value0));
        };
        if (v1 instanceof Finalized) {
            return new Finalized(v1.value0);
        };
        throw new Error("Failed pattern match at Halogen.Component.Hook line 55, column 1 - line 55, column 45: " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var finalized = function (e) {
    return function (s) {
        return function (i) {
            return Unsafe_Coerce.unsafeCoerce(new FinalizedF(e, s, i));
        };
    };
};
var mapFinalized = function (dictFunctor) {
    return function (g) {
        return runFinalized(function (e) {
            return function (s) {
                return function (i) {
                    return finalized(function ($18) {
                        return Control_Monad_Free.hoistFree(Halogen_Query_HalogenF.hoistHalogenF(dictFunctor)(g))(e($18));
                    })(s)(i);
                };
            };
        });
    };
};
var rmapHook = function (dictFunctor) {
    return function (v) {
        return function (v1) {
            if (v1 instanceof Finalized) {
                return new Finalized(mapFinalized(dictFunctor)(v)(v1.value0));
            };
            if (v1 instanceof PostRender) {
                return new PostRender(v1.value0);
            };
            throw new Error("Failed pattern match at Halogen.Component.Hook line 64, column 1 - line 64, column 56: " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
};
module.exports = {
    PostRender: PostRender, 
    Finalized: Finalized, 
    finalized: finalized, 
    lmapHook: lmapHook, 
    mapFinalized: mapFinalized, 
    rmapHook: rmapHook, 
    runFinalized: runFinalized
};
