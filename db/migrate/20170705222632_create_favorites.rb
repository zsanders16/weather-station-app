class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.string :title, null: false

      t.belongs_to :user

      t.timestamps
    end
  end
end
