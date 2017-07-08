class Api::WeathersController < ApplicationController
  before_action :set_dates, only: :data
  before_action :set_weather, only: :data

  # returns a simple data set for the given date ranges
  def data
    if @weather
      render json: @weather
    else
      render_errors(@weather)
    end
  end


  # returns a new data set from a given timestamp forward
  # params[:start_date]
  def actual
    weather = current_user.weathers.where(
      "created_at >= :start_date",
      { start_date: params[:start_date] }
    )
  end

  private

  def set_dates
    @start_date = params[:start]
    @end_date = params[:end]
  end

  def set_weather
    @weather = current_user.weathers.where(
      "created_at >= :start_date AND created_at <= :end_date",
      {
        start_date: @start_date,
        end_date: @end_date
      }
    ).order(created_at: :asc)
  end

end
