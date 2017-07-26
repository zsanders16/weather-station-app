class Api::HumidityRecordingsController < ApplicationController
  before_action :set_weather, except: [ :index ]

  def index
    records = current_user.weathers.select(:id, :rel_humidity, :created_at)
      .page(params[:page]).per_page(params[:num_pages])
    render json: {
      records: records,
      pagination: {
        total_pages: records.total_pages,
        current_page: records.current_page,
        next_page: records.next_page,
        count: records.count
      }
    }
    # render json: records
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
    params.required(:weather).permit(:id, :rel_humidity,:created_at)
  end

  def set_weather
    @weather = Weather.find(params[:id])
  end

end
