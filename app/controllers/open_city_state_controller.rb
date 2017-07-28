class OpenCityStateController < ApplicationController
    skip_before_action :authenticate_user!, raise: false


    def get_states
        binding.pry
        states = CS.get :us


        

        binding.pry
    end

end
