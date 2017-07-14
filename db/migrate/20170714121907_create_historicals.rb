class CreateHistoricals < ActiveRecord::Migration[5.1]
  def change
    create_table :historicals do |t|
      t.string :url
      t.float :lat
      t.float :lng
      t.string :station
      t.string :timestamp
      t.float :degC
      t.float :relativeHumidity
      t.float :heatIndex

      t.belongs_to :station

      t.timestamps
    end
  end
end
