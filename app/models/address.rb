# == Schema Information
#
# Table name: addresses
#
#  id          :integer          not null, primary key
#  google      :string           not null
#  street1     :string           not null
#  street2     :string           not null
#  city        :string           not null
#  state       :string           not null
#  zipcode     :integer          not null
#  favorite_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  latitude    :float
#  longitude   :float
#

class Address < ApplicationRecord
  validates_presence_of :google, :street1, :city, :state, :zipcode, :latitude, :longitude

  belongs_to :favorite
end
