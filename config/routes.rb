Rails.application.routes.draw do
  devise_for :users
  root 'recipes#index'
  resources :users, only: [:edit, :update]
  get "users/:id/myrecipes" => "users#myrecipes"
  resources :recipes do
    resources :reports, only: [:create]
    collection do
      get 'search'
    end
  end
  post "myrecipes/:recipe_id/create" => "myrecipes#create"
  post "myrecipes/:recipe_id/destroy" => "myrecipes#destroy"
end
