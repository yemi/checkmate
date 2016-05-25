// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Data_Either = require("../Data.Either");
var Data_Monoid = require("../Data.Monoid");
var Data_Tuple = require("../Data.Tuple");
var Control_Alt = require("../Control.Alt");
var Control_Alternative = require("../Control.Alternative");
var Control_Monad_Cont_Class = require("../Control.Monad.Cont.Class");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class");
var Control_Monad_Reader_Class = require("../Control.Monad.Reader.Class");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class");
var Control_Monad_State_Class = require("../Control.Monad.State.Class");
var Control_Monad_Trans = require("../Control.Monad.Trans");
var Control_Monad_Writer_Class = require("../Control.Monad.Writer.Class");
var Control_MonadPlus = require("../Control.MonadPlus");
var Control_Plus = require("../Control.Plus");
var WriterT = function (x) {
    return x;
};
var runWriterT = function (v) {
    return v;
};
var monadTransWriterT = function (dictMonoid) {
    return new Control_Monad_Trans.MonadTrans(function (dictMonad) {
        return function (m) {
            return WriterT(Prelude.bind(dictMonad["__superclass_Prelude.Bind_1"]())(m)(function (v) {
                return Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())(new Data_Tuple.Tuple(v, Data_Monoid.mempty(dictMonoid)));
            }));
        };
    });
};
var mapWriterT = function (f) {
    return function (m) {
        return WriterT(f(runWriterT(m)));
    };
};
var functorWriterT = function (dictFunctor) {
    return new Prelude.Functor(function (f) {
        return mapWriterT(Prelude["<$>"](dictFunctor)(function (v) {
            return new Data_Tuple.Tuple(f(v.value0), v.value1);
        }));
    });
};
var execWriterT = function (dictApply) {
    return function (m) {
        return Prelude["<$>"](dictApply["__superclass_Prelude.Functor_0"]())(Data_Tuple.snd)(runWriterT(m));
    };
};
var applyWriterT = function (dictSemigroup) {
    return function (dictApply) {
        return new Prelude.Apply(function () {
            return functorWriterT(dictApply["__superclass_Prelude.Functor_0"]());
        }, function (f) {
            return function (v) {
                return WriterT((function () {
                    var k = function (v1) {
                        return function (v2) {
                            return new Data_Tuple.Tuple(v1.value0(v2.value0), Prelude["<>"](dictSemigroup)(v1.value1)(v2.value1));
                        };
                    };
                    return Prelude["<*>"](dictApply)(Prelude["<$>"](dictApply["__superclass_Prelude.Functor_0"]())(k)(runWriterT(f)))(runWriterT(v));
                })());
            };
        });
    };
};
var bindWriterT = function (dictSemigroup) {
    return function (dictMonad) {
        return new Prelude.Bind(function () {
            return applyWriterT(dictSemigroup)((dictMonad["__superclass_Prelude.Bind_1"]())["__superclass_Prelude.Apply_0"]());
        }, function (m) {
            return function (k) {
                return WriterT(Prelude.bind(dictMonad["__superclass_Prelude.Bind_1"]())(runWriterT(m))(function (v) {
                    return Prelude.bind(dictMonad["__superclass_Prelude.Bind_1"]())(runWriterT(k(v.value0)))(function (v1) {
                        return Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())(new Data_Tuple.Tuple(v1.value0, Prelude["<>"](dictSemigroup)(v.value1)(v1.value1)));
                    });
                }));
            };
        });
    };
};
var applicativeWriterT = function (dictMonoid) {
    return function (dictApplicative) {
        return new Prelude.Applicative(function () {
            return applyWriterT(dictMonoid["__superclass_Prelude.Semigroup_0"]())(dictApplicative["__superclass_Prelude.Apply_0"]());
        }, function (a) {
            return WriterT(Prelude.pure(dictApplicative)(new Data_Tuple.Tuple(a, Data_Monoid.mempty(dictMonoid))));
        });
    };
};
var monadWriterT = function (dictMonoid) {
    return function (dictMonad) {
        return new Prelude.Monad(function () {
            return applicativeWriterT(dictMonoid)(dictMonad["__superclass_Prelude.Applicative_0"]());
        }, function () {
            return bindWriterT(dictMonoid["__superclass_Prelude.Semigroup_0"]())(dictMonad);
        });
    };
};
var monadContWriterT = function (dictMonoid) {
    return function (dictMonadCont) {
        return new Control_Monad_Cont_Class.MonadCont(function () {
            return monadWriterT(dictMonoid)(dictMonadCont["__superclass_Prelude.Monad_0"]());
        }, function (f) {
            return WriterT(Control_Monad_Cont_Class.callCC(dictMonadCont)(function (c) {
                return runWriterT(f(function (a) {
                    return WriterT(c(new Data_Tuple.Tuple(a, Data_Monoid.mempty(dictMonoid))));
                }));
            }));
        });
    };
};
var monadEffWriter = function (dictMonad) {
    return function (dictMonoid) {
        return function (dictMonadEff) {
            return new Control_Monad_Eff_Class.MonadEff(function () {
                return monadWriterT(dictMonoid)(dictMonad);
            }, function ($78) {
                return Control_Monad_Trans.lift(monadTransWriterT(dictMonoid))(dictMonad)(Control_Monad_Eff_Class.liftEff(dictMonadEff)($78));
            });
        };
    };
};
var monadErrorWriterT = function (dictMonoid) {
    return function (dictMonadError) {
        return new Control_Monad_Error_Class.MonadError(function () {
            return monadWriterT(dictMonoid)(dictMonadError["__superclass_Prelude.Monad_0"]());
        }, function (m) {
            return function (h) {
                return WriterT(Control_Monad_Error_Class.catchError(dictMonadError)(runWriterT(m))(function (e) {
                    return runWriterT(h(e));
                }));
            };
        }, function (e) {
            return Control_Monad_Trans.lift(monadTransWriterT(dictMonoid))(dictMonadError["__superclass_Prelude.Monad_0"]())(Control_Monad_Error_Class.throwError(dictMonadError)(e));
        });
    };
};
var monadReaderWriterT = function (dictMonoid) {
    return function (dictMonadReader) {
        return new Control_Monad_Reader_Class.MonadReader(function () {
            return monadWriterT(dictMonoid)(dictMonadReader["__superclass_Prelude.Monad_0"]());
        }, Control_Monad_Trans.lift(monadTransWriterT(dictMonoid))(dictMonadReader["__superclass_Prelude.Monad_0"]())(Control_Monad_Reader_Class.ask(dictMonadReader)), function (f) {
            return mapWriterT(Control_Monad_Reader_Class.local(dictMonadReader)(f));
        });
    };
};
var monadRecWriterT = function (dictMonoid) {
    return function (dictMonadRec) {
        return new Control_Monad_Rec_Class.MonadRec(function () {
            return monadWriterT(dictMonoid)(dictMonadRec["__superclass_Prelude.Monad_0"]());
        }, function (f) {
            return function (a) {
                var f$prime = function (v) {
                    return Prelude.bind((dictMonadRec["__superclass_Prelude.Monad_0"]())["__superclass_Prelude.Bind_1"]())(runWriterT(f(v.value0)))(function (v1) {
                        return Prelude["return"]((dictMonadRec["__superclass_Prelude.Monad_0"]())["__superclass_Prelude.Applicative_0"]())((function () {
                            if (v1.value0 instanceof Data_Either.Left) {
                                return new Data_Either.Left(new Data_Tuple.Tuple(v1.value0.value0, Prelude["<>"](dictMonoid["__superclass_Prelude.Semigroup_0"]())(v.value1)(v1.value1)));
                            };
                            if (v1.value0 instanceof Data_Either.Right) {
                                return new Data_Either.Right(new Data_Tuple.Tuple(v1.value0.value0, Prelude["<>"](dictMonoid["__superclass_Prelude.Semigroup_0"]())(v.value1)(v1.value1)));
                            };
                            throw new Error("Failed pattern match at Control.Monad.Writer.Trans line 80, column 7 - line 84, column 1: " + [ v1.value0.constructor.name ]);
                        })());
                    });
                };
                return WriterT(Control_Monad_Rec_Class.tailRecM(dictMonadRec)(f$prime)(new Data_Tuple.Tuple(a, Data_Monoid.mempty(dictMonoid))));
            };
        });
    };
};
var monadStateWriterT = function (dictMonoid) {
    return function (dictMonadState) {
        return new Control_Monad_State_Class.MonadState(function () {
            return monadWriterT(dictMonoid)(dictMonadState["__superclass_Prelude.Monad_0"]());
        }, function (f) {
            return Control_Monad_Trans.lift(monadTransWriterT(dictMonoid))(dictMonadState["__superclass_Prelude.Monad_0"]())(Control_Monad_State_Class.state(dictMonadState)(f));
        });
    };
};
var monadWriterWriterT = function (dictMonoid) {
    return function (dictMonad) {
        return new Control_Monad_Writer_Class.MonadWriter(function () {
            return monadWriterT(dictMonoid)(dictMonad);
        }, function (m) {
            return WriterT(Prelude.bind(dictMonad["__superclass_Prelude.Bind_1"]())(runWriterT(m))(function (v) {
                return Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())(new Data_Tuple.Tuple(new Data_Tuple.Tuple(v.value0, v.value1), v.value1));
            }));
        }, function (m) {
            return WriterT(Prelude.bind(dictMonad["__superclass_Prelude.Bind_1"]())(runWriterT(m))(function (v) {
                return Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())(new Data_Tuple.Tuple(v.value0.value0, v.value0.value1(v.value1)));
            }));
        }, function ($79) {
            return WriterT(Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())($79));
        });
    };
};
var altWriterT = function (dictAlt) {
    return new Control_Alt.Alt(function () {
        return functorWriterT(dictAlt["__superclass_Prelude.Functor_0"]());
    }, function (m) {
        return function (n) {
            return WriterT(Control_Alt["<|>"](dictAlt)(runWriterT(m))(runWriterT(n)));
        };
    });
};
var plusWriterT = function (dictPlus) {
    return new Control_Plus.Plus(function () {
        return altWriterT(dictPlus["__superclass_Control.Alt.Alt_0"]());
    }, Control_Plus.empty(dictPlus));
};
var alternativeWriterT = function (dictMonoid) {
    return function (dictAlternative) {
        return new Control_Alternative.Alternative(function () {
            return plusWriterT(dictAlternative["__superclass_Control.Plus.Plus_1"]());
        }, function () {
            return applicativeWriterT(dictMonoid)(dictAlternative["__superclass_Prelude.Applicative_0"]());
        });
    };
};
var monadPlusWriterT = function (dictMonoid) {
    return function (dictMonadPlus) {
        return new Control_MonadPlus.MonadPlus(function () {
            return alternativeWriterT(dictMonoid)(dictMonadPlus["__superclass_Control.Alternative.Alternative_1"]());
        }, function () {
            return monadWriterT(dictMonoid)(dictMonadPlus["__superclass_Prelude.Monad_0"]());
        });
    };
};
module.exports = {
    WriterT: WriterT, 
    mapWriterT: mapWriterT, 
    execWriterT: execWriterT, 
    runWriterT: runWriterT, 
    functorWriterT: functorWriterT, 
    applyWriterT: applyWriterT, 
    applicativeWriterT: applicativeWriterT, 
    altWriterT: altWriterT, 
    plusWriterT: plusWriterT, 
    alternativeWriterT: alternativeWriterT, 
    bindWriterT: bindWriterT, 
    monadWriterT: monadWriterT, 
    monadRecWriterT: monadRecWriterT, 
    monadPlusWriterT: monadPlusWriterT, 
    monadTransWriterT: monadTransWriterT, 
    monadEffWriter: monadEffWriter, 
    monadContWriterT: monadContWriterT, 
    monadErrorWriterT: monadErrorWriterT, 
    monadReaderWriterT: monadReaderWriterT, 
    monadStateWriterT: monadStateWriterT, 
    monadWriterWriterT: monadWriterWriterT
};