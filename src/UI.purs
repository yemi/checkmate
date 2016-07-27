module UI where

import Prelude
import Control.Monad.Aff (Aff)

import Data.Foldable (foldMap)
import Data.Maybe (Maybe(..))

import Halogen (Component, ComponentDSL, ComponentHTML, modify, fromAff, lifecycleComponent, action)
import Halogen.HTML.Indexed as H
import Halogen.HTML.Events.Indexed as E
import Halogen.HTML.Properties.Indexed as P

import HTTP (fetchWeather)
import Model (State, Query(..), Weather(..))
import Effects (AppEffects)
import Stylesheet (styles)

ui :: forall eff. Component State Query (Aff (AppEffects eff))
ui = lifecycleComponent
  { render
  , eval
  , initializer: Just (action Initialize)
  , finalizer: Nothing
  }
  where

  render :: State -> ComponentHTML Query
  render st =
    H.div_ $
      [ styles [] []
      , H.p_ [ H.text (if st.busy then "Loading..." else "") ]
      ]
      `append` flip foldMap st.weather \(Weather weather) ->
      [ H.div_
        [ H.h2_ [ H.text "Temperature" ]
          , H.h2_ [ H.code_ [ H.text $ show weather.temperature ] ]
          , H.h2_ [ H.text "Conditions" ]
          , H.h2_ [ H.code_ [ H.text weather.conditions ] ]
          ]
        ]

  eval :: Query ~> ComponentDSL State Query (Aff (AppEffects eff))
  eval (Initialize next) = do
    modify (_ { busy = true })
    weather <- fromAff fetchWeather
    modify (_ { busy = false, weather = weather })
    pure next
