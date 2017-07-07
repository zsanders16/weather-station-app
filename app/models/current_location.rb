# == Schema Information
#
# Table name: current_locations
#
#  id         :integer          not null, primary key
#  latitude   :float
#  longitude  :float
#  address    :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CurrentLocation < ApplicationRecord
  belongs_to :user
  reverse_geocoded_by :latitude, :longitude
  after_validation :fetch_address
end
