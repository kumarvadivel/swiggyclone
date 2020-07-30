require 'bcrypt'
class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /signup
  def signup
    if User.find_by(username:params[:username])
        render json:{message:"username already exsists"}
    else

        @user = User.new(firstname:params[:firstname],lastname:params[:lastname],username:params[:username],email:params[:email],password_digest:BCrypt::Password.create(params[:password]),address:params[:address],phone:params[:phone],city:params[:city])

      if @user.save
       render json: {message:"signup successfull"}, status: :created, location: @user
      else
        render json: {message:"signup unsuccessfull please try again"}, status: :unprocessable_entity
      end
    end
  end

  
    def getuser
        if User.find_by(username: params[:username])
          render json: User.find_by(username: params[:username])
        end
    end
  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.fetch(:user, {})
    end
end
