# == Schema Information
#
# Table name: weathers
#
#  id           :integer          not null, primary key
#  celsius      :float            not null
#  fahrenheit   :float
#  kelvin       :float
#  rel_humidity :float            not null
#  user_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Weather < ApplicationRecord
  validates_presence_of :celsius, :rel_humidity
  
  belongs_to :user
end
