module HTTP where

import Prelude
import Effects (AppEffects)
import Control.Monad.Aff (Aff)
import Data.Maybe (Maybe(..))
import Model (Weather)
import Network.HTTP.Affjax (get)
import Data.Either (either)
import Data.Foreign.Class (read)

fetchWeather :: forall eff. Aff (AppEffects eff) (Maybe Weather)
fetchWeather = do
  result <- get "https://api.forecast.io/forecast/da97e53efd4384ae3833b97fa122696f/59.3358021,17.9956715?units=si"
  pure $ either (const Nothing) Just $ read result.response
