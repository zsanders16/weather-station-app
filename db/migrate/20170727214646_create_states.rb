class CreateStates < ActiveRecord::Migration[5.1]
  def change
    create_table :states do |t|
      t.string :ab
      t.string :state

      t.timestamps
    end
  end
end