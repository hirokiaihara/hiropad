class ReportsController < ApplicationController
  
  def create
    @report = Report.new(report_params)
    if @report.save
      redirect_to recipe_path(@report.recipe.id), notice: "つくれぽが投稿されました。"
    else
      redirect_to recipe_path(@report.recipe.id), alert: "投稿できません。写真とコメントは必須です。"
    end
  end

  def destroy
    report = Report.find(params[:id])
    if report.destroy
      redirect_to "/users/#{current_user.id}/show_reports", notice: "つくれぽを削除しました。"
    else
      redirect_to "/users/#{current_user.id}/show_reports", alert: "削除できません。"
    end
  end

  private
  def report_params
    params.require(:report).permit(:comment, :report_image).merge(user_id: current_user.id, recipe_id: params[:recipe_id])
  end

end
