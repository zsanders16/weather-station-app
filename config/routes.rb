# == Route Map
#
#                     Prefix Verb     URI Pattern                            Controller#Action
#           new_user_session GET      /api/auth/sign_in(.:format)            devise_token_auth/sessions#new
#               user_session POST     /api/auth/sign_in(.:format)            devise_token_auth/sessions#create
#       destroy_user_session DELETE   /api/auth/sign_out(.:format)           devise_token_auth/sessions#destroy
#          new_user_password GET      /api/auth/password/new(.:format)       devise_token_auth/passwords#new
#         edit_user_password GET      /api/auth/password/edit(.:format)      devise_token_auth/passwords#edit
#              user_password PATCH    /api/auth/password(.:format)           devise_token_auth/passwords#update
#                            PUT      /api/auth/password(.:format)           devise_token_auth/passwords#update
#                            POST     /api/auth/password(.:format)           devise_token_auth/passwords#create
#   cancel_user_registration GET      /api/auth/cancel(.:format)             devise_token_auth/registrations#cancel
#      new_user_registration GET      /api/auth/sign_up(.:format)            devise_token_auth/registrations#new
#     edit_user_registration GET      /api/auth/edit(.:format)               devise_token_auth/registrations#edit
#          user_registration PATCH    /api/auth(.:format)                    devise_token_auth/registrations#update
#                            PUT      /api/auth(.:format)                    devise_token_auth/registrations#update
#                            DELETE   /api/auth(.:format)                    devise_token_auth/registrations#destroy
#                            POST     /api/auth(.:format)                    devise_token_auth/registrations#create
#    api_auth_validate_token GET      /api/auth/validate_token(.:format)     devise_token_auth/token_validations#validate_token
#           api_auth_failure GET      /api/auth/failure(.:format)            devise_token_auth/omniauth_callbacks#omniauth_failure
#                            GET      /api/auth/:provider/callback(.:format) devise_token_auth/omniauth_callbacks#omniauth_success
#                            GET|POST /omniauth/:provider/callback(.:format) devise_token_auth/omniauth_callbacks#redirect_callbacks
#           omniauth_failure GET|POST /omniauth/failure(.:format)            devise_token_auth/omniauth_callbacks#omniauth_failure
#                            GET      /api/auth/:provider(.:format)          redirect(301)
# api_current_location_index GET      /api/current_location(.:format)        api/current_location#index
#                            POST     /api/current_location(.:format)        api/current_location#create
#       api_current_location PATCH    /api/current_location/:id(.:format)    api/current_location#update
#                            PUT      /api/current_location/:id(.:format)    api/current_location#update
#                            DELETE   /api/current_location/:id(.:format)    api/current_location#destroy
#              api_addresses GET      /api/addresses(.:format)               api/addresses#index
#                            POST     /api/addresses(.:format)               api/addresses#create
#                api_address GET      /api/addresses/:id(.:format)           api/addresses#show
#                            PATCH    /api/addresses/:id(.:format)           api/addresses#update
#                            PUT      /api/addresses/:id(.:format)           api/addresses#update
#                            DELETE   /api/addresses/:id(.:format)           api/addresses#destroy
#                            GET      /*other(.:format)                      static#index
#

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do

    post '/current_location', to: 'current_location#manage_current_location'

    resources :current_location, except: :show
    resources :addresses, except: [:new, :edit]

  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
