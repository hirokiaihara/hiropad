class Recipe < ApplicationRecord
  validates :title, :how_many, :top_image, presence: true
  validates :title, length: {maximum: 20}
  validates :point, :background, length: {maximum: 120} 

  belongs_to :user
  has_many :foods, dependent: :destroy
  has_many :makes, dependent: :destroy
  has_many :reports

  accepts_nested_attributes_for :foods, allow_destroy: true
  accepts_nested_attributes_for :makes, allow_destroy: true
  mount_uploader :top_image, ImageUploader
  
end
