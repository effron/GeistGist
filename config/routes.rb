Geist::Application.routes.draw do
  resource :user, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]

  resources :gists, only: [:index, :create, :destroy] do
    resource :favorite, only: [:create, :destroy]
  end

  resources :favorites, only: [:index]

  root :to => "users#new"
end
