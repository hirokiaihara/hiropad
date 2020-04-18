class CreateReports < ActiveRecord::Migration[5.0]
  def change
    create_table :reports do |t|
      t.integer :user_id,      null: false, foreign_key: true
      t.integer :recipe_id,      null: false, foreign_key: true
      t.text :comment,            null: false
      t.string :report_image,     null: false
      t.timestamps
    end
  end
end
