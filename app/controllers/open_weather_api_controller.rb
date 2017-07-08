class OpenWeatherApiController < ApplicationController
  skip_before_action :authenticate_user!, raise: false

  def location_forecast
    response = HTTParty.get(params[:api])
    render json: response.body
  end

end
