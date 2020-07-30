class FoodsController < ApplicationController
    def addfood
        @food=Food.new(hotel_id:params[:hotel_id],food_img:params[:food_img],food_name:params[:food_name],food_style:params[:food_style],food_rate:params[:food_rate],food_category:params[:food_category])
        if @food.save
            render json:{message:"food added successfully"}
        else
            render json:{message:"Error occured while adding food"}
        end
    end
    def getfood
        if Food.find_by(hotel_id:params[:id])
            render json:Food.where(hotel_id:params[:id])
        else
            render json:{message:"jack"}
        end
    end
end
