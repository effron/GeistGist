class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id

  belongs_to :user
  belongs_to :gist

end
