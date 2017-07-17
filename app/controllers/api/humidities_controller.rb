class Api::HumiditiesController < ApplicationController
  before_action :set_dates
  before_action :set_stations

  def actual
    rh_json = {}
    # Acquire the arduino time points
    @humidities = Weather.select(:rel_humidity, :created_at)
      .where('created_at > ? && created_at < ?', @dates)
    rh_json[:actual] = @humidities

    # Return the json dataset
    render json: JSON.generate(@humidites)
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
    rh_json = {}

    # Acquire the arduino time points
    @humidities = Weather.select(:rel_humidity, :created_at)
      .where('created_at > ? && created_at < ?', @dates)
    rh_json[:actual] = @humidities

    # Acquire the remote data for a specific set of stations
    rh_json[:historical] = []
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
