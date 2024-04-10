class Api::LikesController < ApplicationController
  before_action :authenticate_user!

  def create
    @like = current_user.likes.build(post_id: params[:post_id])
    if @like.save
      render json: @like, status: :created
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @like = current_user.likes.find_by(post_id: params[:id])
    @like.destroy
    head :no_content
  end
end