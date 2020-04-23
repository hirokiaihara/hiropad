class Make < ApplicationRecord
  belongs_to :recipe, optional: true
  validates :how_make, length: {maximum: 60}
  mount_uploader :image, ImageUploader
end
