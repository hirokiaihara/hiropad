class AddColumnIntroductionToRecipes < ActiveRecord::Migration[5.0]
  def change
    add_column :recipes, :introduction, :text
  end
end
