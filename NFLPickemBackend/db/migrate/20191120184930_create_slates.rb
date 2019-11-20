class CreateSlates < ActiveRecord::Migration[5.1]
  def change
    create_table :slates do |t|
      
      t.timestamps
    end
  end
end
