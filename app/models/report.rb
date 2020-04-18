class Report < ApplicationRecord
  validates :comment, :report_image, presence: true
  belongs_to :recipe
  belongs_to :user 
  mount_uploader :report_image, ImageUploader
end
