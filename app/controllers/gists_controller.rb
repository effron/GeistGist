class GistsController < ApplicationController

  respond_to :json

  def index
    @gists = current_user.gists
    respond_with @gists
  end

  def create
    current_user.gists.build(params[:gist])
    current_user.save!

    respond_with current_user.gists.last
  end

end