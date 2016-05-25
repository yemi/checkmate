// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Control_Comonad = require("../Control.Comonad");
var Control_Extend = require("../Control.Extend");
var Data_Foldable = require("../Data.Foldable");
var Data_Functor_Invariant = require("../Data.Functor.Invariant");
var Data_Monoid = require("../Data.Monoid");
var Data_Traversable = require("../Data.Traversable");
var Identity = function (x) {
    return x;
};
var showIdentity = function (dictShow) {
    return new Prelude.Show(function (v) {
        return "Identity (" + (Prelude.show(dictShow)(v) + ")");
    });
};
var semiringIdentity = function (dictSemiring) {
    return new Prelude.Semiring(function (v) {
        return function (v1) {
            return Prelude["+"](dictSemiring)(v)(v1);
        };
    }, function (v) {
        return function (v1) {
            return Prelude["*"](dictSemiring)(v)(v1);
        };
    }, Prelude.one(dictSemiring), Prelude.zero(dictSemiring));
};
var semigroupIdenity = function (dictSemigroup) {
    return new Prelude.Semigroup(function (v) {
        return function (v1) {
            return Prelude["<>"](dictSemigroup)(v)(v1);
        };
    });
};
var runIdentity = function (v) {
    return v;
};
var ringIdentity = function (dictRing) {
    return new Prelude.Ring(function () {
        return semiringIdentity(dictRing["__superclass_Prelude.Semiring_0"]());
    }, function (v) {
        return function (v1) {
            return Prelude["-"](dictRing)(v)(v1);
        };
    });
};
var monoidIdentity = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupIdenity(dictMonoid["__superclass_Prelude.Semigroup_0"]());
    }, Data_Monoid.mempty(dictMonoid));
};
var moduloSemiringIdentity = function (dictModuloSemiring) {
    return new Prelude.ModuloSemiring(function () {
        return semiringIdentity(dictModuloSemiring["__superclass_Prelude.Semiring_0"]());
    }, function (v) {
        return function (v1) {
            return Prelude["/"](dictModuloSemiring)(v)(v1);
        };
    }, function (v) {
        return function (v1) {
            return Prelude.mod(dictModuloSemiring)(v)(v1);
        };
    });
};
var functorIdentity = new Prelude.Functor(function (f) {
    return function (v) {
        return f(v);
    };
});
var invariantIdentity = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorIdentity));
var foldableIdentity = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var traversableIdentity = new Data_Traversable.Traversable(function () {
    return foldableIdentity;
}, function () {
    return functorIdentity;
}, function (dictApplicative) {
    return function (v) {
        return Prelude["<$>"]((dictApplicative["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]())(Identity)(v);
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Prelude["<$>"]((dictApplicative["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]())(Identity)(f(v));
        };
    };
});
var extendIdentity = new Control_Extend.Extend(function () {
    return functorIdentity;
}, function (f) {
    return function (m) {
        return f(m);
    };
});
var eqIdentity = function (dictEq) {
    return new Prelude.Eq(function (v) {
        return function (v1) {
            return Prelude["=="](dictEq)(v)(v1);
        };
    });
};
var ordIdentity = function (dictOrd) {
    return new Prelude.Ord(function () {
        return eqIdentity(dictOrd["__superclass_Prelude.Eq_0"]());
    }, function (v) {
        return function (v1) {
            return Prelude.compare(dictOrd)(v)(v1);
        };
    });
};
var divisionRingIdentity = function (dictDivisionRing) {
    return new Prelude.DivisionRing(function () {
        return moduloSemiringIdentity(dictDivisionRing["__superclass_Prelude.ModuloSemiring_1"]());
    }, function () {
        return ringIdentity(dictDivisionRing["__superclass_Prelude.Ring_0"]());
    });
};
var numIdentity = function (dictNum) {
    return new Prelude.Num(function () {
        return divisionRingIdentity(dictNum["__superclass_Prelude.DivisionRing_0"]());
    });
};
var comonadIdentity = new Control_Comonad.Comonad(function () {
    return extendIdentity;
}, function (v) {
    return v;
});
var boundedIdentity = function (dictBounded) {
    return new Prelude.Bounded(Prelude.bottom(dictBounded), Prelude.top(dictBounded));
};
var boundedOrdIdentity = function (dictBoundedOrd) {
    return new Prelude.BoundedOrd(function () {
        return boundedIdentity(dictBoundedOrd["__superclass_Prelude.Bounded_0"]());
    }, function () {
        return ordIdentity(dictBoundedOrd["__superclass_Prelude.Ord_1"]());
    });
};
var booleanAlgebraIdentity = function (dictBooleanAlgebra) {
    return new Prelude.BooleanAlgebra(function () {
        return boundedIdentity(dictBooleanAlgebra["__superclass_Prelude.Bounded_0"]());
    }, function (v) {
        return function (v1) {
            return Prelude.conj(dictBooleanAlgebra)(v)(v1);
        };
    }, function (v) {
        return function (v1) {
            return Prelude.disj(dictBooleanAlgebra)(v)(v1);
        };
    }, function (v) {
        return Prelude.not(dictBooleanAlgebra)(v);
    });
};
var applyIdentity = new Prelude.Apply(function () {
    return functorIdentity;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindIdentity = new Prelude.Bind(function () {
    return applyIdentity;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeIdentity = new Prelude.Applicative(function () {
    return applyIdentity;
}, Identity);
var monadIdentity = new Prelude.Monad(function () {
    return applicativeIdentity;
}, function () {
    return bindIdentity;
});
module.exports = {
    Identity: Identity, 
    runIdentity: runIdentity, 
    eqIdentity: eqIdentity, 
    ordIdentity: ordIdentity, 
    boundedIdentity: boundedIdentity, 
    boundedOrdIdentity: boundedOrdIdentity, 
    booleanAlgebraIdentity: booleanAlgebraIdentity, 
    semigroupIdenity: semigroupIdenity, 
    monoidIdentity: monoidIdentity, 
    semiringIdentity: semiringIdentity, 
    moduloSemiringIdentity: moduloSemiringIdentity, 
    ringIdentity: ringIdentity, 
    divisionRingIdentity: divisionRingIdentity, 
    numIdentity: numIdentity, 
    showIdentity: showIdentity, 
    functorIdentity: functorIdentity, 
    invariantIdentity: invariantIdentity, 
    applyIdentity: applyIdentity, 
    applicativeIdentity: applicativeIdentity, 
    bindIdentity: bindIdentity, 
    monadIdentity: monadIdentity, 
    extendIdentity: extendIdentity, 
    comonadIdentity: comonadIdentity, 
    foldableIdentity: foldableIdentity, 
    traversableIdentity: traversableIdentity
};