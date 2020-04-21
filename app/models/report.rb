class Report < ApplicationRecord
  validates :comment, :report_image, presence: true
  validates :comment, length: {maximum: 32}
  belongs_to :recipe
  belongs_to :user 
  mount_uploader :report_image, ImageUploader
end
