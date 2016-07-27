module Main where

import Prelude

import Control.Monad.Aff (Aff, later')
import Control.Monad.Eff (Eff)

import Halogen (runUI, action)
import Halogen.Util (runHalogenAff, awaitBody)

import Effects (AppEffects)
import Model (Query(..), initialState)
import UI (ui)


main :: Eff (AppEffects ()) Unit
main = runHalogenAff do
  body <- awaitBody
  driver <- runUI ui initialState body
  setInterval 600000 $ driver (action Initialize)

setInterval :: forall e a. Int -> Aff e a -> Aff e Unit
setInterval ms a = later' ms $ do
  a
  setInterval ms a

