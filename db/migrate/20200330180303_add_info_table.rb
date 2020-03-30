class AddInfoTable < ActiveRecord::Migration[5.2]
  def change
    create_table :applicant do |t|
    t.string :first, null: false
    t.string :last, null: false
    t.text :description, null: false
    
    t.timestamps null: false
    end
  end
end
