// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Control_Comonad = require("../Control.Comonad");
var Data_DateTime = require("../Data.DateTime");
var Data_Generic = require("../Data.Generic");
var Data_Maybe = require("../Data.Maybe");
var Data_Time_Duration = require("../Data.Time.Duration");
var Data_Eq = require("../Data.Eq");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Control_Apply = require("../Control.Apply");
var Data_Unit = require("../Data.Unit");
var Data_Show = require("../Data.Show");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Functor = require("../Data.Functor");
var Control_Extend = require("../Control.Extend");
var LocaleName = function (x) {
    return x;
};
var Locale = (function () {
    function Locale(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Locale.create = function (value0) {
        return function (value1) {
            return new Locale(value0, value1);
        };
    };
    return Locale;
})();
var LocalValue = (function () {
    function LocalValue(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    LocalValue.create = function (value0) {
        return function (value1) {
            return new LocalValue(value0, value1);
        };
    };
    return LocalValue;
})();
var showLocaleName = new Data_Show.Show(function (v) {
    return "(LocaleName " + (Data_Show.show(Data_Show.showString)(v) + ")");
});
var showLocale = new Data_Show.Show(function (v) {
    return "(Locale " + (Data_Show.show(Data_Maybe.showMaybe(showLocaleName))(v.value0) + (" " + (Data_Show.show(Data_Time_Duration.showMinutes)(v.value1) + ")")));
});
var showLocalValue = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(LocalValue " + (Data_Show.show(showLocale)(v.value0) + (" " + (Data_Show.show(dictShow)(v.value1) + ")")));
    });
};
var genericLocaleName = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.DateTime.Locale.LocaleName" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(LocaleName))(Data_Generic.fromSpine(Data_Generic.genericString)(v.value1[0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("Data.DateTime.Locale.LocaleName", [ {
        sigConstructor: "Data.DateTime.Locale.LocaleName", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("Data.DateTime.Locale.LocaleName", [ function ($dollarq) {
        return Data_Generic.toSpine(Data_Generic.genericString)(v);
    } ]);
});
var genericLocale = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "Data.DateTime.Locale.Locale" && v.value1.length === 2)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Locale.create))(Data_Generic.fromSpine(Data_Generic.genericMaybe(genericLocaleName))(v.value1[0](Data_Unit.unit))))(Data_Generic.fromSpine(Data_Time_Duration.genericMinutes)(v.value1[1](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("Data.DateTime.Locale.Locale", [ {
        sigConstructor: "Data.DateTime.Locale.Locale", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericMaybe(genericLocaleName))(Data_Generic.anyProxy);
        }, function ($dollarq1) {
            return Data_Generic.toSignature(Data_Time_Duration.genericMinutes)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("Data.DateTime.Locale.Locale", [ function ($dollarq) {
        return Data_Generic.toSpine(Data_Generic.genericMaybe(genericLocaleName))(v.value0);
    }, function ($dollarq) {
        return Data_Generic.toSpine(Data_Time_Duration.genericMinutes)(v.value1);
    } ]);
});
var genericLocalValue = function (dictGeneric) {
    return new Data_Generic.Generic(function (v) {
        if (v instanceof Data_Generic.SProd && (v.value0 === "Data.DateTime.Locale.LocalValue" && v.value1.length === 2)) {
            return Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(LocalValue.create))(Data_Generic.fromSpine(genericLocale)(v.value1[0](Data_Unit.unit))))(Data_Generic.fromSpine(dictGeneric)(v.value1[1](Data_Unit.unit)));
        };
        return Data_Maybe.Nothing.value;
    }, function ($dollarq) {
        return new Data_Generic.SigProd("Data.DateTime.Locale.LocalValue", [ {
            sigConstructor: "Data.DateTime.Locale.LocalValue", 
            sigValues: [ function ($dollarq1) {
                return Data_Generic.toSignature(genericLocale)(Data_Generic.anyProxy);
            }, function ($dollarq1) {
                return Data_Generic.toSignature(dictGeneric)(Data_Generic.anyProxy);
            } ]
        } ]);
    }, function (v) {
        return new Data_Generic.SProd("Data.DateTime.Locale.LocalValue", [ function ($dollarq) {
            return Data_Generic.toSpine(genericLocale)(v.value0);
        }, function ($dollarq) {
            return Data_Generic.toSpine(dictGeneric)(v.value1);
        } ]);
    });
};
var functorLocalValue = new Data_Functor.Functor(function (f) {
    return function (v) {
        return new LocalValue(v.value0, f(v.value1));
    };
});
var extendLocalValue = new Control_Extend.Extend(function () {
    return functorLocalValue;
}, function (f) {
    return function (v) {
        return new LocalValue(v.value0, f(v));
    };
});
var eqLocaleName = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordLocaleName = new Data_Ord.Ord(function () {
    return eqLocaleName;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordString)(x)(y);
    };
});
var eqLocale = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(Data_Maybe.eqMaybe(eqLocaleName))(x.value0)(y.value0) && Data_Eq.eq(Data_Time_Duration.eqMinutes)(x.value1)(y.value1);
    };
});
var ordLocale = new Data_Ord.Ord(function () {
    return eqLocale;
}, function (x) {
    return function (y) {
        var $106 = Data_Ord.compare(Data_Maybe.ordMaybe(ordLocaleName))(x.value0)(y.value0);
        if ($106 instanceof Data_Ordering.LT) {
            return Data_Ordering.LT.value;
        };
        if ($106 instanceof Data_Ordering.GT) {
            return Data_Ordering.GT.value;
        };
        return Data_Ord.compare(Data_Time_Duration.ordMinutes)(x.value1)(y.value1);
    };
});
var eqLocalValue = function (dictEq) {
    return new Data_Eq.Eq(function (x) {
        return function (y) {
            return Data_Eq.eq(eqLocale)(x.value0)(y.value0) && Data_Eq.eq(dictEq)(x.value1)(y.value1);
        };
    });
};
var ordLocalValue = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqLocalValue(dictOrd["__superclass_Data.Eq.Eq_0"]());
    }, function (x) {
        return function (y) {
            var $119 = Data_Ord.compare(ordLocale)(x.value0)(y.value0);
            if ($119 instanceof Data_Ordering.LT) {
                return Data_Ordering.LT.value;
            };
            if ($119 instanceof Data_Ordering.GT) {
                return Data_Ordering.GT.value;
            };
            return Data_Ord.compare(dictOrd)(x.value1)(y.value1);
        };
    });
};
var comonadLocalValue = new Control_Comonad.Comonad(function () {
    return extendLocalValue;
}, function (v) {
    return v.value1;
});
module.exports = {
    LocalValue: LocalValue, 
    Locale: Locale, 
    LocaleName: LocaleName, 
    eqLocale: eqLocale, 
    ordLocale: ordLocale, 
    genericLocale: genericLocale, 
    showLocale: showLocale, 
    eqLocaleName: eqLocaleName, 
    ordLocaleName: ordLocaleName, 
    genericLocaleName: genericLocaleName, 
    showLocaleName: showLocaleName, 
    eqLocalValue: eqLocalValue, 
    ordLocalValue: ordLocalValue, 
    genericLocalValue: genericLocalValue, 
    showLocalValue: showLocalValue, 
    functorLocalValue: functorLocalValue, 
    extendLocalValue: extendLocalValue, 
    comonadLocalValue: comonadLocalValue
};
