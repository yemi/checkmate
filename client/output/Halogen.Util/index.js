// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class");
var Data_Maybe = require("../Data.Maybe");
var Data_Either = require("../Data.Either");
var Data_Nullable = require("../Data.Nullable");
var Data_Foreign = require("../Data.Foreign");
var DOM = require("../DOM");
var DOM_Event_EventTarget = require("../DOM.Event.EventTarget");
var DOM_Event_EventTypes = require("../DOM.Event.EventTypes");
var DOM_HTML = require("../DOM.HTML");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var DOM_HTML_Window = require("../DOM.HTML.Window");
var DOM_Node_ParentNode = require("../DOM.Node.ParentNode");
var Halogen_Effects = require("../Halogen.Effects");
var selectElement = function (query) {
    return Prelude.bind(Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Prelude["<$>"](Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)(Control_Bind["=<<"](Control_Monad_Eff.bindEff)(Control_Bind["<=<"](Control_Monad_Eff.bindEff)(function ($8) {
        return DOM_Node_ParentNode.querySelector(query)(DOM_HTML_Types.htmlDocumentToParentNode($8));
    })(DOM_HTML_Window.document))(DOM_HTML.window))))(function (v) {
        return Prelude.pure(Control_Monad_Aff.applicativeAff)((function () {
            if (v instanceof Data_Maybe.Nothing) {
                return Data_Maybe.Nothing.value;
            };
            if (v instanceof Data_Maybe.Just) {
                return Data_Either.either(Prelude["const"](Data_Maybe.Nothing.value))(Data_Maybe.Just.create)(DOM_HTML_Types.readHTMLElement(Data_Foreign.toForeign(v.value0)));
            };
            throw new Error("Failed pattern match at Halogen.Util line 54, column 3 - line 60, column 1: " + [ v.constructor.name ]);
        })());
    });
};
var runHalogenAff = Control_Monad_Aff.runAff(Control_Monad_Eff_Exception.throwException)(Prelude["const"](Prelude.pure(Control_Monad_Eff.applicativeEff)(Prelude.unit)));
var awaitLoad = Control_Monad_Aff.makeAff(function (v) {
    return function (callback) {
        return Control_Monad_Eff_Class.liftEff(Control_Monad_Eff_Class.monadEffEff)(function __do() {
            var $9 = DOM_HTML.window();
            return DOM_Event_EventTarget.addEventListener(DOM_Event_EventTypes.load)(DOM_Event_EventTarget.eventListener(function (v1) {
                return callback(Prelude.unit);
            }))(false)(DOM_HTML_Types.windowToEventTarget($9))();
        });
    };
});
var awaitBody = Prelude.bind(Control_Monad_Aff.bindAff)(awaitLoad)(function () {
    return Control_Bind["=<<"](Control_Monad_Aff.bindAff)(Data_Maybe.maybe(Control_Monad_Error_Class.throwError(Control_Monad_Aff.monadErrorAff)(Control_Monad_Eff_Exception.error("Could not find body")))(Prelude.pure(Control_Monad_Aff.applicativeAff)))(selectElement("body"));
});
module.exports = {
    runHalogenAff: runHalogenAff, 
    selectElement: selectElement, 
    awaitBody: awaitBody, 
    awaitLoad: awaitLoad
};