Rails.application.routes.draw do
  devise_for :users
  root 'recipes#index'
  resources :users, only: [:index, :show, :edit, :update]
  get "users/:id/show_recipes" => "users#show_recipes"
  get "users/:id/show_reports" => "users#show_reports"
  get "users/:id/myrecipes" => "users#myrecipes"
  resources :recipes do
    resources :reports, only: [:create]
    collection do
      get 'search'
    end
  end
  post "myrecipes/:recipe_id/create" => "myrecipes#create"
  post "myrecipes/:recipe_id/destroy" => "myrecipes#destroy"
  post "myrecipes/:recipe_id/myrecipe_destroy" => "myrecipes#myrecipe_destroy"
end
