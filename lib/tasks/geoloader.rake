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

        # api = "https://maps.googleapis.com/maps/api/geocode/json?address=#{city}, #{state.ab}"
        # response = HTTParty.get(api)
        # jsonBody = JSON.parse(response.body)

        # lat = jsonBody['results'][0]['geometry']['location']['lat']
        # long = jsonBody['results'][0]['geometry']['location']['lng']

        state.cities.create(city: city)
      end
    end




  end

end
