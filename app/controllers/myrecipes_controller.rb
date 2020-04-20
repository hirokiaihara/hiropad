class MyrecipesController < ApplicationController
  def create
    @myrecipe = Myrecipe.new(user_id: current_user.id, recipe_id: params[:recipe_id])
    @myrecipe.save
    redirect_to "/recipes/#{params[:recipe_id]}"
  end

  def destroy
    @myrecipe = Myrecipe.find_by(user_id: current_user.id, recipe_id: params[:recipe_id])
    @myrecipe.destroy
    redirect_to "/recipes/#{params[:recipe_id]}"
  end

  def myrecipe_destroy
    @myrecipe = Myrecipe.find_by(user_id: current_user.id, recipe_id: params[:recipe_id])
    @myrecipe.destroy
    redirect_to "/users/#{current_user.id}/myrecipes"
  end
end
