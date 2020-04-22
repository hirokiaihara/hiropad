class UsersController < ApplicationController
  before_action :set_user, only: [:show, :show_recipes, :show_reports]
  
  def show
    @recipes = @user.recipes.order('created_at DESC').limit(5)
    @reports = @user.reports.order('created_at DESC').limit(6)
  end

  def show_recipes
    @recipes = @user.recipes.order('created_at DESC').page(params[:page]).per(10)
  end

  def show_reports
    @reports = @user.reports.order('created_at DESC').page(params[:page]).per(12)
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      flash[:notice] = "更新しました。"
      redirect_to "/users/#{current_user.id}"
    else
      flash[:alert] = "更新できません。入力項目を確認してください。"
      render :edit
    end
  end

  def myrecipes
    @myrecipes = Myrecipe.where(user_id: current_user.id).order('created_at DESC').page(params[:page]).per(10)
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :user_image, :users_comment)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
