// Generated by psc version 0.8.5.0
"use strict";
var Prelude = require("../Prelude");
var Data_Array = require("../Data.Array");
var Data_Foldable = require("../Data.Foldable");
var Data_Maybe = require("../Data.Maybe");
var Data_Tuple = require("../Data.Tuple");
var Unsafe_Coerce = require("../Unsafe.Coerce");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var Halogen_HTML_Core = require("../Halogen.HTML.Core");
var Halogen_HTML_Properties_1 = require("../Halogen.HTML.Properties");
var Halogen_HTML_Properties_1 = require("../Halogen.HTML.Properties");
var Data_Monoid = require("../Data.Monoid");
var MenuitemCommand = (function () {
    function MenuitemCommand() {

    };
    MenuitemCommand.value = new MenuitemCommand();
    return MenuitemCommand;
})();
var MenuitemCheckbox = (function () {
    function MenuitemCheckbox() {

    };
    MenuitemCheckbox.value = new MenuitemCheckbox();
    return MenuitemCheckbox;
})();
var MenuitemRadio = (function () {
    function MenuitemRadio() {

    };
    MenuitemRadio.value = new MenuitemRadio();
    return MenuitemRadio;
})();
var MenuList = (function () {
    function MenuList() {

    };
    MenuList.value = new MenuList();
    return MenuList;
})();
var MenuContext = (function () {
    function MenuContext() {

    };
    MenuContext.value = new MenuContext();
    return MenuContext;
})();
var MenuToolbar = (function () {
    function MenuToolbar() {

    };
    MenuToolbar.value = new MenuToolbar();
    return MenuToolbar;
})();
var InputButton = (function () {
    function InputButton() {

    };
    InputButton.value = new InputButton();
    return InputButton;
})();
var InputCheckbox = (function () {
    function InputCheckbox() {

    };
    InputCheckbox.value = new InputCheckbox();
    return InputCheckbox;
})();
var InputColor = (function () {
    function InputColor() {

    };
    InputColor.value = new InputColor();
    return InputColor;
})();
var InputDate = (function () {
    function InputDate() {

    };
    InputDate.value = new InputDate();
    return InputDate;
})();
var InputDatetime = (function () {
    function InputDatetime() {

    };
    InputDatetime.value = new InputDatetime();
    return InputDatetime;
})();
var InputDatetimeLocal = (function () {
    function InputDatetimeLocal() {

    };
    InputDatetimeLocal.value = new InputDatetimeLocal();
    return InputDatetimeLocal;
})();
var InputEmail = (function () {
    function InputEmail() {

    };
    InputEmail.value = new InputEmail();
    return InputEmail;
})();
var InputFile = (function () {
    function InputFile() {

    };
    InputFile.value = new InputFile();
    return InputFile;
})();
var InputHidden = (function () {
    function InputHidden() {

    };
    InputHidden.value = new InputHidden();
    return InputHidden;
})();
var InputImage = (function () {
    function InputImage() {

    };
    InputImage.value = new InputImage();
    return InputImage;
})();
var InputMonth = (function () {
    function InputMonth() {

    };
    InputMonth.value = new InputMonth();
    return InputMonth;
})();
var InputNumber = (function () {
    function InputNumber() {

    };
    InputNumber.value = new InputNumber();
    return InputNumber;
})();
var InputPassword = (function () {
    function InputPassword() {

    };
    InputPassword.value = new InputPassword();
    return InputPassword;
})();
var InputRadio = (function () {
    function InputRadio() {

    };
    InputRadio.value = new InputRadio();
    return InputRadio;
})();
var InputRange = (function () {
    function InputRange() {

    };
    InputRange.value = new InputRange();
    return InputRange;
})();
var InputReset = (function () {
    function InputReset() {

    };
    InputReset.value = new InputReset();
    return InputReset;
})();
var InputSearch = (function () {
    function InputSearch() {

    };
    InputSearch.value = new InputSearch();
    return InputSearch;
})();
var InputSubmit = (function () {
    function InputSubmit() {

    };
    InputSubmit.value = new InputSubmit();
    return InputSubmit;
})();
var InputTel = (function () {
    function InputTel() {

    };
    InputTel.value = new InputTel();
    return InputTel;
})();
var InputText = (function () {
    function InputText() {

    };
    InputText.value = new InputText();
    return InputText;
})();
var InputTime = (function () {
    function InputTime() {

    };
    InputTime.value = new InputTime();
    return InputTime;
})();
var InputUrl = (function () {
    function InputUrl() {

    };
    InputUrl.value = new InputUrl();
    return InputUrl;
})();
var InputWeek = (function () {
    function InputWeek() {

    };
    InputWeek.value = new InputWeek();
    return InputWeek;
})();
var IProp = function (x) {
    return x;
};
var Uppercase = (function () {
    function Uppercase() {

    };
    Uppercase.value = new Uppercase();
    return Uppercase;
})();
var Lowercase = (function () {
    function Lowercase() {

    };
    Lowercase.value = new Lowercase();
    return Lowercase;
})();
var NumeralDecimal = (function () {
    function NumeralDecimal() {

    };
    NumeralDecimal.value = new NumeralDecimal();
    return NumeralDecimal;
})();
var NumeralRoman = (function () {
    function NumeralRoman(value0) {
        this.value0 = value0;
    };
    NumeralRoman.create = function (value0) {
        return new NumeralRoman(value0);
    };
    return NumeralRoman;
})();
var OrderedListNumeric = (function () {
    function OrderedListNumeric(value0) {
        this.value0 = value0;
    };
    OrderedListNumeric.create = function (value0) {
        return new OrderedListNumeric(value0);
    };
    return OrderedListNumeric;
})();
var OrderedListAlphabetic = (function () {
    function OrderedListAlphabetic(value0) {
        this.value0 = value0;
    };
    OrderedListAlphabetic.create = function (value0) {
        return new OrderedListAlphabetic(value0);
    };
    return OrderedListAlphabetic;
})();
var ButtonButton = (function () {
    function ButtonButton() {

    };
    ButtonButton.value = new ButtonButton();
    return ButtonButton;
})();
var ButtonSubmit = (function () {
    function ButtonSubmit() {

    };
    ButtonSubmit.value = new ButtonSubmit();
    return ButtonSubmit;
})();
var ButtonReset = (function () {
    function ButtonReset() {

    };
    ButtonReset.value = new ButtonReset();
    return ButtonReset;
})();
var renderOrderedListType = function (ty) {
    if (ty instanceof OrderedListNumeric) {
        if (ty.value0 instanceof NumeralDecimal) {
            return "1";
        };
        if (ty.value0 instanceof NumeralRoman) {
            if (ty.value0.value0 instanceof Lowercase) {
                return "i";
            };
            if (ty.value0.value0 instanceof Uppercase) {
                return "I";
            };
            throw new Error("Failed pattern match at Halogen.HTML.Properties.Indexed line 296, column 11 - line 299, column 5: " + [ ty.value0.value0.constructor.name ]);
        };
        throw new Error("Failed pattern match at Halogen.HTML.Properties.Indexed line 293, column 7 - line 299, column 5: " + [ ty.value0.constructor.name ]);
    };
    if (ty instanceof OrderedListAlphabetic) {
        if (ty.value0 instanceof Lowercase) {
            return "a";
        };
        if (ty.value0 instanceof Uppercase) {
            return "A";
        };
        throw new Error("Failed pattern match at Halogen.HTML.Properties.Indexed line 300, column 7 - line 304, column 1: " + [ ty.value0.constructor.name ]);
    };
    throw new Error("Failed pattern match at Halogen.HTML.Properties.Indexed line 291, column 3 - line 304, column 1: " + [ ty.constructor.name ]);
};
var renderMenuitemType = function (ty) {
    if (ty instanceof MenuitemCommand) {
        return "command";
    };
    if (ty instanceof MenuitemCheckbox) {
        return "checkbox";
    };
    if (ty instanceof MenuitemRadio) {
        return "radio";
    };
    throw new Error("Failed pattern match at Halogen.HTML.Properties.Indexed line 234, column 3 - line 239, column 1: " + [ ty.constructor.name ]);
};
var renderMenuType = function (ty) {
    if (ty instanceof MenuList) {
        return "list";
    };
    if (ty instanceof MenuContext) {
        return "context";
    };
    if (ty instanceof MenuToolbar) {
        return "toolbar";
    };
    throw new Error("Failed pattern match at Halogen.HTML.Properties.Indexed line 219, column 3 - line 224, column 1: " + [ ty.constructor.name ]);
};
var renderMediaType = function (ty) {
    var renderParameter = function (v) {
        return v.value0 + ("=" + v.value1);
    };
    var renderParameters = function (ps) {
        if (Data_Array.length(ps) === 0) {
            return "";
        };
        if (Prelude.otherwise) {
            return ";" + Data_Foldable.intercalate(Data_Foldable.foldableArray)(Data_Monoid.monoidString)(";")(Prelude["<$>"](Prelude.functorArray)(renderParameter)(ps));
        };
        throw new Error("Failed pattern match at Halogen.HTML.Properties.Indexed line 252, column 5 - line 256, column 5: " + [ ps.constructor.name ]);
    };
    return ty.type + ("/" + (ty.subtype + renderParameters(ty.parameters)));
};
var renderInputType = function (ty) {
    if (ty instanceof InputButton) {
        return "button";
    };
    if (ty instanceof InputCheckbox) {
        return "checkbox";
    };
    if (ty instanceof InputColor) {
        return "color";
    };
    if (ty instanceof InputDate) {
        return "date";
    };
    if (ty instanceof InputDatetime) {
        return "datetime";
    };
    if (ty instanceof InputDatetimeLocal) {
        return "datetime-local";
    };
    if (ty instanceof InputEmail) {
        return "email";
    };
    if (ty instanceof InputFile) {
        return "file";
    };
    if (ty instanceof InputHidden) {
        return "hidden";
    };
    if (ty instanceof InputImage) {
        return "image";
    };
    if (ty instanceof InputMonth) {
        return "month";
    };
    if (ty instanceof InputNumber) {
        return "number";
    };
    if (ty instanceof InputPassword) {
        return "password";
    };
    if (ty instanceof InputRadio) {
        return "radio";
    };
    if (ty instanceof InputRange) {
        return "range";
    };
    if (ty instanceof InputReset) {
        return "reset";
    };
    if (ty instanceof InputSearch) {
        return "search";
    };
    if (ty instanceof InputSubmit) {
        return "submit";
    };
    if (ty instanceof InputTel) {
        return "tel";
    };
    if (ty instanceof InputText) {
        return "text";
    };
    if (ty instanceof InputTime) {
        return "time";
    };
    if (ty instanceof InputUrl) {
        return "url";
    };
    if (ty instanceof InputWeek) {
        return "week";
    };
    throw new Error("Failed pattern match at Halogen.HTML.Properties.Indexed line 184, column 3 - line 209, column 1: " + [ ty.constructor.name ]);
};
var renderButtonType = function (ty) {
    if (ty instanceof ButtonButton) {
        return "button";
    };
    if (ty instanceof ButtonSubmit) {
        return "submit";
    };
    if (ty instanceof ButtonReset) {
        return "reset";
    };
    throw new Error("Failed pattern match at Halogen.HTML.Properties.Indexed line 269, column 3 - line 274, column 1: " + [ ty.constructor.name ]);
};
var refine = Unsafe_Coerce.unsafeCoerce;
var rel = refine(Halogen_HTML_Properties_1.rel);
var required = refine(Halogen_HTML_Properties_1.required);
var rowSpan = refine(Halogen_HTML_Properties_1.rowSpan);
var rows = refine(Halogen_HTML_Properties_1.rows);
var selected = refine(Halogen_HTML_Properties_1.selected);
var spellcheck = refine(Halogen_HTML_Properties_1.spellcheck);
var src = refine(Halogen_HTML_Properties_1.src);
var tabIndex = refine(Halogen_HTML_Properties_1.tabIndex);
var target = refine(Halogen_HTML_Properties_1.target);
var title = refine(Halogen_HTML_Properties_1.title);
var value = refine(Halogen_HTML_Properties_1.value);
var width = refine(Halogen_HTML_Properties_1.width);
var ref = refine(Halogen_HTML_Properties_1.ref);
var readonly = refine(Halogen_HTML_Properties_1.readonly);
var placeholder = refine(Halogen_HTML_Properties_1.placeholder);
var olType = function ($16) {
    return refine(Halogen_HTML_Properties_1.type_)(renderOrderedListType($16));
};
var name = refine(Halogen_HTML_Properties_1.name);
var multiple = refine(Halogen_HTML_Properties_1.multiple);
var menuitemType = function ($17) {
    return refine(Halogen_HTML_Properties_1.type_)(renderMenuitemType($17));
};
var menuType = function ($18) {
    return refine(Halogen_HTML_Properties_1.type_)(renderMenuType($18));
};
var mediaType = function ($19) {
    return refine(Halogen_HTML_Properties_1.type_)(renderMediaType($19));
};
var key = refine(Halogen_HTML_Properties_1.key);
var inputType = function ($20) {
    return refine(Halogen_HTML_Properties_1.type_)(renderInputType($20));
};
var id_ = refine(Halogen_HTML_Properties_1.id_);
var href = refine(Halogen_HTML_Properties_1.href);
var height = refine(Halogen_HTML_Properties_1.height);
var $$for = refine(Halogen_HTML_Properties_1["for"]);
var draggable = refine(Halogen_HTML_Properties_1.draggable);
var disabled = refine(Halogen_HTML_Properties_1.disabled);
var enabled = function ($21) {
    return disabled(!$21);
};
var cols = refine(Halogen_HTML_Properties_1.cols);
var colSpan = refine(Halogen_HTML_Properties_1.colSpan);
var classes = refine(Halogen_HTML_Properties_1.classes);
var class_ = refine(Halogen_HTML_Properties_1.class_);
var checked = refine(Halogen_HTML_Properties_1.checked);
var charset = refine(Halogen_HTML_Properties_1.charset);
var buttonType = function ($22) {
    return refine(Halogen_HTML_Properties_1.type_)(renderButtonType($22));
};
var autofocus = refine(Halogen_HTML_Properties_1.autofocus);
var autocomplete = refine(Halogen_HTML_Properties_1.autocomplete);
var alt = refine(Halogen_HTML_Properties_1.alt);
module.exports = {
    Uppercase: Uppercase, 
    Lowercase: Lowercase, 
    NumeralDecimal: NumeralDecimal, 
    NumeralRoman: NumeralRoman, 
    OrderedListNumeric: OrderedListNumeric, 
    OrderedListAlphabetic: OrderedListAlphabetic, 
    MenuitemCommand: MenuitemCommand, 
    MenuitemCheckbox: MenuitemCheckbox, 
    MenuitemRadio: MenuitemRadio, 
    MenuList: MenuList, 
    MenuContext: MenuContext, 
    MenuToolbar: MenuToolbar, 
    InputButton: InputButton, 
    InputCheckbox: InputCheckbox, 
    InputColor: InputColor, 
    InputDate: InputDate, 
    InputDatetime: InputDatetime, 
    InputDatetimeLocal: InputDatetimeLocal, 
    InputEmail: InputEmail, 
    InputFile: InputFile, 
    InputHidden: InputHidden, 
    InputImage: InputImage, 
    InputMonth: InputMonth, 
    InputNumber: InputNumber, 
    InputPassword: InputPassword, 
    InputRadio: InputRadio, 
    InputRange: InputRange, 
    InputReset: InputReset, 
    InputSearch: InputSearch, 
    InputSubmit: InputSubmit, 
    InputTel: InputTel, 
    InputText: InputText, 
    InputTime: InputTime, 
    InputUrl: InputUrl, 
    InputWeek: InputWeek, 
    ButtonButton: ButtonButton, 
    ButtonSubmit: ButtonSubmit, 
    ButtonReset: ButtonReset, 
    IProp: IProp, 
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
    olType: olType, 
    menuitemType: menuitemType, 
    menuType: menuType, 
    mediaType: mediaType, 
    inputType: inputType, 
    buttonType: buttonType, 
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