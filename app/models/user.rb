class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :name, :year, :month, :day, presence: true
  has_many :recipes
  has_many :reports
  mount_uploader :user_image, ImageUploader
end
