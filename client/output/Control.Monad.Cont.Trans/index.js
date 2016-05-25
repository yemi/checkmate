// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Control_Monad_Trans = require("../Control.Monad.Trans");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Cont_Class = require("../Control.Monad.Cont.Class");
var Control_Monad_Reader_Class = require("../Control.Monad.Reader.Class");
var Control_Monad_State_Class = require("../Control.Monad.State.Class");
var ContT = function (x) {
    return x;
};
var runContT = function (v) {
    return function (k) {
        return v(k);
    };
};
var withContT = function (f) {
    return function (m) {
        return function (k) {
            return runContT(m)(f(k));
        };
    };
};
var monadTransContT = new Control_Monad_Trans.MonadTrans(function (dictMonad) {
    return function (m) {
        return function (k) {
            return Prelude[">>="](dictMonad["__superclass_Prelude.Bind_1"]())(m)(k);
        };
    };
});
var mapContT = function (f) {
    return function (m) {
        return function (k) {
            return f(runContT(m)(k));
        };
    };
};
var functorContT = function (dictMonad) {
    return new Prelude.Functor(function (f) {
        return function (m) {
            return function (k) {
                return runContT(m)(function (a) {
                    return k(f(a));
                });
            };
        };
    });
};
var applyContT = function (dictMonad) {
    return new Prelude.Apply(function () {
        return functorContT(dictMonad);
    }, function (f) {
        return function (v) {
            return function (k) {
                return runContT(f)(function (g) {
                    return runContT(v)(function (a) {
                        return k(g(a));
                    });
                });
            };
        };
    });
};
var bindContT = function (dictMonad) {
    return new Prelude.Bind(function () {
        return applyContT(dictMonad);
    }, function (m) {
        return function (k) {
            return function (k$prime) {
                return runContT(m)(function (a) {
                    return runContT(k(a))(k$prime);
                });
            };
        };
    });
};
var applicativeContT = function (dictMonad) {
    return new Prelude.Applicative(function () {
        return applyContT(dictMonad);
    }, function (a) {
        return function (k) {
            return k(a);
        };
    });
};
var monadContT = function (dictMonad) {
    return new Prelude.Monad(function () {
        return applicativeContT(dictMonad);
    }, function () {
        return bindContT(dictMonad);
    });
};
var monadContContT = function (dictMonad) {
    return new Control_Monad_Cont_Class.MonadCont(function () {
        return monadContT(dictMonad);
    }, function (f) {
        return function (k) {
            return runContT(f(function (a) {
                return function (v) {
                    return k(a);
                };
            }))(k);
        };
    });
};
var monadEffContT = function (dictMonadEff) {
    return new Control_Monad_Eff_Class.MonadEff(function () {
        return monadContT(dictMonadEff["__superclass_Prelude.Monad_0"]());
    }, function ($17) {
        return Control_Monad_Trans.lift(monadTransContT)(dictMonadEff["__superclass_Prelude.Monad_0"]())(Control_Monad_Eff_Class.liftEff(dictMonadEff)($17));
    });
};
var monadReaderContT = function (dictMonadReader) {
    return new Control_Monad_Reader_Class.MonadReader(function () {
        return monadContT(dictMonadReader["__superclass_Prelude.Monad_0"]());
    }, Control_Monad_Trans.lift(monadTransContT)(dictMonadReader["__superclass_Prelude.Monad_0"]())(Control_Monad_Reader_Class.ask(dictMonadReader)), function (f) {
        return function (c) {
            return function (k) {
                return Prelude.bind((dictMonadReader["__superclass_Prelude.Monad_0"]())["__superclass_Prelude.Bind_1"]())(Control_Monad_Reader_Class.ask(dictMonadReader))(function (v) {
                    return Control_Monad_Reader_Class.local(dictMonadReader)(f)(runContT(c)(function ($18) {
                        return Control_Monad_Reader_Class.local(dictMonadReader)(Prelude["const"](v))(k($18));
                    }));
                });
            };
        };
    });
};
var monadStateContT = function (dictMonadState) {
    return new Control_Monad_State_Class.MonadState(function () {
        return monadContT(dictMonadState["__superclass_Prelude.Monad_0"]());
    }, function ($19) {
        return Control_Monad_Trans.lift(monadTransContT)(dictMonadState["__superclass_Prelude.Monad_0"]())(Control_Monad_State_Class.state(dictMonadState)($19));
    });
};
module.exports = {
    ContT: ContT, 
    withContT: withContT, 
    mapContT: mapContT, 
    runContT: runContT, 
    monadContContT: monadContContT, 
    functorContT: functorContT, 
    applyContT: applyContT, 
    applicativeContT: applicativeContT, 
    bindContT: bindContT, 
    monadContT: monadContT, 
    monadTransContT: monadTransContT, 
    monadEffContT: monadEffContT, 
    monadReaderContT: monadReaderContT, 
    monadStateContT: monadStateContT
};
