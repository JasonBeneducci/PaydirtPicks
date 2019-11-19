Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'games', :to => 'games#index'
      get 'games/fetch', :to => 'games#fetch_games'
    end
  end
end
