require 'uri'
require 'net/http'
require 'openssl'

class Api::V1::GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end

    def fetch_games
        url = URI("https://therundown-therundown-v1.p.rapidapi.com/sports/2/events?include=all_periods&include=scores")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        request = Net::HTTP::Get.new(url)
        request["x-rapidapi-host"] = 'therundown-therundown-v1.p.rapidapi.com'
        request["x-rapidapi-key"] = '47389e381dmshf70815e5124e93dp185965jsn2cda24ebc4cb'

        
        # request["x-rapidapi-key"] = Rails.application.credentials.dig(:API_KEY)
        # puts Rails.application.credentials.dig(:API_KEY)

        response = http.request(request)
        parsedGames = JSON[response.read_body]

        Game.all.destroy_all
        ActiveRecord::Base.connection.reset_pk_sequence!('games')
        parsedGames["events"].each do |event|
            create_games(event)
        end
    end

    def create_games(event)
        Game.create!(
            time: event["score"]["event_status_detail"],
            status: event["score"]["event_status"],
            home_team_abbr: event["teams_normalized"][0]["abbreviation"],
            away_team_abbr: event["teams_normalized"][1]["abbreviation"],
            home_team: event["teams_normalized"][0]["name"] + " " + event["teams_normalized"][0]["mascot"],
            away_team: event["teams_normalized"][1]["name"] + " " + event["teams_normalized"][1]["mascot"],
        )
    end
end