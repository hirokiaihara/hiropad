class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.string :top_image, null: false
      t.string :how_many, null: false
      t.text :point
      t.text :background
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
