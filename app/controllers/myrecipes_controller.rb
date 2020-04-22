class MyrecipesController < ApplicationController
  def create
    @myrecipe = Myrecipe.new(user_id: current_user.id, recipe_id: params[:recipe_id])
    if @myrecipe.save
      flash[:notice] = "マイレシピに保存しました。"
      redirect_to "/recipes/#{params[:recipe_id]}"
    else 
      flash[:alert] = "保存できません。"
      redirect_to "/recipes/#{params[:recipe_id]}"
    end
  end

  def destroy
    @myrecipe = Myrecipe.find_by(user_id: current_user.id, recipe_id: params[:recipe_id])
    if @myrecipe.destroy
      flash[:notice] = "マイレシピから削除しました。"
      redirect_to "/recipes/#{params[:recipe_id]}"
    else
      flash[:alert] = "削除できません。"
      redirect_to "/recipes/#{params[:recipe_id]}"
    end
  end

  def myrecipe_destroy
    @myrecipe = Myrecipe.find_by(user_id: current_user.id, recipe_id: params[:recipe_id])
    if @myrecipe.destroy
      flash[:notice] = "マイレシピから削除しました。"
      redirect_to "/users/#{current_user.id}/myrecipes"
    else
      flash[:alert] = "削除できません。"
      redirect_to "/users/#{current_user.id}/myrecipes"
    end
  end
end
