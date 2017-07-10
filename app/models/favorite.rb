# == Schema Information
#
# Table name: favorites
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Favorite < ApplicationRecord
  validates_presence_of :title

  belongs_to :user

  has_many :geolocations
  has_many :addresses, dependent: :destroy
end
