class Phrase < ApplicationRecord
  acts_as_list scope: :greeting
  
  belongs_to :greeting
end
