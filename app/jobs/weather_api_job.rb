class WeatherApiJob < ApplicationJob
  queue_as :default

  def perform(api)
      

  end
end
