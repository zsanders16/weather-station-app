namespace :sensor do
  desc "Load real-time data for testing weather sensors"
  task actual: :environment do
    user = User.first
    100.times do
      cel = Faker::Number.decimal(2).to_f
      fah = Faker::Number.decimal(2).to_f
      kel = Faker::Number.decimal(2).to_f
      Weather.create(
        celsius: cel,
        fahrenheit: fah,
        kelvin: kel,
        rel_humidity: Faker::Number.decimal(2).to_f,
        user_id: user.id
      )
    end
  end

  desc "Load historical data for testing weather sensors"
  task historical: :environment do
  end

end
