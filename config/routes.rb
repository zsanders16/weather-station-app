Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    post '/current_location', to: 'current_location#manage_current_location'

  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
