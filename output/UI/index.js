// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Data_Foldable = require("../Data.Foldable");
var Data_Maybe = require("../Data.Maybe");
var Halogen = require("../Halogen");
var Halogen_HTML_Indexed = require("../Halogen.HTML.Indexed");
var Halogen_HTML_Events_Indexed = require("../Halogen.HTML.Events.Indexed");
var Halogen_HTML_Properties_Indexed = require("../Halogen.HTML.Properties.Indexed");
var HTTP = require("../HTTP");
var Model = require("../Model");
var Effects = require("../Effects");
var Stylesheet = require("../Stylesheet");
var Data_Function = require("../Data.Function");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements");
var Data_Semigroup = require("../Data.Semigroup");
var Halogen_HTML = require("../Halogen.HTML");
var Data_Monoid = require("../Data.Monoid");
var Data_Show = require("../Data.Show");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Free = require("../Control.Monad.Free");
var Halogen_Query = require("../Halogen.Query");
var Control_Monad_Aff_Free = require("../Control.Monad.Aff.Free");
var Halogen_Query_HalogenF = require("../Halogen.Query.HalogenF");
var Control_Applicative = require("../Control.Applicative");
var Halogen_Component = require("../Halogen.Component");
var ui = (function () {
    var render = function (st) {
        return Data_Function.apply(Halogen_HTML_Elements.div_)(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ Stylesheet.styles([  ])([  ]), Halogen_HTML_Elements.p_([ Halogen_HTML.text((function () {
            if (st.busy) {
                return "Loading...";
            };
            if (!st.busy) {
                return "";
            };
            throw new Error("Failed pattern match at UI line 32, column 24 - line 32, column 60: " + [ st.busy.constructor.name ]);
        })()) ]) ])(Data_Function.flip(Data_Foldable.foldMap(Data_Foldable.foldableMaybe)(Data_Monoid.monoidArray))(st.weather)(function (v) {
            return [ Halogen_HTML_Elements.div_([ Halogen_HTML_Elements.h2_([ Halogen_HTML.text("Temperature") ]), Halogen_HTML_Elements.h2_([ Halogen_HTML_Elements.code_([ Data_Function.apply(Halogen_HTML.text)(Data_Show.show(Data_Show.showNumber)(v.temperature)) ]) ]), Halogen_HTML_Elements.h2_([ Halogen_HTML.text("Conditions") ]), Halogen_HTML_Elements.h2_([ Halogen_HTML_Elements.code_([ Halogen_HTML.text(v.conditions) ]) ]) ]) ];
        })));
    };
    var $$eval = function (v) {
        return Control_Bind.bind(Control_Monad_Free.freeBind)(Halogen_Query.modify(function (v1) {
            var $8 = {};
            for (var $9 in v1) {
                if (v1.hasOwnProperty($9)) {
                    $8[$9] = v1[$9];
                };
            };
            $8.busy = true;
            return $8;
        }))(function () {
            return Control_Bind.bind(Control_Monad_Free.freeBind)(Control_Monad_Aff_Free.fromAff(Control_Monad_Aff_Free.affableFree(Halogen_Query_HalogenF.affableHalogenF(Control_Monad_Aff_Free.affableAff)))(HTTP.fetchWeather))(function (v1) {
                return Control_Bind.bind(Control_Monad_Free.freeBind)(Halogen_Query.modify(function (v2) {
                    var $11 = {};
                    for (var $12 in v2) {
                        if (v2.hasOwnProperty($12)) {
                            $11[$12] = v2[$12];
                        };
                    };
                    $11.busy = false;
                    $11.weather = v1;
                    return $11;
                }))(function () {
                    return Control_Applicative.pure(Control_Monad_Free.freeApplicative)(v.value0);
                });
            });
        });
    };
    return Halogen_Component.lifecycleComponent({
        render: render, 
        "eval": $$eval, 
        initializer: new Data_Maybe.Just(Halogen_Query.action(Model.Initialize.create)), 
        finalizer: Data_Maybe.Nothing.value
    });
})();
module.exports = {
    ui: ui
};