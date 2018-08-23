class CreateGuestbooks < ActiveRecord::Migration[5.2]
  def change
    create_table :guestbooks do |t|
      t.string :headline
      t.text :body
      t.integer :rating
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
