class UsersController < ApplicationController
  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
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
    params.require(:user).permit(:name, :email)
  end
end
