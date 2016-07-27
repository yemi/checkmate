module Utils where

import Prelude

import Data.Maybe (Maybe(..))
import Data.HTTP.Method (Method(..))
import Data.Either (Either(..))

import Network.HTTP.Affjax (URL(), Affjax(), affjax, defaultRequest)
-- import Network.HTTP.Affjax.Request (Requestable)
-- import Network.HTTP.Affjax.Response (Respondable)
import Network.HTTP.RequestHeader (RequestHeader(..))

-- post :: forall e a b. (Requestable a, Respondable b) => URL -> a -> Affjax e b
-- post url content = affjax $ defaultRequest
--   { method = Left POST
--   , url = url
--   , content = Just content
--   , headers =
--     [ RequestHeader "Accept" "application/json"
--     , RequestHeader "Content-Type" "application/json"
--     ]
--   }

