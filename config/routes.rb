# == Route Map
#
#                        Prefix Verb     URI Pattern                              Controller#Action
#              new_user_session GET      /api/auth/sign_in(.:format)              devise_token_auth/sessions#new
#                  user_session POST     /api/auth/sign_in(.:format)              devise_token_auth/sessions#create
#          destroy_user_session DELETE   /api/auth/sign_out(.:format)             devise_token_auth/sessions#destroy
#             new_user_password GET      /api/auth/password/new(.:format)         devise_token_auth/passwords#new
#            edit_user_password GET      /api/auth/password/edit(.:format)        devise_token_auth/passwords#edit
#                 user_password PATCH    /api/auth/password(.:format)             devise_token_auth/passwords#update
#                               PUT      /api/auth/password(.:format)             devise_token_auth/passwords#update
#                               POST     /api/auth/password(.:format)             devise_token_auth/passwords#create
#      cancel_user_registration GET      /api/auth/cancel(.:format)               devise_token_auth/registrations#cancel
#         new_user_registration GET      /api/auth/sign_up(.:format)              devise_token_auth/registrations#new
#        edit_user_registration GET      /api/auth/edit(.:format)                 devise_token_auth/registrations#edit
#             user_registration PATCH    /api/auth(.:format)                      devise_token_auth/registrations#update
#                               PUT      /api/auth(.:format)                      devise_token_auth/registrations#update
#                               DELETE   /api/auth(.:format)                      devise_token_auth/registrations#destroy
#                               POST     /api/auth(.:format)                      devise_token_auth/registrations#create
#       api_auth_validate_token GET      /api/auth/validate_token(.:format)       devise_token_auth/token_validations#validate_token
#              api_auth_failure GET      /api/auth/failure(.:format)              devise_token_auth/omniauth_callbacks#omniauth_failure
#                               GET      /api/auth/:provider/callback(.:format)   devise_token_auth/omniauth_callbacks#omniauth_success
#                               GET|POST /omniauth/:provider/callback(.:format)   devise_token_auth/omniauth_callbacks#redirect_callbacks
#              omniauth_failure GET|POST /omniauth/failure(.:format)              devise_token_auth/omniauth_callbacks#omniauth_failure
#                               GET      /api/auth/:provider(.:format)            redirect(301)
#          api_current_location POST     /api/current_location(.:format)          api/current_location#manage_current_location
#         api_location_forecast POST     /api/location_forecast(.:format)         api/forecasts#location_forecast
#    api_current_location_index GET      /api/current_location(.:format)          api/current_location#index
#                               POST     /api/current_location(.:format)          api/current_location#create
#                               PATCH    /api/current_location/:id(.:format)      api/current_location#update
#                               PUT      /api/current_location/:id(.:format)      api/current_location#update
#                               DELETE   /api/current_location/:id(.:format)      api/current_location#destroy
#                 api_addresses GET      /api/addresses(.:format)                 api/addresses#index
#                               POST     /api/addresses(.:format)                 api/addresses#create
#                   api_address GET      /api/addresses/:id(.:format)             api/addresses#show
#                               PATCH    /api/addresses/:id(.:format)             api/addresses#update
#                               PUT      /api/addresses/:id(.:format)             api/addresses#update
#                               DELETE   /api/addresses/:id(.:format)             api/addresses#destroy
#              api_weather_data GET      /api/weather/data(.:format)              api/weathers#data
#            api_weather_actual GET      /api/weather/actual(.:format)            api/weathers#actual
#       api_observation_request POST     /api/observations(.:format)              api/observations#observation_request
#         api_humidities_actual GET      /api/humidities/actual(.:format)         api/humidities#actual
#     api_humidities_historical GET      /api/humidities/historical(.:format)     api/humidities#historical
#     api_humidities_comparison GET      /api/humidities/comparison(.:format)     api/humidities#comparison
#       api_humidity_recordings GET      /api/humidity_recordings(.:format)       api/humidity_recordings#index
#        api_humidity_recording GET      /api/humidity_recordings/:id(.:format)   api/humidity_recordings#show
#                               PATCH    /api/humidity_recordings/:id(.:format)   api/humidity_recordings#update
#                               PUT      /api/humidity_recordings/:id(.:format)   api/humidity_recordings#update
#                               DELETE   /api/humidity_recordings/:id(.:format)   api/humidity_recordings#destroy
# api_humidity_recordings_query GET      /api/humidity_recordings_query(.:format) api/humidity_recordings#query
#              open_weather_api POST     /open_weather_api(.:format)              open_weather_api#location_forecast
#                               GET      /*other(.:format)                        static#index
#

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do

    post '/current_location', to: 'current_location#manage_current_location'
    post '/location_forecast', to: 'forecasts#location_forecast'

    resources :current_location, except: :show
    resources :addresses, except: [:new, :edit]

    # Custom Routes for Weather Controller
    get '/weather/data', to: 'weathers#data', as: 'weather_data'
    get '/weather/actual', to: 'weathers#actual', as: 'weather_actual'

    # Routes for re-routing to the weather service api for observations
    post '/observations', to: 'observations#observation_request', as: 'observation_request'

    # Routes for the Humidity Controller
    get '/humidities/actual', to: 'humidities#actual', as: 'humidities_actual'
    get '/humidities/historical', to: 'humidities#historical', as: 'humidities_historical'
    get '/humidities/comparison', to: 'humidities#comparison', as: 'humidities_comparison'

    # Routes for Humdity Records extracted from the Weather models
    resources :humidity_recordings, except: [ :new, :create ]
    get '/humidity_recordings_query', to: 'humidity_recordings#query', as: 'humidity_recordings_query'

  end


  get '/open_city_state', to: 'open_city_state#get_city_state', as: 'city_state'
  post '/open_weather_api', to: 'open_weather_api#location_forecast'

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
