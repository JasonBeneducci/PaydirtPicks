Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'games', :to => 'games#index'
      get 'games/fetch', :to => 'games#fetch_games'
      get 'slates', :to => 'slates#index'
      post 'slates/new', :to => 'slates#new'
    end
  end
end
