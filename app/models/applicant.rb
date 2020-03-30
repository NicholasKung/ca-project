class Applicant < ApplicationRecord
  validates :first, presence:true
  validates :last, presence:true
  validates :description, presence:true
end
