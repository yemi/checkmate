// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Data_Generic = require("../Data.Generic");
var Data_Maybe = require("../Data.Maybe");
var Data_NonEmpty = require("../Data.NonEmpty");
var CSS_Property = require("../CSS.Property");
var CSS_String = require("../CSS.String");
var CSS_Stylesheet = require("../CSS.Stylesheet");
var Data_Eq = require("../Data.Eq");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Control_Apply = require("../Control.Apply");
var Data_Unit = require("../Data.Unit");
var Data_Function = require("../Data.Function");
var Data_Semigroup = require("../Data.Semigroup");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var WOFF = (function () {
    function WOFF() {

    };
    WOFF.value = new WOFF();
    return WOFF;
})();
var WOFF2 = (function () {
    function WOFF2() {

    };
    WOFF2.value = new WOFF2();
    return WOFF2;
})();
var TrueType = (function () {
    function TrueType() {

    };
    TrueType.value = new TrueType();
    return TrueType;
})();
var OpenType = (function () {
    function OpenType() {

    };
    OpenType.value = new OpenType();
    return OpenType;
})();
var EmbeddedOpenType = (function () {
    function EmbeddedOpenType() {

    };
    EmbeddedOpenType.value = new EmbeddedOpenType();
    return EmbeddedOpenType;
})();
var SVG = (function () {
    function SVG() {

    };
    SVG.value = new SVG();
    return SVG;
})();
var FontFaceSrcUrl = (function () {
    function FontFaceSrcUrl(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    FontFaceSrcUrl.create = function (value0) {
        return function (value1) {
            return new FontFaceSrcUrl(value0, value1);
        };
    };
    return FontFaceSrcUrl;
})();
var FontFaceSrcLocal = (function () {
    function FontFaceSrcLocal(value0) {
        this.value0 = value0;
    };
    FontFaceSrcLocal.create = function (value0) {
        return new FontFaceSrcLocal(value0);
    };
    return FontFaceSrcLocal;
})();
var genericFontFaceFormat = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.FontFace.WOFF" && v.value1.length === 0)) {
        return new Data_Maybe.Just(WOFF.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.FontFace.WOFF2" && v.value1.length === 0)) {
        return new Data_Maybe.Just(WOFF2.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.FontFace.TrueType" && v.value1.length === 0)) {
        return new Data_Maybe.Just(TrueType.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.FontFace.OpenType" && v.value1.length === 0)) {
        return new Data_Maybe.Just(OpenType.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.FontFace.EmbeddedOpenType" && v.value1.length === 0)) {
        return new Data_Maybe.Just(EmbeddedOpenType.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.FontFace.SVG" && v.value1.length === 0)) {
        return new Data_Maybe.Just(SVG.value);
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.FontFace.FontFaceFormat", [ {
        sigConstructor: "CSS.FontFace.WOFF", 
        sigValues: [  ]
    }, {
        sigConstructor: "CSS.FontFace.WOFF2", 
        sigValues: [  ]
    }, {
        sigConstructor: "CSS.FontFace.TrueType", 
        sigValues: [  ]
    }, {
        sigConstructor: "CSS.FontFace.OpenType", 
        sigValues: [  ]
    }, {
        sigConstructor: "CSS.FontFace.EmbeddedOpenType", 
        sigValues: [  ]
    }, {
        sigConstructor: "CSS.FontFace.SVG", 
        sigValues: [  ]
    } ]);
}, function (v) {
    if (v instanceof WOFF) {
        return new Data_Generic.SProd("CSS.FontFace.WOFF", [  ]);
    };
    if (v instanceof WOFF2) {
        return new Data_Generic.SProd("CSS.FontFace.WOFF2", [  ]);
    };
    if (v instanceof TrueType) {
        return new Data_Generic.SProd("CSS.FontFace.TrueType", [  ]);
    };
    if (v instanceof OpenType) {
        return new Data_Generic.SProd("CSS.FontFace.OpenType", [  ]);
    };
    if (v instanceof EmbeddedOpenType) {
        return new Data_Generic.SProd("CSS.FontFace.EmbeddedOpenType", [  ]);
    };
    if (v instanceof SVG) {
        return new Data_Generic.SProd("CSS.FontFace.SVG", [  ]);
    };
    throw new Error("Failed pattern match at CSS.FontFace line 26, column 1 - line 26, column 64: " + [ v.constructor.name ]);
});
var genericFontFaceSrc = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.FontFace.FontFaceSrcUrl" && v.value1.length === 2)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(FontFaceSrcUrl.create))(Data_Generic.fromSpine(Data_Generic.genericString)(v.value1[0](Data_Unit.unit))))(Data_Generic.fromSpine(Data_Generic.genericMaybe(genericFontFaceFormat))(v.value1[1](Data_Unit.unit)));
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.FontFace.FontFaceSrcLocal" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(FontFaceSrcLocal.create))(Data_Generic.fromSpine(Data_Generic.genericString)(v.value1[0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.FontFace.FontFaceSrc", [ {
        sigConstructor: "CSS.FontFace.FontFaceSrcUrl", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
        }, function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericMaybe(genericFontFaceFormat))(Data_Generic.anyProxy);
        } ]
    }, {
        sigConstructor: "CSS.FontFace.FontFaceSrcLocal", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    if (v instanceof FontFaceSrcUrl) {
        return new Data_Generic.SProd("CSS.FontFace.FontFaceSrcUrl", [ function ($dollarq) {
            return Data_Generic.toSpine(Data_Generic.genericString)(v.value0);
        }, function ($dollarq) {
            return Data_Generic.toSpine(Data_Generic.genericMaybe(genericFontFaceFormat))(v.value1);
        } ]);
    };
    if (v instanceof FontFaceSrcLocal) {
        return new Data_Generic.SProd("CSS.FontFace.FontFaceSrcLocal", [ function ($dollarq) {
            return Data_Generic.toSpine(Data_Generic.genericString)(v.value0);
        } ]);
    };
    throw new Error("Failed pattern match at CSS.FontFace line 42, column 1 - line 42, column 58: " + [ v.constructor.name ]);
});
var formatName = function (v) {
    if (v instanceof WOFF) {
        return "woff";
    };
    if (v instanceof WOFF2) {
        return "woff2";
    };
    if (v instanceof TrueType) {
        return "truetype";
    };
    if (v instanceof OpenType) {
        return "opentype";
    };
    if (v instanceof EmbeddedOpenType) {
        return "embedded-opentype";
    };
    if (v instanceof SVG) {
        return "svg";
    };
    throw new Error("Failed pattern match at CSS.FontFace line 29, column 1 - line 30, column 1: " + [ v.constructor.name ]);
};
var valFontFaceSrc = new CSS_Property.Val(function (v) {
    if (v instanceof FontFaceSrcUrl) {
        return Data_Function.apply(CSS_String.fromString(CSS_Property.isStringValue))("url(" + (CSS_Property.quote(v.value0) + (")" + Data_Maybe.maybe("")(function (f$prime) {
            return " format(" + (formatName(f$prime) + ")");
        })(v.value1))));
    };
    if (v instanceof FontFaceSrcLocal) {
        return Data_Function.apply(CSS_String.fromString(CSS_Property.isStringValue))("local(" + (CSS_Property.quote(v.value0) + ")"));
    };
    throw new Error("Failed pattern match at CSS.FontFace line 45, column 3 - line 45, column 127: " + [ v.constructor.name ]);
});
var fontFaceSrc = Data_Function.apply(CSS_Stylesheet.key(CSS_Property.valNonEmpty(valFontFaceSrc)))(CSS_String.fromString(CSS_Property.isStringKey)("src"));
var fontFaceFamily = function ($88) {
    return CSS_Stylesheet.key(CSS_Property.valLiteral)(CSS_String.fromString(CSS_Property.isStringKey)("font-family"))(CSS_Property.Literal($88));
};
var eqFontFaceFormat = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof WOFF && y instanceof WOFF) {
            return true;
        };
        if (x instanceof WOFF2 && y instanceof WOFF2) {
            return true;
        };
        if (x instanceof TrueType && y instanceof TrueType) {
            return true;
        };
        if (x instanceof OpenType && y instanceof OpenType) {
            return true;
        };
        if (x instanceof EmbeddedOpenType && y instanceof EmbeddedOpenType) {
            return true;
        };
        if (x instanceof SVG && y instanceof SVG) {
            return true;
        };
        return false;
    };
});
var eqFontFaceSrc = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof FontFaceSrcUrl && y instanceof FontFaceSrcUrl) {
            return x.value0 === y.value0 && Data_Eq.eq(Data_Maybe.eqMaybe(eqFontFaceFormat))(x.value1)(y.value1);
        };
        if (x instanceof FontFaceSrcLocal && y instanceof FontFaceSrcLocal) {
            return x.value0 === y.value0;
        };
        return false;
    };
});
var ordFontFaceFormat = new Data_Ord.Ord(function () {
    return eqFontFaceFormat;
}, function (x) {
    return function (y) {
        if (x instanceof WOFF && y instanceof WOFF) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof WOFF) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof WOFF) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof WOFF2 && y instanceof WOFF2) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof WOFF2) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof WOFF2) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof TrueType && y instanceof TrueType) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof TrueType) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof TrueType) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof OpenType && y instanceof OpenType) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof OpenType) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof OpenType) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof EmbeddedOpenType && y instanceof EmbeddedOpenType) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof EmbeddedOpenType) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof EmbeddedOpenType) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof SVG && y instanceof SVG) {
            return Data_Ordering.EQ.value;
        };
        throw new Error("Failed pattern match at CSS.FontFace line 25, column 1 - line 25, column 56: " + [ x.constructor.name, y.constructor.name ]);
    };
});
var ordFontFaceSrc = new Data_Ord.Ord(function () {
    return eqFontFaceSrc;
}, function (x) {
    return function (y) {
        if (x instanceof FontFaceSrcUrl && y instanceof FontFaceSrcUrl) {
            var $77 = Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
            if ($77 instanceof Data_Ordering.LT) {
                return Data_Ordering.LT.value;
            };
            if ($77 instanceof Data_Ordering.GT) {
                return Data_Ordering.GT.value;
            };
            return Data_Ord.compare(Data_Maybe.ordMaybe(ordFontFaceFormat))(x.value1)(y.value1);
        };
        if (x instanceof FontFaceSrcUrl) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof FontFaceSrcUrl) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof FontFaceSrcLocal && y instanceof FontFaceSrcLocal) {
            return Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
        };
        throw new Error("Failed pattern match at CSS.FontFace line 41, column 1 - line 41, column 50: " + [ x.constructor.name, y.constructor.name ]);
    };
});
module.exports = {
    WOFF: WOFF, 
    WOFF2: WOFF2, 
    TrueType: TrueType, 
    OpenType: OpenType, 
    EmbeddedOpenType: EmbeddedOpenType, 
    SVG: SVG, 
    FontFaceSrcUrl: FontFaceSrcUrl, 
    FontFaceSrcLocal: FontFaceSrcLocal, 
    fontFaceFamily: fontFaceFamily, 
    fontFaceSrc: fontFaceSrc, 
    formatName: formatName, 
    eqFontFaceFormat: eqFontFaceFormat, 
    ordFontFaceFormat: ordFontFaceFormat, 
    genericFontFaceFormat: genericFontFaceFormat, 
    eqFontFaceSrc: eqFontFaceSrc, 
    ordFontFaceSrc: ordFontFaceSrc, 
    genericFontFaceSrc: genericFontFaceSrc, 
    valFontFaceSrc: valFontFaceSrc
};
