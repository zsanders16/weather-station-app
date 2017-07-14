namespace :hist do
  desc "Rake Historical Temperature data from the Internet Weather Sites"
  task scrape: :environment do
    # Create the Search Dates needed for the query
    start_str = Historical.select('max(timestamp)').to_s
    start_date = DateTime.parse(start_str)
    next_date = DateTime.parse( start_date.next_year.to_s )

    # Set the URIs needed for making the queries
    uri_base = 'https://api.weather.gov'
    uri_dates = "?startTime=#{start_date}&endTime=#{next_date}"
    uri_stations = uri_base + '/stations?states=UT'

    # List the stations and insert into the database
    resp_stations = HTTParty.get(uri_stations)
    stations = JSON.parse(resp_stations.body)
    stations.features.each do |station|
      Station.create(
        url: station.id,
        lat: station[:geometry][:coordinates][0],
        lng: station[:geometry][:coordinates][1],
        stationIdentifier: station.properties.stationIdentifier,
        name: station.properties.name
      )
    end
    puts "Number of Stations Created: #{Station.all.count}"

    # TODO: Obtain unique station_id list from the database
    stations = Station.distinct(:station).all
    stations.each do |station|
      station_id = station.station
      uri_observations = uri_base + "/stations/#{station_id}/observations#{uri_dates}"
      response = HTTParty.get(uri_observations)
      # TODO: parse the json body
      observations = JSON.parse(response.body)
      observations[:features].each do |obs|
        Historical.create(
          url: obs[:id],
          lat: obs[:geometry][:coordinates][0],
          lng: obs[:geometry][:coordinates][1],
          station: obs[:properties].station,
          timestamp: obs[:properties].timestamp,
          degC: obs[:properties][:temperature].value,
          relativeHumidity: obs[:properties][:relativeHumidity].value,
          heatIndex: obs[:properties][:heatIndex].value
        )
      end
      print "Number of Observations for #{station_id}: " +
        Historical.where(' station == ?',station_id).count

      # Stash the files locally as backups
      folder = '/observations'
      file_name = folder + observations.features[0].id
      IO.open(file_name,'w') { |io| io << observations }
    end

    puts "#{uri_stations}"
    puts "#{uri_observations}"
  end

end
