class Api::HumiditiesController < ApplicationController
  include Humidities

  before_action :set_dates
  before_action :set_stations

  def actual
    rh_json = { actual: []}
    # Acquire the arduino time points
    @humidities = Weather.select(:rel_humidity, :created_at)
      .where("created_at >= ? AND created_at <= ? ",
        @dates[:start], @dates[:end] )
        # Time.now.utc - 1.hour, Time.now.utc )
    @humidities.each do |rec|
      rh_json[:actual] << {
        rel_humidity: rec.rel_humidity,
        created_at: rec.created_at
      }
    end

    # Return the json dataset
    render json: JSON.generate(rh_json)
  end

  def historical
    # Acquire the remote data for a specific set of stations
    rh_json = { historical: [] }
    @stations.each do |station|
      response = HTTParty.get(Humidities.create_uri(station,@dates))
      rh_json[:historical] << Humidities.parse_humidities(response.body)
    end

    # Return the json dataset
    render json: JSON.generate(rh_json)
  end

  def comparison
    # holder for the relative_humidity sets
    rh_json = { actual: [], historical: [] }

    # Acquire the arduino time points
    humidities = Weather.select(:rel_humidity, :created_at)
      .where('created_at > ? && created_at < ?', @dates[:start],@dates[:end])
    humidities.each_char do |rec|
      rh_json[:actual] << {
        rel_humidity: rec.rel_humidity,
        created_at: rec.created_at
      }
    end

    # Acquire the remote data for a specific set of stations
    @stations.each do |station|
      response = HTTParty.get(station)
      json = JSON.parse response.body
      parser = HumidityParser.new(json)
      rh_json[:historical] << parser.rel_humidities
    end

    # return the dataset
    render json: JSON.generate(rh_json)
  end

  private

  def set_dates
    @dates = {}
    @dates[:start] = params[:start_date]
    @dates[:end] = params[:end_date]
  end

  def set_stations
    if params[:stations]
      @stations = params[:stations].split(',')
    end
  end
end
