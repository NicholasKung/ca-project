class Api::V1::ApplicantsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def index
    render json: Applicant.all
  end

  def create
    applicant = Applicant.new(applicant_params)
    if applicant.save
      render json: { applicant: applicant }
    else
      render json: { error: applicant.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def applicant_params
    params.permit(:first, :last, :description)
  end
end
