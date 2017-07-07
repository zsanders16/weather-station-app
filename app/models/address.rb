class Address < ApplicationRecord
  validates_presence_of :street1, :street2, :city, :state, :zipcode

  belongs_to :favorite

  geocoded_by :full_street_address
  after_validation :geocode

  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode

  after_validation :geocode, if: lambda do |obj|
    this.address.present? && this.address_changed?
  end

  def full_street_address
    "#{street1}, #{street2}, #{city}, #{state} #{zipcode}"
  end
end
