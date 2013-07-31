class FavoritesController < ApplicationController

  respond_to :json

  def create
    current_user.favorites.build({gist_id: params[:gist_id]})
    current_user.save
    respond_with current_user
  end

  def destroy
    fave = current_user.favorites.find do |favorite|
      p "A"*40
      p favorite
      favorite.gist_id == params[:gist_id].to_i
    end

    fave.destroy

    respond_with current_user
  end

  def index
    @favorites = current_user.favorites
    respond_with @favorites
  end
end