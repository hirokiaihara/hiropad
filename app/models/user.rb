class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :name, :year, :month, :day, presence: true
  validates :name, length: {maximum: 10}
  validates :users_comment, length: {maximum: 120}
  has_many :recipes
  has_many :reports
  mount_uploader :user_image, ImageUploader
end
