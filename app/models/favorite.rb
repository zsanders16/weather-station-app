class Favorite < ApplicationRecord
  validates_presence_of :temperature, :rel_humidity, :pressure, :light_intensity

  belongs_to :user
  has_many :addresses
end
