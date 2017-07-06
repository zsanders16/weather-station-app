class CreateCurrentLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :current_locations do |t|
      t.float :latitude
      t.float :longitude
      t.string :address
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
