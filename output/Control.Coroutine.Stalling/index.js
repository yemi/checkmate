// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Control_Coroutine = require("../Control.Coroutine");
var Control_Monad_Free_Trans = require("../Control.Monad.Free.Trans");
var Control_Monad_Maybe_Trans = require("../Control.Monad.Maybe.Trans");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class");
var Control_Monad_Trans = require("../Control.Monad.Trans");
var Control_Bind = require("../Control.Bind");
var Control_Plus = require("../Control.Plus");
var Data_Functor = require("../Data.Functor");
var Data_Bifunctor = require("../Data.Bifunctor");
var Data_Either = require("../Data.Either");
var Data_Identity = require("../Data.Identity");
var Data_Maybe = require("../Data.Maybe");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Control_Applicative = require("../Control.Applicative");
var Data_Function = require("../Data.Function");
var Data_Unit = require("../Data.Unit");
var Emit = (function () {
    function Emit(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Emit.create = function (value0) {
        return function (value1) {
            return new Emit(value0, value1);
        };
    };
    return Emit;
})();
var Stall = (function () {
    function Stall(value0) {
        this.value0 = value0;
    };
    Stall.create = function (value0) {
        return new Stall(value0);
    };
    return Stall;
})();
var stallF = function (e) {
    return function (s) {
        return function (v) {
            if (v instanceof Emit) {
                return e(v.value0)(v.value1);
            };
            if (v instanceof Stall) {
                return s(v.value0);
            };
            throw new Error("Failed pattern match at Control.Coroutine.Stalling line 46, column 14 - line 48, column 17: " + [ v.constructor.name ]);
        };
    };
};
var runStallingProcess = function (dictMonadRec) {
    return function ($30) {
        return Control_Monad_Maybe_Trans.runMaybeT(Control_Monad_Free_Trans.runFreeT(Data_Maybe.functorMaybe)(Control_Monad_Maybe_Trans.monadRecMaybeT(dictMonadRec))(Data_Maybe.maybe(Control_Plus.empty(Control_Monad_Maybe_Trans.plusMaybeT(dictMonadRec["__superclass_Control.Monad.Monad_0"]())))(Control_Applicative.pure(Control_Monad_Maybe_Trans.applicativeMaybeT(dictMonadRec["__superclass_Control.Monad.Monad_0"]()))))(Control_Monad_Free_Trans.hoistFreeT(Data_Maybe.functorMaybe)(Control_Monad_Maybe_Trans.functorMaybeT(dictMonadRec["__superclass_Control.Monad.Monad_0"]()))(function ($31) {
            return Control_Monad_Maybe_Trans.MaybeT(Data_Functor.map((((dictMonadRec["__superclass_Control.Monad.Monad_0"]())["__superclass_Control.Bind.Bind_1"]())["__superclass_Control.Apply.Apply_0"]())["__superclass_Data.Functor.Functor_0"]())(Data_Maybe.Just.create)($31));
        })($30)));
    };
};
var producerToStallingProducer = function (dictFunctor) {
    return Control_Monad_Free_Trans.interpret(Control_Coroutine.functorEmit)(dictFunctor)(function (v) {
        return new Emit(v.value0, v.value1);
    });
};
var processToStallingProcess = function (dictFunctor) {
    return Control_Monad_Free_Trans.interpret(Data_Identity.functorIdentity)(dictFunctor)(function ($32) {
        return Data_Maybe.Just.create(Data_Identity.runIdentity($32));
    });
};
var bifunctorStallF = new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
        return function (v) {
            if (v instanceof Emit) {
                return new Emit(f(v.value0), g(v.value1));
            };
            if (v instanceof Stall) {
                return new Stall(g(v.value0));
            };
            throw new Error("Failed pattern match at Control.Coroutine.Stalling line 51, column 15 - line 53, column 27: " + [ v.constructor.name ]);
        };
    };
});
var functorStallF = new Data_Functor.Functor(function (f) {
    return Data_Bifunctor.rmap(bifunctorStallF)(f);
});
var emit = function (dictMonad) {
    return function ($33) {
        return Control_Monad_Free_Trans.liftFreeT(functorStallF)(dictMonad)(Data_Function.flip(Emit.create)(Data_Unit.unit)($33));
    };
};
var catMaybes = function (dictMonadRec) {
    return Data_Function.apply(Control_Monad_Rec_Class.tailRecM(Control_Monad_Free_Trans.monadRecFreeT(functorStallF)(dictMonadRec["__superclass_Control.Monad.Monad_0"]())))(Control_Bind.composeKleisli(Control_Monad_Free_Trans.bindFreeT(functorStallF)(dictMonadRec["__superclass_Control.Monad.Monad_0"]()))(function ($34) {
        return Control_Monad_Trans.lift(Control_Monad_Free_Trans.monadTransFreeT(functorStallF))(dictMonadRec["__superclass_Control.Monad.Monad_0"]())(Control_Monad_Free_Trans.resume(functorStallF)(dictMonadRec)($34));
    })(Data_Either.either(function ($35) {
        return Control_Applicative.pure(Control_Monad_Free_Trans.applicativeFreeT(functorStallF)(dictMonadRec["__superclass_Control.Monad.Monad_0"]()))(Data_Either.Right.create($35));
    })(stallF(function (mo) {
        return function (t) {
            return Data_Functor.voidLeft(Control_Monad_Free_Trans.functorFreeT(functorStallF)((((dictMonadRec["__superclass_Control.Monad.Monad_0"]())["__superclass_Control.Bind.Bind_1"]())["__superclass_Control.Apply.Apply_0"]())["__superclass_Data.Functor.Functor_0"]()))(Data_Maybe.maybe(Control_Applicative.pure(Control_Monad_Free_Trans.applicativeFreeT(functorStallF)(dictMonadRec["__superclass_Control.Monad.Monad_0"]()))(Data_Unit.unit))(emit(dictMonadRec["__superclass_Control.Monad.Monad_0"]()))(mo))(new Data_Either.Left(t));
        };
    })(function ($36) {
        return Control_Applicative.pure(Control_Monad_Free_Trans.applicativeFreeT(functorStallF)(dictMonadRec["__superclass_Control.Monad.Monad_0"]()))(Data_Either.Left.create($36));
    }))));
};
var fuse = function (dictMonadRec) {
    return Control_Coroutine.fuseWith(functorStallF)(Control_Coroutine.functorAwait)(Data_Maybe.functorMaybe)(dictMonadRec)(function (f) {
        return function (q) {
            return function (v) {
                if (q instanceof Emit) {
                    return new Data_Maybe.Just(f(q.value1)(v(q.value0)));
                };
                if (q instanceof Stall) {
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Control.Coroutine.Stalling line 86, column 5 - line 88, column 27: " + [ q.constructor.name ]);
            };
        };
    });
};
var stall = function (dictMonad) {
    return Control_Monad_Free_Trans.liftFreeT(functorStallF)(dictMonad)(new Stall(Data_Unit.unit));
};
var mapStallingProducer = function (dictFunctor) {
    return function ($37) {
        return Control_Monad_Free_Trans.interpret(functorStallF)(dictFunctor)(Data_Bifunctor.lmap(bifunctorStallF)($37));
    };
};
var filter = function (dictMonadRec) {
    return function (p) {
        return function ($38) {
            return catMaybes(dictMonadRec)(mapStallingProducer((((dictMonadRec["__superclass_Control.Monad.Monad_0"]())["__superclass_Control.Bind.Bind_1"]())["__superclass_Control.Apply.Apply_0"]())["__superclass_Data.Functor.Functor_0"]())(function (x) {
                var $29 = p(x);
                if ($29) {
                    return new Data_Maybe.Just(x);
                };
                if (!$29) {
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Control.Coroutine.Stalling line 151, column 5 - line 151, column 33: " + [ $29.constructor.name ]);
            })($38));
        };
    };
};
module.exports = {
    Emit: Emit, 
    Stall: Stall, 
    catMaybes: catMaybes, 
    emit: emit, 
    filter: filter, 
    fuse: fuse, 
    mapStallingProducer: mapStallingProducer, 
    processToStallingProcess: processToStallingProcess, 
    producerToStallingProducer: producerToStallingProducer, 
    runStallingProcess: runStallingProcess, 
    stall: stall, 
    stallF: stallF, 
    bifunctorStallF: bifunctorStallF, 
    functorStallF: functorStallF
};