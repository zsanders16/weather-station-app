class Api::CurrentLocationController < ApplicationController
  before_action :set_current_location, only: [:update, :manage_current_location]


  def create
    current_location = current_user.build_current_location(current_location_params)
    if current_location.save
      render json: current_location
    else
      render json: { errors: current_location.errors.full_messages }, status: :bad_request
    end
  end

  def update
    if @current_location.update(current_location_params)
      render json: @current_location
    else
      render json: { errors: @current_location.errors.full_messages }, status: :bad_request
    end
  end


  # custom methods
  def manage_current_location
    if @current_location.nil?
      create
    else
      update
    end
  end

  private

    def set_current_location
      @current_location = current_user.current_location
    end

    def current_location_params
      params.require(:current_location).permit(:latitude, :longitude)
    end
end
