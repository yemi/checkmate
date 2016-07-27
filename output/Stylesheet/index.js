// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var CSS = require("../CSS");
var CSS_Color = require("../CSS.Color");
var CSS_Font = require("../CSS.Font");
var CSS_Background = require("../CSS.Background");
var CSS_Display = require("../CSS.Display");
var Halogen_HTML_Properties_Indexed = require("../Halogen.HTML.Properties.Indexed");
var Halogen_HTML_Elements_Indexed = require("../Halogen.HTML.Elements.Indexed");
var Halogen_HTML_CSS_Indexed = require("../Halogen.HTML.CSS.Indexed");
var Color = require("../Color");
var Control_Bind = require("../Control.Bind");
var CSS_Stylesheet = require("../CSS.Stylesheet");
var colorMain = Color.rgba(255)(93)(148)(1.0);
var bgMain = Color.rgba(39)(39)(49)(1.0);
var styles = Halogen_HTML_CSS_Indexed.stylesheet(Control_Bind.bind(CSS_Stylesheet.bindStyleM)(CSS_Background.backgroundColor(bgMain))(function () {
    return Control_Bind.bind(CSS_Stylesheet.bindStyleM)(CSS_Font.color(colorMain))(function () {
        return CSS_Display.display(CSS_Display.flex);
    });
}));
module.exports = {
    bgMain: bgMain, 
    colorMain: colorMain, 
    styles: styles
};