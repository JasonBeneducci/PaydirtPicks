# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20191125183638) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "home_team"
    t.string "away_team"
    t.string "home_team_abbr"
    t.string "away_team_abbr"
    t.string "time"
    t.string "status"
    t.string "final_status"
    t.string "final_status_home"
    t.string "away_team_record"
    t.string "home_team_record"
  end

  create_table "slate_answer_keys", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "winner1"
    t.string "winner2"
    t.string "winner3"
    t.string "winner4"
    t.string "winner5"
    t.string "winner6"
    t.string "winner7"
  end

  create_table "slates", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.string "team1"
    t.string "team2"
    t.string "team3"
    t.string "team4"
    t.string "team5"
    t.string "team6"
    t.string "team7"
  end

end
