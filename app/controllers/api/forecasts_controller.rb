class Api::ForecastsController < ApplicationController

  def location_forecast
    response = HTTParty.get(params[:api])
    render json: response.body
  end



end
