# @author Brennick Langston
# @version 0.0.1

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
    # holde r for the relative humidity objects
    rh = []
    # loop through the observation features and extract the need info
    @observations[:features].each do |feature|
      rh << {
        station: feature[:properties][:station].match(/.*\/(\w{4,5})$/)[0],
        created_at: feature[:properties][:timestamp],
        rel_humidity: feature[:properties][:relativeHumidity][:value]
      }
    end
    @observations
  end
end
