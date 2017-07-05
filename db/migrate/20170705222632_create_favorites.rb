class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.user :belongs_to
      t.string :temperature
      t.string :rel_humidity
      t.string :pressure
      t.string :light_intensity

      t.timestamps
    end
  end
end
