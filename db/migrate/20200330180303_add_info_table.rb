class AddInfoTable < ActiveRecord::Migration[5.2]
  def change
    create_table :applicants do |t|
    t.string :first, null: false
    t.string :last, null: false
    t.text :description, null: false
    t.boolean :selected, default: false

    t.timestamps null: false
    end
  end
end
