class CreateWeathers < ActiveRecord::Migration[5.1]
  def change
    create_table :weathers do |t|
      t.float :celsius, null: false
      t.float :fahrenheit
      t.float :kelvin
      t.float :rel_humidity, null: false
      t.user :belongs_to

      t.timestamps
    end
  end
end
