// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Control_Alt = require("../Control.Alt");
var Control_Alternative = require("../Control.Alternative");
var Control_Extend = require("../Control.Extend");
var Control_MonadPlus = require("../Control.MonadPlus");
var Control_Plus = require("../Control.Plus");
var Data_Functor_Invariant = require("../Data.Functor.Invariant");
var Data_Monoid = require("../Data.Monoid");
var Nothing = (function () {
    function Nothing() {

    };
    Nothing.value = new Nothing();
    return Nothing;
})();
var Just = (function () {
    function Just(value0) {
        this.value0 = value0;
    };
    Just.create = function (value0) {
        return new Just(value0);
    };
    return Just;
})();
var showMaybe = function (dictShow) {
    return new Prelude.Show(function (v) {
        if (v instanceof Just) {
            return "Just (" + (Prelude.show(dictShow)(v.value0) + ")");
        };
        if (v instanceof Nothing) {
            return "Nothing";
        };
        throw new Error("Failed pattern match at Data.Maybe line 290, column 3 - line 291, column 3: " + [ v.constructor.name ]);
    });
};
var semigroupMaybe = function (dictSemigroup) {
    return new Prelude.Semigroup(function (v) {
        return function (v1) {
            if (v instanceof Nothing) {
                return v1;
            };
            if (v1 instanceof Nothing) {
                return v;
            };
            if (v instanceof Just && v1 instanceof Just) {
                return new Just(Prelude["<>"](dictSemigroup)(v.value0)(v1.value0));
            };
            throw new Error("Failed pattern match at Data.Maybe line 232, column 3 - line 233, column 3: " + [ v.constructor.name, v1.constructor.name ]);
        };
    });
};
var monoidMaybe = function (dictSemigroup) {
    return new Data_Monoid.Monoid(function () {
        return semigroupMaybe(dictSemigroup);
    }, Nothing.value);
};
var maybe$prime = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Nothing) {
                return v(Prelude.unit);
            };
            if (v2 instanceof Just) {
                return v1(v2.value0);
            };
            throw new Error("Failed pattern match at Data.Maybe line 40, column 1 - line 41, column 1: " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};
var maybe = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Nothing) {
                return v;
            };
            if (v2 instanceof Just) {
                return v1(v2.value0);
            };
            throw new Error("Failed pattern match at Data.Maybe line 27, column 1 - line 28, column 1: " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};
var isNothing = maybe(true)(Prelude["const"](false));
var isJust = maybe(false)(Prelude["const"](true));
var functorMaybe = new Prelude.Functor(function (v) {
    return function (v1) {
        if (v1 instanceof Just) {
            return new Just(v(v1.value0));
        };
        return Nothing.value;
    };
});
var invariantMaybe = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorMaybe));
var fromMaybe$prime = function (a) {
    return maybe$prime(a)(Prelude.id(Prelude.categoryFn));
};
var fromMaybe = function (a) {
    return maybe(a)(Prelude.id(Prelude.categoryFn));
};
var extendMaybe = new Control_Extend.Extend(function () {
    return functorMaybe;
}, function (v) {
    return function (v1) {
        if (v1 instanceof Nothing) {
            return Nothing.value;
        };
        return new Just(v(v1));
    };
});
var eqMaybe = function (dictEq) {
    return new Prelude.Eq(function (v) {
        return function (v1) {
            if (v instanceof Nothing && v1 instanceof Nothing) {
                return true;
            };
            if (v instanceof Just && v1 instanceof Just) {
                return Prelude["=="](dictEq)(v.value0)(v1.value0);
            };
            return false;
        };
    });
};
var ordMaybe = function (dictOrd) {
    return new Prelude.Ord(function () {
        return eqMaybe(dictOrd["__superclass_Prelude.Eq_0"]());
    }, function (v) {
        return function (v1) {
            if (v instanceof Just && v1 instanceof Just) {
                return Prelude.compare(dictOrd)(v.value0)(v1.value0);
            };
            if (v instanceof Nothing && v1 instanceof Nothing) {
                return Prelude.EQ.value;
            };
            if (v instanceof Nothing) {
                return Prelude.LT.value;
            };
            if (v1 instanceof Nothing) {
                return Prelude.GT.value;
            };
            throw new Error("Failed pattern match at Data.Maybe line 270, column 3 - line 271, column 3: " + [ v.constructor.name, v1.constructor.name ]);
        };
    });
};
var boundedMaybe = function (dictBounded) {
    return new Prelude.Bounded(Nothing.value, new Just(Prelude.top(dictBounded)));
};
var boundedOrdMaybe = function (dictBoundedOrd) {
    return new Prelude.BoundedOrd(function () {
        return boundedMaybe(dictBoundedOrd["__superclass_Prelude.Bounded_0"]());
    }, function () {
        return ordMaybe(dictBoundedOrd["__superclass_Prelude.Ord_1"]());
    });
};
var applyMaybe = new Prelude.Apply(function () {
    return functorMaybe;
}, function (v) {
    return function (v1) {
        if (v instanceof Just) {
            return Prelude["<$>"](functorMaybe)(v.value0)(v1);
        };
        if (v instanceof Nothing) {
            return Nothing.value;
        };
        throw new Error("Failed pattern match at Data.Maybe line 122, column 3 - line 123, column 3: " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var bindMaybe = new Prelude.Bind(function () {
    return applyMaybe;
}, function (v) {
    return function (v1) {
        if (v instanceof Just) {
            return v1(v.value0);
        };
        if (v instanceof Nothing) {
            return Nothing.value;
        };
        throw new Error("Failed pattern match at Data.Maybe line 181, column 3 - line 182, column 3: " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var booleanAlgebraMaybe = function (dictBooleanAlgebra) {
    return new Prelude.BooleanAlgebra(function () {
        return boundedMaybe(dictBooleanAlgebra["__superclass_Prelude.Bounded_0"]());
    }, function (x) {
        return function (y) {
            return Prelude["<*>"](applyMaybe)(Prelude["<$>"](functorMaybe)(Prelude.conj(dictBooleanAlgebra))(x))(y);
        };
    }, function (x) {
        return function (y) {
            return Prelude["<*>"](applyMaybe)(Prelude["<$>"](functorMaybe)(Prelude.disj(dictBooleanAlgebra))(x))(y);
        };
    }, Prelude.map(functorMaybe)(Prelude.not(dictBooleanAlgebra)));
};
var semiringMaybe = function (dictSemiring) {
    return new Prelude.Semiring(function (x) {
        return function (y) {
            return Prelude["<*>"](applyMaybe)(Prelude["<$>"](functorMaybe)(Prelude.add(dictSemiring))(x))(y);
        };
    }, function (x) {
        return function (y) {
            return Prelude["<*>"](applyMaybe)(Prelude["<$>"](functorMaybe)(Prelude.mul(dictSemiring))(x))(y);
        };
    }, new Just(Prelude.one(dictSemiring)), new Just(Prelude.zero(dictSemiring)));
};
var moduloSemiringMaybe = function (dictModuloSemiring) {
    return new Prelude.ModuloSemiring(function () {
        return semiringMaybe(dictModuloSemiring["__superclass_Prelude.Semiring_0"]());
    }, function (x) {
        return function (y) {
            return Prelude["<*>"](applyMaybe)(Prelude["<$>"](functorMaybe)(Prelude.div(dictModuloSemiring))(x))(y);
        };
    }, function (x) {
        return function (y) {
            return Prelude["<*>"](applyMaybe)(Prelude["<$>"](functorMaybe)(Prelude.mod(dictModuloSemiring))(x))(y);
        };
    });
};
var ringMaybe = function (dictRing) {
    return new Prelude.Ring(function () {
        return semiringMaybe(dictRing["__superclass_Prelude.Semiring_0"]());
    }, function (x) {
        return function (y) {
            return Prelude["<*>"](applyMaybe)(Prelude["<$>"](functorMaybe)(Prelude.sub(dictRing))(x))(y);
        };
    });
};
var divisionRingMaybe = function (dictDivisionRing) {
    return new Prelude.DivisionRing(function () {
        return moduloSemiringMaybe(dictDivisionRing["__superclass_Prelude.ModuloSemiring_1"]());
    }, function () {
        return ringMaybe(dictDivisionRing["__superclass_Prelude.Ring_0"]());
    });
};
var numMaybe = function (dictNum) {
    return new Prelude.Num(function () {
        return divisionRingMaybe(dictNum["__superclass_Prelude.DivisionRing_0"]());
    });
};
var applicativeMaybe = new Prelude.Applicative(function () {
    return applyMaybe;
}, Just.create);
var monadMaybe = new Prelude.Monad(function () {
    return applicativeMaybe;
}, function () {
    return bindMaybe;
});
var altMaybe = new Control_Alt.Alt(function () {
    return functorMaybe;
}, function (v) {
    return function (v1) {
        if (v instanceof Nothing) {
            return v1;
        };
        return v;
    };
});
var plusMaybe = new Control_Plus.Plus(function () {
    return altMaybe;
}, Nothing.value);
var alternativeMaybe = new Control_Alternative.Alternative(function () {
    return plusMaybe;
}, function () {
    return applicativeMaybe;
});
var monadPlusMaybe = new Control_MonadPlus.MonadPlus(function () {
    return alternativeMaybe;
}, function () {
    return monadMaybe;
});
module.exports = {
    Nothing: Nothing, 
    Just: Just, 
    isNothing: isNothing, 
    isJust: isJust, 
    "fromMaybe'": fromMaybe$prime, 
    fromMaybe: fromMaybe, 
    "maybe'": maybe$prime, 
    maybe: maybe, 
    functorMaybe: functorMaybe, 
    applyMaybe: applyMaybe, 
    applicativeMaybe: applicativeMaybe, 
    altMaybe: altMaybe, 
    plusMaybe: plusMaybe, 
    alternativeMaybe: alternativeMaybe, 
    bindMaybe: bindMaybe, 
    monadMaybe: monadMaybe, 
    monadPlusMaybe: monadPlusMaybe, 
    extendMaybe: extendMaybe, 
    invariantMaybe: invariantMaybe, 
    semigroupMaybe: semigroupMaybe, 
    monoidMaybe: monoidMaybe, 
    semiringMaybe: semiringMaybe, 
    moduloSemiringMaybe: moduloSemiringMaybe, 
    ringMaybe: ringMaybe, 
    divisionRingMaybe: divisionRingMaybe, 
    numMaybe: numMaybe, 
    eqMaybe: eqMaybe, 
    ordMaybe: ordMaybe, 
    boundedMaybe: boundedMaybe, 
    boundedOrdMaybe: boundedOrdMaybe, 
    booleanAlgebraMaybe: booleanAlgebraMaybe, 
    showMaybe: showMaybe
};
