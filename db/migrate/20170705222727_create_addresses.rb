class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.favorite :belongs_to
      t.string :street1
      t.string :street2
      t.string :city
      t.string :state
      t.string :zipcode

      t.timestamps
    end
  end
end
