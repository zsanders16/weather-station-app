class Api::OpenWeatherApiController < ApplicationController
  skip_before_action :authenticate_user!, raise: false

  def location_forecast
    response = HTTParty.get(params[:api])
    render json: response.body
  end

  def get_lat_long
    city = params[:city_state]

    api = "https://maps.googleapis.com/maps/api/geocode/json?address=#{city}"
    response = HTTParty.get(api)
    jsonBody = JSON.parse(response.body)

    lat = jsonBody['results'][0]['geometry']['location']['lat']
    long = jsonBody['results'][0]['geometry']['location']['lng']

    weather = "https://api.weather.gov/points/#{lat},#{long}/forecast"
    
    response = HTTParty.get(weather)
    render json: response.body
  end

end
