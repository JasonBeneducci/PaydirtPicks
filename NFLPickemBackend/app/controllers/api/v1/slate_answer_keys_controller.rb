class Api::V1::SlateAnswerKeysController < ApplicationController

    def index
        keys = SlateAnswerKey.all
        render json: keys
    end

    def fetch_winners
        url = URI("https://therundown-therundown-v1.p.rapidapi.com/sports/2/events/2019-11-24?include=all_periods&include=scores&offset=0")
        
        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE
        
        request = Net::HTTP::Get.new(url)
        request["x-rapidapi-host"] = 'therundown-therundown-v1.p.rapidapi.com'
        request["x-rapidapi-key"] = '47389e381dmshf70815e5124e93dp185965jsn2cda24ebc4cb'
        
        response = http.request(request)
        parsedGames = JSON[response.read_body]

        # Establish the winnersArray
        winnersArray = []
        # for each of the events in response...
        parsedGames["events"].each do |event|
            # run that event through the create_winner method and shovel the return value into winnersArray
            winnersArray << create_winner(event)
        end
        create_answer_key(winnersArray)
    end

    def create_winner(event)
        # check to see if the winner is either the home or away team and return the abbreviation for the winner
        if event["score"]["winner_away"] == 1
           event["teams_normalized"][0]["abbreviation"]
        elsif event["score"]["winner_home"] == 1
            event["teams_normalized"][1]["abbreviation"]
        end
    end

    def create_answer_key(winners_array)
        # create an answer key
        SlateAnswerKey.create!(
            winner1: winners_array[0],
            winner2: winners_array[1],
            winner3: winners_array[2],
            winner4: winners_array[3],
            winner5: winners_array[4],
            winner6: winners_array[5],
            winner7: winners_array[6],
        )
    end
end
