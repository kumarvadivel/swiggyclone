class CitiesController < ApplicationController
  before_action :set_city, only: [:show, :update, :destroy]

  # GET /cities
  def index
    @cities = City.all

    render json: @cities
  end

  # GET /cities/1
  def show
    render json: @city
  end

  # POST /cities
  def addcity
    if City.find_by(city: params[:city])
      render json:{message:"City already exsists"}
    
      
    else
      @city=City.new(city: params[:city])
      if @city.save
        render json:{message:"city added successfully"}
      else
        render json:{message:"city not added"}
      end
    end
  end
    def searchcity
      if City.find_by(city: /.*#{params[:city]}.*/i)
        render json:{status:true}
      else
        render json:{status:false}
      end
    end
  # PATCH/PUT /cities/1
  def update
    if @city.update(city_params)
      render json: @city
    else
      render json: @city.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cities/1
  def destroy
    @city.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_city
      @city = City.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def city_params
      params.require(:city).permit(:city)
    end
end
