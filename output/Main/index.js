// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Aff_Console = require("../Control.Monad.Aff.Console");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_Either = require("../Data.Either");
var Data_Foldable = require("../Data.Foldable");
var Data_Foreign = require("../Data.Foreign");
var Data_Foreign_Class = require("../Data.Foreign.Class");
var Data_Foreign_Generic = require("../Data.Foreign.Generic");
var Data_Generic = require("../Data.Generic");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Halogen = require("../Halogen");
var Halogen_Util = require("../Halogen.Util");
var Halogen_HTML_Indexed = require("../Halogen.HTML.Indexed");
var Halogen_HTML_Events_Indexed = require("../Halogen.HTML.Events.Indexed");
var Halogen_HTML_Properties_Indexed = require("../Halogen.HTML.Properties.Indexed");
var Network_HTTP_Affjax = require("../Network.HTTP.Affjax");
var Control_Apply = require("../Control.Apply");
var Data_Unit = require("../Data.Unit");
var Data_Show = require("../Data.Show");
var Control_Bind = require("../Control.Bind");
var Data_Function = require("../Data.Function");
var Control_Applicative = require("../Control.Applicative");
var Data_Foreign_Index = require("../Data.Foreign.Index");
var Network_HTTP_Affjax_Response = require("../Network.HTTP.Affjax.Response");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements");
var Data_Semigroup = require("../Data.Semigroup");
var Halogen_HTML = require("../Halogen.HTML");
var Data_Monoid = require("../Data.Monoid");
var Control_Monad_Free = require("../Control.Monad.Free");
var Halogen_Query = require("../Halogen.Query");
var Control_Monad_Aff_Free = require("../Control.Monad.Aff.Free");
var Halogen_Query_HalogenF = require("../Halogen.Query.HalogenF");
var Halogen_Component = require("../Halogen.Component");
var Halogen_Driver = require("../Halogen.Driver");
var Weather = function (x) {
    return x;
};
var Initialize = (function () {
    function Initialize(value0) {
        this.value0 = value0;
    };
    Initialize.create = function (value0) {
        return new Initialize(value0);
    };
    return Initialize;
})();
var weatherGeneric = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "Main.Weather" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Weather))((function (r) {
            if (r instanceof Data_Generic.SRecord && r.value0.length === 2) {
                return Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(function (conditions1) {
                    return function (temperature1) {
                        return {
                            conditions: conditions1, 
                            temperature: temperature1
                        };
                    };
                }))(Data_Generic.fromSpine(Data_Generic.genericString)((r.value0[0]).recValue(Data_Unit.unit))))(Data_Generic.fromSpine(Data_Generic.genericNumber)((r.value0[1]).recValue(Data_Unit.unit)));
            };
            return Data_Maybe.Nothing.value;
        })(v.value1[0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("Main.Weather", [ {
        sigConstructor: "Main.Weather", 
        sigValues: [ function ($dollarq1) {
            return new Data_Generic.SigRecord([ {
                recLabel: "conditions", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
                }
            }, {
                recLabel: "temperature", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericNumber)(Data_Generic.anyProxy);
                }
            } ]);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("Main.Weather", [ function ($dollarq) {
        return new Data_Generic.SRecord([ {
            recLabel: "conditions", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericString)(v.conditions);
            }
        }, {
            recLabel: "temperature", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericNumber)(v.temperature);
            }
        } ]);
    } ]);
});
var showWeather = new Data_Show.Show(Data_Generic.gShow(weatherGeneric));
var setInterval = function (ms) {
    return function (a) {
        return Data_Function.apply(Control_Monad_Aff["later'"](ms))(Control_Bind.bind(Control_Monad_Aff.bindAff)(a)(function () {
            return setInterval(ms)(a);
        }));
    };
};
var isForeignWeather = new Data_Foreign_Class.IsForeign(function (val) {
    return Control_Bind.bind(Data_Either.bindEither)(Data_Function.applyFlipped(val)(Control_Bind.composeKleisli(Data_Either.bindEither)(Data_Foreign_Class.readProp(Data_Foreign_Class.foreignIsForeign)(Data_Foreign_Index.indexString)("currently"))(Data_Foreign_Class.readProp(Data_Foreign_Class.numberIsForeign)(Data_Foreign_Index.indexString)("temperature"))))(function (v) {
        return Control_Bind.bind(Data_Either.bindEither)(Data_Function.applyFlipped(val)(Control_Bind.composeKleisli(Data_Either.bindEither)(Data_Foreign_Class.readProp(Data_Foreign_Class.foreignIsForeign)(Data_Foreign_Index.indexString)("currently"))(Data_Foreign_Class.readProp(Data_Foreign_Class.stringIsForeign)(Data_Foreign_Index.indexString)("icon"))))(function (v1) {
            return Data_Function.apply(Control_Applicative.pure(Data_Either.applicativeEither))({
                temperature: v, 
                conditions: v1
            });
        });
    });
});
var initialState = {
    busy: false, 
    weather: Data_Maybe.Nothing.value
};
var fetchWeather = Control_Bind.bind(Control_Monad_Aff.bindAff)(Network_HTTP_Affjax.get(Network_HTTP_Affjax_Response.responsableForeign)("https://api.forecast.io/forecast/da97e53efd4384ae3833b97fa122696f/59.3358021,17.9956715?units=si"))(function (v) {
    return Data_Function.apply(Control_Applicative.pure(Control_Monad_Aff.applicativeAff))(Data_Function.apply(Data_Either.either(Data_Function["const"](Data_Maybe.Nothing.value))(Data_Maybe.Just.create))(Data_Foreign_Class.read(isForeignWeather)(v.response)));
});
var ui = (function () {
    var render = function (st) {
        return Data_Function.apply(Halogen_HTML_Elements.div_)(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ Halogen_HTML_Elements.p_([ Halogen_HTML.text((function () {
            if (st.busy) {
                return "Loading...";
            };
            if (!st.busy) {
                return "";
            };
            throw new Error("Failed pattern match at Main line 71, column 21 - line 71, column 57: " + [ st.busy.constructor.name ]);
        })()) ]) ])(Data_Function.flip(Data_Foldable.foldMap(Data_Foldable.foldableMaybe)(Data_Monoid.monoidArray))(st.weather)(function (v) {
            return [ Halogen_HTML_Elements.div_([ Halogen_HTML_Elements.h2_([ Halogen_HTML.text("Temperature") ]), Halogen_HTML_Elements.h2_([ Halogen_HTML_Elements.code_([ Data_Function.apply(Halogen_HTML.text)(Data_Show.show(Data_Show.showNumber)(v.temperature)) ]) ]), Halogen_HTML_Elements.h2_([ Halogen_HTML.text("Conditions") ]), Halogen_HTML_Elements.h2_([ Halogen_HTML_Elements.code_([ Halogen_HTML.text(v.conditions) ]) ]) ]) ];
        })));
    };
    var $$eval = function (v) {
        return Control_Bind.bind(Control_Monad_Free.freeBind)(Halogen_Query.modify(function (v1) {
            var $29 = {};
            for (var $30 in v1) {
                if (v1.hasOwnProperty($30)) {
                    $29[$30] = v1[$30];
                };
            };
            $29.busy = true;
            return $29;
        }))(function () {
            return Control_Bind.bind(Control_Monad_Free.freeBind)(Control_Monad_Aff_Free.fromAff(Control_Monad_Aff_Free.affableFree(Halogen_Query_HalogenF.affableHalogenF(Control_Monad_Aff_Free.affableAff)))(fetchWeather))(function (v1) {
                return Control_Bind.bind(Control_Monad_Free.freeBind)(Halogen_Query.modify(function (v2) {
                    var $32 = {};
                    for (var $33 in v2) {
                        if (v2.hasOwnProperty($33)) {
                            $32[$33] = v2[$33];
                        };
                    };
                    $32.busy = false;
                    $32.weather = v1;
                    return $32;
                }))(function () {
                    return Control_Applicative.pure(Control_Monad_Free.freeApplicative)(v.value0);
                });
            });
        });
    };
    return Halogen_Component.lifecycleComponent({
        render: render, 
        "eval": $$eval, 
        initializer: new Data_Maybe.Just(Halogen_Query.action(Initialize.create)), 
        finalizer: Data_Maybe.Nothing.value
    });
})();
var main = Halogen_Util.runHalogenAff(Control_Bind.bind(Control_Monad_Aff.bindAff)(Halogen_Util.awaitBody)(function (v) {
    return Control_Bind.bind(Control_Monad_Aff.bindAff)(Halogen_Driver.runUI(ui)(initialState)(v))(function (v1) {
        return Data_Function.apply(setInterval(120000))(v1(Halogen_Query.action(Initialize.create)));
    });
}));
module.exports = {
    Initialize: Initialize, 
    Weather: Weather, 
    fetchWeather: fetchWeather, 
    initialState: initialState, 
    main: main, 
    setInterval: setInterval, 
    ui: ui, 
    weatherGeneric: weatherGeneric, 
    showWeather: showWeather, 
    isForeignWeather: isForeignWeather
};