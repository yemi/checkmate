module Main where

import Prelude

import Control.Monad.Aff (Aff, later')
import Control.Monad.Aff.Console (log)
import Control.Monad.Eff.Console (CONSOLE)
import Control.Monad.Eff (Eff)

import Data.Either (Either(..), either)
import Data.Foldable (foldMap)
import Data.Foreign (F)
import Data.Foreign.Class (class IsForeign, read, readProp)
import Data.Foreign.Generic (defaultOptions, readGeneric)
import Data.Generic (class Generic, gShow)
import Data.Functor (($>))
import Data.Maybe (Maybe(..))

import Halogen
import Halogen.Util (runHalogenAff, awaitBody)
import Halogen.HTML.Indexed as H
import Halogen.HTML.Events.Indexed as E
import Halogen.HTML.Properties.Indexed as P

import Network.HTTP.Affjax (AJAX, get)

newtype Weather = Weather
  { temperature :: Number
  , conditions :: String
  }

derive instance weatherGeneric :: Generic Weather

instance showWeather :: Show Weather where show = gShow

instance isForeignWeather :: IsForeign Weather where
  read val = do
    temperature <- val # (readProp "currently" >=> readProp "temperature")
    conditions <- val # (readProp "currently" >=> readProp "icon")
    pure $ Weather { temperature, conditions }

type State =
  { busy :: Boolean
  , weather :: Maybe Weather
  }

initialState :: State
initialState =
  { busy: false
  , weather: Nothing
  }

data Query a
  = Initialize a

type AppEffects eff = HalogenEffects (ajax :: AJAX, console :: CONSOLE | eff)

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
      [ H.p_
          [ H.text (if st.busy then "Loading..." else "") ]
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

fetchWeather :: forall eff. Aff (AppEffects eff) (Maybe Weather)
fetchWeather = do
  result <- get "https://api.forecast.io/forecast/da97e53efd4384ae3833b97fa122696f/59.3358021,17.9956715?units=si"
  pure $ either (const Nothing) Just $ read result.response

main :: Eff (AppEffects ()) Unit
main = runHalogenAff do
  body <- awaitBody
  driver <- runUI ui initialState body
  setInterval 120000 $ driver (action Initialize)

setInterval :: forall e a. Int -> Aff e a -> Aff e Unit
setInterval ms a = later' ms $ do
  a
  setInterval ms a

