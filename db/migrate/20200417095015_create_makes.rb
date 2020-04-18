class CreateMakes < ActiveRecord::Migration[5.0]
  def change
    create_table :makes do |t|
      t.text   :how_make, null: false
      t.string :image
      
      t.references  :recipe, foreign_key: true
      t.timestamps
    end
  end
end
