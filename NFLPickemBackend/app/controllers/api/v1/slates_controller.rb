require 'pry'
class Api::V1::SlatesController < ApplicationController
    def index
        # create an action to render all the Slates from the database as JSON. Mainly for testing purposes
        slates = Slate.all
        render json: slates
    end

    def new
        # Action creates a Slate based on the users selections for each game
        Slate.create(
            username: params["username"],
            team1: params["teams"][0],
            team2: params["teams"][1],
            team3: params["teams"][2],
            team4: params["teams"][3],
            team5: params["teams"][4],
            team6: params["teams"][5],
            team7: params["teams"][6]
        )
    end
end
