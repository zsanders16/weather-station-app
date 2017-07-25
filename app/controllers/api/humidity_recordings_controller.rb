class Api::HumidityRecordingsController < ApplicationController
  before_action :set_weather, except: [ :index ]

  def index
    records = current_user.weathers.select(:rel_humidity, :created_at)
      .page(params[:page]).num_pages(params[:num_pages])
    render json: records
  end

  def show
    render @weather
  end

  def edit
    render @weather
  end

  def update
    if @weather.update(weather_params)
      render json: @weather
    else
      render_error @weather
    end
  end

  def destroy
    @weather.destroy
  end

  private

  def weather_params
    params.required(:weather).permit(:rel_humidity,:created_at)
  end

  def set_weather
    @weather = Weather.find(params[:id])
  end

end
