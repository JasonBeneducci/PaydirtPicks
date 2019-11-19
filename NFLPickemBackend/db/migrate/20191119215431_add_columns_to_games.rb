class AddColumnsToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :home_team, :string
    add_column :games, :away_team, :string
    add_column :games, :home_team_abbr, :string
    add_column :games, :away_team_abbr, :string
    add_column :games, :time, :string
    add_column :games, :status, :string
  end
end
