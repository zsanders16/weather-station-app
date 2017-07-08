class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :google, null: false
      t.string :street1, null: false
      t.string :street2, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false

      t.belongs_to :favorite, foreign_key: true

      t.timestamps
    end
  end
end
