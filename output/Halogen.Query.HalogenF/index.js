// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Control_Alt = require("../Control.Alt");
var Control_Monad_Aff_Free = require("../Control.Monad.Aff.Free");
var Control_Monad_Free_Trans = require("../Control.Monad.Free.Trans");
var Control_Plus = require("../Control.Plus");
var Data_Bifunctor = require("../Data.Bifunctor");
var Data_Maybe = require("../Data.Maybe");
var Halogen_Query_EventSource = require("../Halogen.Query.EventSource");
var Halogen_Query_StateF = require("../Halogen.Query.StateF");
var Data_Functor = require("../Data.Functor");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Control_Coroutine_Stalling = require("../Control.Coroutine.Stalling");
var Pending = (function () {
    function Pending() {

    };
    Pending.value = new Pending();
    return Pending;
})();
var Deferred = (function () {
    function Deferred() {

    };
    Deferred.value = new Deferred();
    return Deferred;
})();
var StateHF = (function () {
    function StateHF(value0) {
        this.value0 = value0;
    };
    StateHF.create = function (value0) {
        return new StateHF(value0);
    };
    return StateHF;
})();
var SubscribeHF = (function () {
    function SubscribeHF(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    SubscribeHF.create = function (value0) {
        return function (value1) {
            return new SubscribeHF(value0, value1);
        };
    };
    return SubscribeHF;
})();
var QueryHF = (function () {
    function QueryHF(value0) {
        this.value0 = value0;
    };
    QueryHF.create = function (value0) {
        return new QueryHF(value0);
    };
    return QueryHF;
})();
var RenderHF = (function () {
    function RenderHF(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    RenderHF.create = function (value0) {
        return function (value1) {
            return new RenderHF(value0, value1);
        };
    };
    return RenderHF;
})();
var RenderPendingHF = (function () {
    function RenderPendingHF(value0) {
        this.value0 = value0;
    };
    RenderPendingHF.create = function (value0) {
        return new RenderPendingHF(value0);
    };
    return RenderPendingHF;
})();
var HaltHF = (function () {
    function HaltHF() {

    };
    HaltHF.value = new HaltHF();
    return HaltHF;
})();
var transformHF = function (dictFunctor) {
    return function (sigma) {
        return function (phi) {
            return function (gamma) {
                return function (h) {
                    if (h instanceof StateHF) {
                        return new StateHF(sigma(h.value0));
                    };
                    if (h instanceof SubscribeHF) {
                        return new SubscribeHF(Control_Monad_Free_Trans.bimapFreeT(Control_Coroutine_Stalling.functorStallF)(dictFunctor)(Data_Bifunctor.lmap(Control_Coroutine_Stalling.bifunctorStallF)(phi))(gamma)(Halogen_Query_EventSource.runEventSource(h.value0)), h.value1);
                    };
                    if (h instanceof QueryHF) {
                        return new QueryHF(gamma(h.value0));
                    };
                    if (h instanceof RenderHF) {
                        return new RenderHF(h.value0, h.value1);
                    };
                    if (h instanceof RenderPendingHF) {
                        return new RenderPendingHF(h.value0);
                    };
                    if (h instanceof HaltHF) {
                        return HaltHF.value;
                    };
                    throw new Error("Failed pattern match at Halogen.Query.HalogenF line 65, column 3 - line 71, column 21: " + [ h.constructor.name ]);
                };
            };
        };
    };
};
var hoistHalogenF = function (dictFunctor) {
    return function (eta) {
        return function (h) {
            if (h instanceof StateHF) {
                return new StateHF(h.value0);
            };
            if (h instanceof SubscribeHF) {
                return new SubscribeHF(Control_Monad_Free_Trans.hoistFreeT(Control_Coroutine_Stalling.functorStallF)(dictFunctor)(eta)(Halogen_Query_EventSource.runEventSource(h.value0)), h.value1);
            };
            if (h instanceof QueryHF) {
                return new QueryHF(eta(h.value0));
            };
            if (h instanceof RenderHF) {
                return new RenderHF(h.value0, h.value1);
            };
            if (h instanceof RenderPendingHF) {
                return new RenderPendingHF(h.value0);
            };
            if (h instanceof HaltHF) {
                return HaltHF.value;
            };
            throw new Error("Failed pattern match at Halogen.Query.HalogenF line 81, column 3 - line 87, column 15: " + [ h.constructor.name ]);
        };
    };
};
var functorHalogenF = function (dictFunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (h) {
            if (h instanceof StateHF) {
                return new StateHF(Data_Functor.map(Halogen_Query_StateF.functorStateF)(f)(h.value0));
            };
            if (h instanceof SubscribeHF) {
                return new SubscribeHF(h.value0, f(h.value1));
            };
            if (h instanceof QueryHF) {
                return new QueryHF(Data_Functor.map(dictFunctor)(f)(h.value0));
            };
            if (h instanceof RenderHF) {
                return new RenderHF(h.value0, f(h.value1));
            };
            if (h instanceof RenderPendingHF) {
                return new RenderPendingHF(Data_Functor.map(Data_Functor.functorFn)(f)(h.value0));
            };
            if (h instanceof HaltHF) {
                return HaltHF.value;
            };
            throw new Error("Failed pattern match at Halogen.Query.HalogenF line 37, column 5 - line 43, column 23: " + [ h.constructor.name ]);
        };
    });
};
var altHalogenF = function (dictFunctor) {
    return new Control_Alt.Alt(function () {
        return functorHalogenF(dictFunctor);
    }, function (v) {
        return function (v1) {
            if (v instanceof HaltHF) {
                return v1;
            };
            return v;
        };
    });
};
var plusHalogenF = function (dictFunctor) {
    return new Control_Plus.Plus(function () {
        return altHalogenF(dictFunctor);
    }, HaltHF.value);
};
var affableHalogenF = function (dictAffable) {
    return new Control_Monad_Aff_Free.Affable(function ($34) {
        return QueryHF.create(Control_Monad_Aff_Free.fromAff(dictAffable)($34));
    });
};
module.exports = {
    StateHF: StateHF, 
    SubscribeHF: SubscribeHF, 
    QueryHF: QueryHF, 
    RenderHF: RenderHF, 
    RenderPendingHF: RenderPendingHF, 
    HaltHF: HaltHF, 
    Pending: Pending, 
    Deferred: Deferred, 
    hoistHalogenF: hoistHalogenF, 
    transformHF: transformHF, 
    functorHalogenF: functorHalogenF, 
    affableHalogenF: affableHalogenF, 
    altHalogenF: altHalogenF, 
    plusHalogenF: plusHalogenF
};
