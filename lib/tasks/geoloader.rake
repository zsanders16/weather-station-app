namespace :geoloader do
  
  desc "Load all states, cities and zipcodes"
  task cities: :environment do
    State.destroy_all
    City.destroy_all

    states = CS.get :us 
    states.each do |k,v|
      state = State.create(ab: "#{k}", state: v)
      cities = CS.get :us, :"#{k}"

      cities.each do |city| 
        state.cities.create(city: city)
      end
    end




  end

end
