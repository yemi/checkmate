module Stylesheet where

import Prelude

import CSS (CSS)
import CSS.Color (Color, rgba)
import CSS.Font (color)
import CSS.Background (backgroundColor)
import CSS.Display (display, flex)

import Halogen.HTML.Properties.Indexed (IProp, I)
import Halogen.HTML.Elements.Indexed (NoninteractiveNode)
import Halogen.HTML.CSS.Indexed (style, stylesheet)

type Prop = forall i r. IProp (style :: I | r) i
type Stylesheet = forall p i. NoninteractiveNode (media :: I, onError :: I, onLoad :: I, scoped :: I, mediaType :: I) p i

bgMain :: Color
bgMain = rgba 39 39 49 1.0

colorMain :: Color
colorMain = rgba 255 93 148 1.0

styles :: Stylesheet
styles = stylesheet do
  backgroundColor bgMain
  color colorMain
  display flex

