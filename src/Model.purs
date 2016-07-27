module Model where

import Prelude
import Data.Foreign.Class (class IsForeign, read, readProp)
import Data.Generic (class Generic, gShow)
import Data.Maybe (Maybe(..))

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
