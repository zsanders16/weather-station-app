class CreateStations < ActiveRecord::Migration[5.1]
  def change
    create_table :stations do |t|
      t.string :url, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :stationIdentifier, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
