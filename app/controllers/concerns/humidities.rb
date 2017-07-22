module Humidities
  extend ActiveSupport::Concern

  URI_BASE = 'https://api.weather.gov'

  def self.parse_humidities( json )
    rh = []
    features = JSON.parse(json)['features']
    station = features[0]['properties']['station'].match(/.*?(\w{4,5})$/)[1]
    features.each do |feature|
      rh << [
        feature['properties']['timestamp'],
        feature['properties']['relativeHumidity']['value'].to_f.round(2)
      ]
    end
    { name: station, data: rh }
  end

  def self.create_uri(station,dates)
    uri_station = "/stations/#{station}/observations"
    uri_query = "?startTime=#{dates[:start]}&endTime=#{dates[:end]}&limit=25"
    URI_BASE + uri_station + uri_query
  end

  def self.date_to_timezone( date )
    Timezone::Lookup.config(:google) do |c|
      c.api_key = ENV['']
      c.client_id = ENV[''] # if using 'Google for Work'
    end
  end
end
