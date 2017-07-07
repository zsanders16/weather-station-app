class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_one :current_location, dependent: :destroy
  has_one :favorite, dependent: :destroy
  has_many :weathers, dependent: :destroy
  has_many :addresses, dependent: :destroy
end
