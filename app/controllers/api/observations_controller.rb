class Api::ObservationsController < ApplicationController
  before_action :set_uri, only: [ :observation_request ]

  def observation_request
    response = HTTParty.get(@uri)
    render json: response.body
  end

  private

  def set_uri
    if params[:uri]
      @uri = params[:uri]
    else
      @uri = 'No Uri Found'
    end
  end
end
