class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.string :temperature, null: false
      t.string :rel_humidity, null: false
      t.string :pressure
      t.string :light_intensity

      t.belongs_to :user
      
      t.timestamps
    end
  end
end
