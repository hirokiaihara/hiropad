class CreateFoods < ActiveRecord::Migration[5.0]
  def change
    create_table :foods do |t|
      t.string :food_name, null: false
      t.string :amount, null: false
      t.references :recipe,   foreign_key: true
      t.timestamps
    end
  end
end
