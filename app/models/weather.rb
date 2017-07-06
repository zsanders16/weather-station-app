class Weather < ApplicationRecord
  validates_presence_of :celsius, :rel_humidity
  
  belongs_to :user
end
