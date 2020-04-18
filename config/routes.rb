Rails.application.routes.draw do
  devise_for :users
  root 'recipes#index'
  resources :users, only: [:edit, :update]
  resources :recipes do
    resources :reports, only: [:create]
  end
end
