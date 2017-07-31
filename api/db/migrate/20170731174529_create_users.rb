class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :pic
      t.integer :place_id
      t.integer :friend_id

      t.timestamps
    end
  end
end
