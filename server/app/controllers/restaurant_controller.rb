class RestaurantController < ApplicationController
    def addhotel
        if City.find_by(city: /.*#{params[:city]}.*/i)
            @restaurant=Restaurant.new(restaurant_name:params[:restaurant_name],landmark:params[:landmark],cusine:params[:cusine],address:params[:address],hotel_type:params[:hotel_type],ratings:params[:ratings],deliverytime:params[:deliverytime],cost_for_two:params[:cost_for_two],offer:params[:offer],phone:params[:phone],hotel_liscenseno:params[:hotel_liscenseno],hotel_image:params[:hotel_image],city:params[:city])
            if @restaurant.save
                render json:{message:"Hotel added successfully"}
            else
                render json:{message:"Error occured while adding hotel"}
            end
            
        else
            render json:{message:"services for this city is unavailable"}
            
        end
        
    end
    def gethotels
        if Restaurant.find_by(city: /.*#{params[:city]}.*/)
            render json:Restaurant.where(city: /.*#{params[:city]}.*/i)
      
            
        else
            render json:{message:"city not found"}
        end
    end
    def gethotel
        render json:Restaurant.find_by(_id: params[:id])
    end
    def gethoteldata
        if Restaurant.find_by(city: params[:city] , restaurant_name: params[:name])
            render json:Restaurant.find_by(city: params[:city] , restaurant_name: params[:name])
        else
            render json:{message:"hotel not found"}
        end
    end
end
