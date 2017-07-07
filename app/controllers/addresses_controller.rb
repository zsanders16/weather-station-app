class AddressesController < ApplicationController
  before_action :set_favorite, only: [:show, :update, :destroy]
  before_action :set_address, only: [:show, :update, :destroy]

  def index
    @favorite = current_user.favorites.find(params[:favorite_id])
    @addresses = @favorite.addresses.all
    render json: @addresses
  end

  def show
    render json: @address
  end

  def edit
    render json: @address
  end

  def update
    if @address.update(address_params)
      render json: @address
    else
      render_errors(@address)
    end
  end

  def create
    address = @favorite.build_address(address_params)
    if address.save
      render json: address
    else
      render_errors(address)
    end
  end

  def destroy
    @address.destroy
  end

  private

  def set_favorite
    @favorite = current_user.favorites.find(params[:favorite_id])
  end

  def set_address
    @address = @favorite.addresses.find(params[:id])
  end

  def address_params
    params.require(:address)
      .permit(:latitude, :longitude, :street, :city, :state, :zipcode)
  end
end
