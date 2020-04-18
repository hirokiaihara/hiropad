class RecipesController < ApplicationController
  # before_action :authenticate_user!
  
  def index
    @recipes = Recipe.includes(:foods, :makes)
  end

  def new
    @recipe = Recipe.new
    @recipe.foods.new
    @recipe.makes.new
    
  end

  def create
    @recipe = Recipe.create(recipe_params)
    if @recipe.save
      flash[:notice] = "レシピを公開しました"
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @recipe = Recipe.includes(:foods)
    @recipe = Recipe.includes(:makes)
    @recipe = Recipe.find(params[:id])
  end


  private

  def recipe_params
    params.require(:recipe).permit(:title, :top_image, :how_many, :point, :background, foods_attributes: [:food_name, :amount, :_destroy, :id], makes_attributes: [:image, :how_make, :_destroy, :id]).merge(user_id: current_user.id)
  end
end
