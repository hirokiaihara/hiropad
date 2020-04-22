class RecipesController < ApplicationController
  # before_action :authenticate_user!
  
  def index
    @recipes = Recipe.includes(:foods, :makes).order('created_at desc').limit(12)
    @ranks = Recipe.create_ranks
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
      flash[:alert] = "投稿できませんでした。必須項目を確認してください"
      render :new
    end
  end

  def show
    @recipe = Recipe.includes(:foods)
    @recipe = Recipe.includes(:makes)
    @recipe = Recipe.find(params[:id])

    @report = Report.new
    @reports = @recipe.reports.includes(:user)
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    redirect_to "/users/#{current_user.id}/show_recipes"
  end

  def search
    @title = params[:keyword]
    @recipes = Recipe.includes(:foods).search(params[:keyword]).order('recipes.created_at desc').limit(10)
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :introduction, :top_image, :how_many, :point, :background, foods_attributes: [:food_name, :amount, :_destroy, :id], makes_attributes: [:image, :how_make, :_destroy, :id]).merge(user_id: current_user.id)
  end
end
