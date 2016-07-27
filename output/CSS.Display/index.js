// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Data_Generic = require("../Data.Generic");
var CSS_Property = require("../CSS.Property");
var CSS_String = require("../CSS.String");
var CSS_Stylesheet = require("../CSS.Stylesheet");
var Data_Eq = require("../Data.Eq");
var Data_Ord = require("../Data.Ord");
var Control_Apply = require("../Control.Apply");
var Data_Maybe = require("../Data.Maybe");
var Data_Unit = require("../Data.Unit");
var Data_Function = require("../Data.Function");
var Position = function (x) {
    return x;
};
var Display = function (x) {
    return x;
};
var valPosition = new CSS_Property.Val(function (v) {
    return v;
});
var valDisplay = new CSS_Property.Val(function (v) {
    return v;
});
var tableRowGroup = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("table-row-Group"));
var tableRow = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("table-row"));
var tableHeaderGroup = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("table-header-group"));
var tableFooterGroup = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("table-footer-group"));
var tableColumnGroup = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("table-column-group"));
var tableColumn = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("table-column"));
var tableCell = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("table-cell"));
var tableCaption = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("table-caption"));
var table = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("table"));
var $$static = Data_Function.apply(Position)(CSS_String.fromString(CSS_Property.isStringValue)("static"));
var runIn = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("runIn"));
var relative = Data_Function.apply(Position)(CSS_String.fromString(CSS_Property.isStringValue)("relative"));
var position = Data_Function.apply(CSS_Stylesheet.key(valPosition))(CSS_String.fromString(CSS_Property.isStringKey)("position"));
var listItem = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("list-item"));
var inlineTable = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("inline-table"));
var inlineGrid = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("inline-grid"));
var inlineFlex = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("inline-flex"));
var inlineBlock = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("inline-block"));
var inline = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("inline"));
var grid = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("grid"));
var genericPosition = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Display.Position" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Position))(Data_Generic.fromSpine(CSS_Property.genericValue)(v.value1[0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Display.Position", [ {
        sigConstructor: "CSS.Display.Position", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Display.Position", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var genericDisplay = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Display.Display" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Display))(Data_Generic.fromSpine(CSS_Property.genericValue)(v.value1[0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Display.Display", [ {
        sigConstructor: "CSS.Display.Display", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Display.Display", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var flex = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("flex"));
var fixed = Data_Function.apply(Position)(CSS_String.fromString(CSS_Property.isStringValue)("fixed"));
var eqPosition = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordPosition = new Data_Ord.Ord(function () {
    return eqPosition;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var eqDisplay = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordDisplay = new Data_Ord.Ord(function () {
    return eqDisplay;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var displayNone = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("none"));
var displayInherit = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("inherit"));
var display = Data_Function.apply(CSS_Stylesheet.key(valDisplay))(CSS_String.fromString(CSS_Property.isStringKey)("display"));
var block = Data_Function.apply(Display)(CSS_String.fromString(CSS_Property.isStringValue)("block"));
var absolute = Data_Function.apply(Position)(CSS_String.fromString(CSS_Property.isStringValue)("absolute"));
module.exports = {
    Display: Display, 
    Position: Position, 
    absolute: absolute, 
    block: block, 
    display: display, 
    displayInherit: displayInherit, 
    displayNone: displayNone, 
    fixed: fixed, 
    flex: flex, 
    grid: grid, 
    inline: inline, 
    inlineBlock: inlineBlock, 
    inlineFlex: inlineFlex, 
    inlineGrid: inlineGrid, 
    inlineTable: inlineTable, 
    listItem: listItem, 
    position: position, 
    relative: relative, 
    runIn: runIn, 
    "static": $$static, 
    table: table, 
    tableCaption: tableCaption, 
    tableCell: tableCell, 
    tableColumn: tableColumn, 
    tableColumnGroup: tableColumnGroup, 
    tableFooterGroup: tableFooterGroup, 
    tableHeaderGroup: tableHeaderGroup, 
    tableRow: tableRow, 
    tableRowGroup: tableRowGroup, 
    eqPosition: eqPosition, 
    ordPosition: ordPosition, 
    genericPosition: genericPosition, 
    valPosition: valPosition, 
    eqDisplay: eqDisplay, 
    ordDisplay: ordDisplay, 
    genericDisplay: genericDisplay, 
    valDisplay: valDisplay
};
