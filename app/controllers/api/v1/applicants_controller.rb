class Api::V1::ApplicantsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def index
    render json: Applicant.all
  end
end
