{-# LANGUAGE DataKinds         #-}
{-# LANGUAGE DeriveGeneric     #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TypeOperators     #-}
module Checkmate
  ( startApp
  ) where

import           Control.Lens                         ((&), (.~), (^?))
import           Control.Monad.Trans                  (liftIO)
import           Data.Aeson                           (FromJSON, ToJSON,
                                                       parseJSON, withObject,
                                                       (.:))
import           Data.Text                            (Text, pack, unpack)
import           GHC.Generics                         (Generic)
import           Network.Wai                          (Application)
import           Network.Wai.Handler.Warp             (run)
import           Network.Wai.Middleware.RequestLogger (logStdout)
import           Network.Wreq                         (asJSON, defaults,
                                                       getWith, header, param,
                                                       responseBody)
import           Servant                              ((:>), Get, Handler, JSON,
                                                       Proxy (..), Server,
                                                       err404, errBody, serve,
                                                       throwError)

data Weather = Weather
  { temperature :: Float
  , conditions :: Text
  } deriving (Eq, Show, Generic)

instance ToJSON Weather
instance FromJSON Weather where
  parseJSON = withObject "weather" $ \o -> do
    currentlyO <- o .: "currently"
    temperature <- currentlyO .: "temperature"
    conditions <- currentlyO .: "icon"
    return $ Weather temperature conditions

type API = "weather" :> Get '[JSON] Weather

startApp :: IO ()
startApp = run 8080 $ logStdout app

app :: Application
app = serve api server

api :: Proxy API
api = Proxy

server :: Server API
server = weather

weather :: Handler Weather
weather = do
  mweather <- liftIO fetchWeather
  case mweather of
    Nothing -> throwError $ err404 { errBody = "couldn't find weather" }
    Just weather -> return weather

fetchWeather :: IO (Maybe Weather)
fetchWeather = do
  let opts = defaults & param "units" .~ ["si"]
  res <- asJSON =<< getWith opts "https://api.forecast.io/forecast/da97e53efd4384ae3833b97fa122696f/59.3358021,17.9956715"
  return $ res ^? responseBody

weatherAppID :: Text
weatherAppID = "da97e53efd4384ae3833b97fa122696f"

