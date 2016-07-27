module Effects where

import Halogen (HalogenEffects)
import Control.Monad.Eff.Console (CONSOLE)
import Network.HTTP.Affjax (AJAX, get)

type AppEffects eff = HalogenEffects (ajax :: AJAX, console :: CONSOLE | eff)
