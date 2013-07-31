class GistsController < ApplicationController

  respond_to :json

  def index
    @gists = current_user.gists
    respond_with @gists
  end

  def create
    current_user.gists.build(params[:gist])
    unless current_user.save
      p "A" * 44
      p current_user
    end

    @gist = current_user.gists.last
    render json: @gist.as_json(include: { favorites: {}, gist_files: {} })
  end

end