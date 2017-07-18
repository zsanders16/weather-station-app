class Api::HumiditiesController < ApplicationController
  before_action :set_dates
  before_action :set_stations

  def actual
    rh_json = { actual: []}
    # Acquire the arduino time points
    @humidities = Weather.select(:rel_humidity, :created_at)
      .where(
        "created_at >= to_timestamp(?,'YYYY-MM-DD HH24:MI:ss') " +
        " AND created_at <= to_timestamp(?,'YYYY-MM-DD HH24:MI:ss') ",
        @dates[:start], @dates[:end])
    @humidities.each do |rec|
      rh_json[:actual] << {
        rel_humidity: rec.rel_humidity,
        created_at: rec.created_at
      }
    end

    # Return the json dataset
    render json: JSON.generate(rh_json)
  end

  def historic
    # Acquire the remote data for a specific set of stations
    rh_json = { historical: [] }
    @stations.each do |station|
      response = HTTParty.get(station)
      parser = HumidityParser.new(response.body)
      rh_json[:historical] << parser.rel_humidities
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
    @stations = params[:stations]
  end
end
