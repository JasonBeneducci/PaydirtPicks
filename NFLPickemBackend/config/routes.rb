Rails.application.routes.draw do
  # used namespacing to allow the URL to reflect that it is serving as an api
  namespace :api do
    namespace :v1 do
      get 'games', :to => 'games#index'
      get 'games/fetch', :to => 'games#fetch_games'
      get 'games/fetch_winners', :to => 'slate_answer_keys#fetch_winners'
      get 'slates', :to => 'slates#index'
      post 'slates/new', :to => 'slates#new'
      get 'games/keys', :to => 'slate_answer_keys#index'
    end
  end
end
