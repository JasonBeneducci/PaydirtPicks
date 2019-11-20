class AddColumnsToSlates < ActiveRecord::Migration[5.1]
  def change
    add_column :slates, :username, :string
    add_column :slates, :team1, :string
    add_column :slates, :team2, :string
    add_column :slates, :team3, :string
    add_column :slates, :team4, :string
    add_column :slates, :team5, :string
    add_column :slates, :team6, :string
    add_column :slates, :team7, :string
  end
end
