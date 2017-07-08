class Api::AddressesController < ApplicationController
  before_action :set_favorite, only: [:index, :show, :update, :destroy]
  before_action :set_address, only: [:show, :update, :destroy]

  def index
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
    favorite = current_user.favorite
    address = favorite.addresses.new(address_params)
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
    @favorite = current_user.favorite
  end

  def set_address
    @address = @favorite.addresses.find(params[:id])
  end

  def address_params
    # format the address as a google string
    # set the geolocation lat and lng from google
    geolocation = format_geolocation(params)
    geo = Geocoder::coordinates(geolocation)
    address = {}
    address['latitude'] = geo[0]
    address['longitude'] = geo[1]
    address['google'] = geolocation

    params['address'].merge!(address)
    params.require(:address).permit(:street1, :street2, :city,
      :state, :zipcode, :latitude, :longitude, :google)
  end

  def format_geolocation(params)
    "#{params['street1']}, #{params['street2']}, #{params['city']}, #{params['state']} #{params['zipcode']}"
  end
end
