class Api::OpenCityStateController < ApplicationController
    skip_before_action :authenticate_user!, raise: false

  # Runs short quick queries matching string partials from the
  # client side application, returning a list of cities with
  # their matching states for displaying in a dropdown element
  # to a selection can be made.
  # @param [String, #read] city_name name of the city to find a state
  # @return [Hash] json object for dropdown options
  def get_city_state
    city_states = State.select("concat(cities.city,', ',states.ab) as city_state")
      .joins(:cities)
      .where("LOWER(cities.city) LIKE LOWER(?) ", "#{params[:city_name]}%")
      .order(:state)
    # TODO: order by state
    # TODO: return 'label' as a string with city_name, state_abv
    # TODO: json = { name: '', value: '', label: '' }
    
    render json: city_states.map { |value| { key: value['city_state'], value: value['city_state'], text: value['city_state'] } }

  

  end

end
