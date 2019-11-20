require 'pry'
class Api::V1::SlatesController < ApplicationController
    def index
        slates = Slate.all
        render json: slates
    end

    def new
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
