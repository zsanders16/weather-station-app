# == Schema Information
#
# Table name: stations
#
#  id                :integer          not null, primary key
#  url               :string           not null
#  lat               :float            not null
#  lng               :float            not null
#  stationIdentifier :string           not null
#  name              :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Station < ApplicationRecord
end
