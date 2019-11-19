class Api::V1::PicksheetsController < ApplicationController

#     def index
#         @picksheets = Picksheet.all
#         render json: @picksheets
#     end

#     def update
#     @picksheet.create(picksheets)
#     if @picksheet.save
#       render json: @picksheet, status: :accepted
#     else
#       render json: { errors: @picksheet.errors.full_messages }, status: :unprocessible_entity
#     end

#   end

#   private

#   def picksheet_params
#     params.permit(:user, :teams)
#   end
# end
