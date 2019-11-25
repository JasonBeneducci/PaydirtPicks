class AddStatusToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :final_status, :string
  end
end
