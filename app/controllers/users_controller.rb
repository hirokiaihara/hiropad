class UsersController < ApplicationController
  before_action :set_user, only: [:show, :show_recipes, :show_reports]
  
  def show
    @recipes = @user.recipes.order('created_at DESC').limit(5)
    @reports = @user.reports.order('created_at DESC').limit(5)
  end

  def show_recipes
    @recipes = @user.recipes
  end

  def show_reports
    @reports = @user.reports
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to "/users/#{current_user.id}"
    else
      flash[:notice] = "更新できません。入力項目を確認してください。"
      render :edit
    end
  end

  def myrecipes
    @myrecipes = Myrecipe.where(user_id: current_user.id)
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :user_image)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
