class GistFile < ActiveRecord::Base
  attr_accessible :body, :gist_id, :name
end
