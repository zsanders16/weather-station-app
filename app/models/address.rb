class Address < ApplicationRecord
  validates_presence_of :street1, :street2, :city, :state, :zipcode

  belongs_to :favorite
end
