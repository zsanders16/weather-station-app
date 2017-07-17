# == Schema Information
#
# Table name: historicals
#
#  id               :integer          not null, primary key
#  url              :string
#  lat              :float
#  lng              :float
#  station          :string
#  timestamp        :string
#  degC             :float
#  relativeHumidity :float
#  heatIndex        :float
#  station_id       :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Historical < ApplicationRecord
end
