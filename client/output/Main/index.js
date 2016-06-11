// Generated by psc version 0.8.5.0
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
var Network_HTTP_Affjax_Response = require("../Network.HTTP.Affjax.Response");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements");
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
        return Prelude.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Weather))((function (r) {
            if (r instanceof Data_Generic.SRecord && r.value0.length === 2) {
                return Prelude.apply(Data_Maybe.applyMaybe)(Prelude.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(function (conditions1) {
                    return function (temperature1) {
                        return {
                            conditions: conditions1, 
                            temperature: temperature1
                        };
                    };
                }))(Data_Generic.fromSpine(Data_Generic.genericString)((r.value0[0]).recValue(Prelude.unit))))(Data_Generic.fromSpine(Data_Generic.genericNumber)((r.value0[1]).recValue(Prelude.unit)));
            };
            return Data_Maybe.Nothing.value;
        })(v.value1[0](Prelude.unit)));
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
var showWeather = new Prelude.Show(Data_Generic.gShow(weatherGeneric));
var setInterval = function (ms) {
    return function (a) {
        return Control_Monad_Aff["later'"](ms)(Prelude.bind(Control_Monad_Aff.bindAff)(a)(function () {
            return setInterval(ms)(a);
        }));
    };
};
var isForeignWeather = new Data_Foreign_Class.IsForeign(Data_Foreign_Generic.readGeneric(weatherGeneric)((function () {
    var $21 = {};
    for (var $22 in Data_Foreign_Generic.defaultOptions) {
        if (Data_Foreign_Generic.defaultOptions.hasOwnProperty($22)) {
            $21[$22] = Data_Foreign_Generic.defaultOptions[$22];
        };
    };
    $21.unwrapNewtypes = true;
    return $21;
})()));
var initialState = {
    busy: false, 
    weather: Data_Maybe.Nothing.value
};
var fetchWeather = Prelude.bind(Control_Monad_Aff.bindAff)(Network_HTTP_Affjax.get(Network_HTTP_Affjax_Response.responsableForeign)("http://localhost:8080/weather"))(function (v) {
    return Prelude["return"](Control_Monad_Aff.applicativeAff)(Data_Either.either(Prelude["const"](Data_Maybe.Nothing.value))(Data_Maybe.Just.create)(Data_Foreign_Class.read(isForeignWeather)(v.response)));
});
var ui = (function () {
    var render = function (st) {
        return Halogen_HTML_Elements.div_(Prelude["++"](Prelude.semigroupArray)([ Halogen_HTML_Elements.p_([ Halogen_HTML.text((function () {
            if (st.busy) {
                return "Loading...";
            };
            if (!st.busy) {
                return "";
            };
            throw new Error("Failed pattern match at Main line 68, column 21 - line 68, column 57: " + [ st.busy.constructor.name ]);
        })()) ]) ])(Prelude.flip(Data_Foldable.foldMap(Data_Foldable.foldableMaybe)(Data_Monoid.monoidArray))(st.weather)(function (v) {
            return [ Halogen_HTML_Elements.div_([ Halogen_HTML_Elements.h2_([ Halogen_HTML.text("Temperature") ]), Halogen_HTML_Elements.h2_([ Halogen_HTML_Elements.code_([ Halogen_HTML.text(Prelude.show(Prelude.showNumber)(v.temperature)) ]) ]), Halogen_HTML_Elements.h2_([ Halogen_HTML.text("Conditions") ]), Halogen_HTML_Elements.h2_([ Halogen_HTML_Elements.code_([ Halogen_HTML.text(v.conditions) ]) ]) ]) ];
        })));
    };
    var $$eval = function (v) {
        return Prelude.bind(Control_Monad_Free.freeBind)(Halogen_Query.modify(function (v1) {
            var $27 = {};
            for (var $28 in v1) {
                if (v1.hasOwnProperty($28)) {
                    $27[$28] = v1[$28];
                };
            };
            $27.busy = true;
            return $27;
        }))(function () {
            return Prelude.bind(Control_Monad_Free.freeBind)(Control_Monad_Aff_Free.fromAff(Control_Monad_Aff_Free.affableFree(Halogen_Query_HalogenF.affableHalogenF(Control_Monad_Aff_Free.affableAff)))(fetchWeather))(function (v1) {
                return Prelude.bind(Control_Monad_Free.freeBind)(Halogen_Query.modify(function (v2) {
                    var $30 = {};
                    for (var $31 in v2) {
                        if (v2.hasOwnProperty($31)) {
                            $30[$31] = v2[$31];
                        };
                    };
                    $30.busy = false;
                    $30.weather = v1;
                    return $30;
                }))(function () {
                    return Prelude.pure(Control_Monad_Free.freeApplicative)(v.value0);
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
var main = Halogen_Util.runHalogenAff(Prelude.bind(Control_Monad_Aff.bindAff)(Halogen_Util.awaitBody)(function (v) {
    return Prelude.bind(Control_Monad_Aff.bindAff)(Halogen_Driver.runUI(ui)(initialState)(v))(function (v1) {
        return setInterval(120000)(v1(Halogen_Query.action(Initialize.create)));
    });
}));
module.exports = {
    Initialize: Initialize, 
    Weather: Weather, 
    setInterval: setInterval, 
    main: main, 
    fetchWeather: fetchWeather, 
    ui: ui, 
    initialState: initialState, 
    weatherGeneric: weatherGeneric, 
    showWeather: showWeather, 
    isForeignWeather: isForeignWeather
};
