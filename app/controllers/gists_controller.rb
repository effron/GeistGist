class GistsController < ApplicationController

  respond_to :json

  def index
    @gists = current_user.gists
    respond_with @gists
  end

end