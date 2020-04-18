class Food < ApplicationRecord
  belongs_to :recipe, optional: true
  # validates :food_name, :amount, presence: true
end
