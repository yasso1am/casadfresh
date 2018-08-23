class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.date :start_date
      t.date :end_date
      t.integer :guest_qty
      t.string :vehicle_type
      t.text :accomodations
      t.boolean :dog
      t.integer :dog_qty
      t.text :note
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
