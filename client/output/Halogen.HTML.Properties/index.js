// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Data_Maybe = require("../Data.Maybe");
var Data_String = require("../Data.String");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var Halogen_HTML_Core = require("../Halogen.HTML.Core");
var Pixels = (function () {
    function Pixels(value0) {
        this.value0 = value0;
    };
    Pixels.create = function (value0) {
        return new Pixels(value0);
    };
    return Pixels;
})();
var Percent = (function () {
    function Percent(value0) {
        this.value0 = value0;
    };
    Percent.create = function (value0) {
        return new Percent(value0);
    };
    return Percent;
})();
var value = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("value"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("value")));
var type_ = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("type"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("type")));
var title = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("title"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("title")));
var target = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("target"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("target")));
var tabIndex = Halogen_HTML_Core.prop(Halogen_HTML_Core.intIsProp)(Halogen_HTML_Core.propName("tabIndex"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("tabindex")));
var src = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("src"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("src")));
var spellcheck = Halogen_HTML_Core.prop(Halogen_HTML_Core.booleanIsProp)(Halogen_HTML_Core.propName("spellcheck"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("spellcheck")));
var selected = Halogen_HTML_Core.prop(Halogen_HTML_Core.booleanIsProp)(Halogen_HTML_Core.propName("selected"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("selected")));
var rows = Halogen_HTML_Core.prop(Halogen_HTML_Core.intIsProp)(Halogen_HTML_Core.propName("rows"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("rows")));
var rowSpan = Halogen_HTML_Core.prop(Halogen_HTML_Core.intIsProp)(Halogen_HTML_Core.propName("rowSpan"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("rowspan")));
var required = Halogen_HTML_Core.prop(Halogen_HTML_Core.booleanIsProp)(Halogen_HTML_Core.propName("required"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("required")));
var rel = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("rel"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("rel")));
var ref = Halogen_HTML_Core.Ref.create;
var readonly = Halogen_HTML_Core.prop(Halogen_HTML_Core.booleanIsProp)(Halogen_HTML_Core.propName("readOnly"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("readonly")));
var printLengthLiteral = function (v) {
    if (v instanceof Pixels) {
        return Prelude.show(Prelude.showInt)(v.value0);
    };
    if (v instanceof Percent) {
        return Prelude.show(Prelude.showNumber)(v.value0) + "%";
    };
    throw new Error("Failed pattern match at Halogen.HTML.Properties line 61, column 1 - line 62, column 1: " + [ v.constructor.name ]);
};
var width = function ($5) {
    return Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("width"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("width")))(printLengthLiteral($5));
};
var placeholder = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("placeholder"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("placeholder")));
var name = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("name"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("name")));
var multiple = Halogen_HTML_Core.prop(Halogen_HTML_Core.booleanIsProp)(Halogen_HTML_Core.propName("multiple"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("multiple")));
var key = Halogen_HTML_Core.Key.create;
var id_ = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("id"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("id")));
var href = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("href"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("href")));
var height = function ($6) {
    return Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("height"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("height")))(printLengthLiteral($6));
};
var $$for = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("htmlFor"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("for")));
var draggable = Halogen_HTML_Core.prop(Halogen_HTML_Core.booleanIsProp)(Halogen_HTML_Core.propName("draggable"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("draggable")));
var disabled = Halogen_HTML_Core.prop(Halogen_HTML_Core.booleanIsProp)(Halogen_HTML_Core.propName("disabled"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("disabled")));
var enabled = function ($7) {
    return disabled(!$7);
};
var cols = Halogen_HTML_Core.prop(Halogen_HTML_Core.intIsProp)(Halogen_HTML_Core.propName("cols"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("cols")));
var colSpan = Halogen_HTML_Core.prop(Halogen_HTML_Core.intIsProp)(Halogen_HTML_Core.propName("colSpan"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("colspan")));
var classes = function ($8) {
    return Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("className"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("class")))(Data_String.joinWith(" ")(Prelude.map(Prelude.functorArray)(Halogen_HTML_Core.runClassName)($8)));
};
var class_ = function ($9) {
    return Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("className"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("class")))(Halogen_HTML_Core.runClassName($9));
};
var checked = Halogen_HTML_Core.prop(Halogen_HTML_Core.booleanIsProp)(Halogen_HTML_Core.propName("checked"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("checked")));
var charset = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("charset"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("charset")));
var autofocus = Halogen_HTML_Core.prop(Halogen_HTML_Core.booleanIsProp)(Halogen_HTML_Core.propName("autofocus"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("autofocus")));
var autocomplete = function ($10) {
    return Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("autocomplete"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("autocomplete")))((function (b) {
        if (b) {
            return "on";
        };
        if (!b) {
            return "off";
        };
        throw new Error("Failed pattern match at Halogen.HTML.Properties line 155, column 91 - line 155, column 116: " + [ b.constructor.name ]);
    })($10));
};
var alt = Halogen_HTML_Core.prop(Halogen_HTML_Core.stringIsProp)(Halogen_HTML_Core.propName("alt"))(Data_Maybe.Just.create(Halogen_HTML_Core.attrName("alt")));
module.exports = {
    Pixels: Pixels, 
    Percent: Percent, 
    ref: ref, 
    tabIndex: tabIndex, 
    draggable: draggable, 
    multiple: multiple, 
    autofocus: autofocus, 
    autocomplete: autocomplete, 
    placeholder: placeholder, 
    selected: selected, 
    checked: checked, 
    spellcheck: spellcheck, 
    readonly: readonly, 
    required: required, 
    enabled: enabled, 
    disabled: disabled, 
    value: value, 
    type_: type_, 
    title: title, 
    target: target, 
    src: src, 
    rel: rel, 
    name: name, 
    id_: id_, 
    href: href, 
    width: width, 
    height: height, 
    "for": $$for, 
    rowSpan: rowSpan, 
    colSpan: colSpan, 
    rows: rows, 
    cols: cols, 
    classes: classes, 
    class_: class_, 
    charset: charset, 
    alt: alt, 
    key: key
};
