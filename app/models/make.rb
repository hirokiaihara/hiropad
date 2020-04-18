class Make < ApplicationRecord
  belongs_to :recipe, optional: true
  # validates :image, :how, presence: true
  # validates :how_make, length: {maximum: 60}
  mount_uploader :image, ImageUploader
end
