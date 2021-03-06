class Api::HumidityRecordingsController < ApplicationController
  before_action :set_weather, except: [ :index, :query ]

  def index
    records = current_user.weathers.select(:id, :rel_humidity, :created_at)
      .order(:created_at)
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

  def query
    # All Dates should be a UTC timestamp
    records = current_user.weathers.select(:id, :rel_humidity, :created_at)
      .where('created_at >= ? AND created_at <= ?',
        params[:startDate], params[:endDate])
      .order(:created_at)
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
    params.require(:weather).permit(:id, :rel_humidity, :created_at)
  end

  def set_weather
    @weather = Weather.find(params[:id])
  end

end
