class Api::CurrentLocationController < ApplicationController
  before_action :set_current_location, only: [:index, :update, :destroy]

  def index
    render json: @current_location
  end

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

  def destroy
    @current_location.destroy
  end

  private

    def set_action
      @current_location = current_user.current_location.first
    end

    def current_location_params
      params.require(:current_location).permit(:latitude, :longitude)
    end
end
