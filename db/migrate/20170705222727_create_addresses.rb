class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :street1, null: false
      t.string :street2
      t.string :city, null: false
      t.string :state, null: false
      t.string :zipcode, null: false

      t.belongs_to :favorite
      
      t.timestamps
    end
  end
end
