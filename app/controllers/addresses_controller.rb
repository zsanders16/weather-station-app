class AddressesController < ApplicationController
  before_action :set_address, only: [:show, :update, :destroy]

  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  def create
  end

  def destroy
  end

  private

  def set_address
    @address = current_user.addresses.find(params[:id])
  end

  def address_params
    params.require(:address)
      .permit(:latitude, :longitude, :street, :city, :state, :zipcode)
  end
end
