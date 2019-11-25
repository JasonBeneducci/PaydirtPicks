class AddRecordsToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :away_team_record, :string
    add_column :games, :home_team_record, :string
  end
end
