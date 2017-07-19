# @author Brennick Langston
# @version 0.0.1

module Humidities extend ActiveSupport::Concern

  # Parser for humidity data acquired from the weather services remote api.
  # Parser for observation format only received as a json object
  class HumidityParser

    # Instantiation of the object
    # @param json [String] body of json text from remote api
    def initialize( json )
      # do the initial parsing from json text to a ruby hash
      @observations = JSON.parse json if !json.nil?
    end

    def rel_humidities
      # Timezone::Lookup.config(:google) do |c|
      #   c.api_key = ENV['GOOGLE_TIMEZONE_API']
      #   c.client_id = ENV['GOOGLE_CLIENT_ID'] # if using 'Google for Work'
      # end
      # geo = @observations['features'][0]['geometry']['coordinates']
      # timezone = Timezone.lookup(geo[0], geo[1])
      # local = timezone.utc_to_local
      # # holde r for the relative humidity objects
      # rh = []
      # # loop through the observation features and extract the need info
      # @observations['features'].each do |feature|
      #   rh << {
      #     station: feature['properties']['station'].match(/.*\/(\w{4,5})$/)[1],
      #     created_at: local,
      #     rel_humidity: feature['properties']['relativeHumidity']['value']
      #   }
      # end
      # rh
    end
  end
end
