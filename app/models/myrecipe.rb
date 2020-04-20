class Myrecipe < ApplicationRecord
  belongs_to :recipe
  belongs_to :user
  validates :recipe_id, :user_id, presence: true
end
