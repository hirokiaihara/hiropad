Rails.application.routes.draw do
  devise_for :users
  root 'recipes#index'
  resources :users, only: [:edit, :update]
  resources :recipes
end
