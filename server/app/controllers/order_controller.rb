class OrderController < ApplicationController

    def checkout
        @order=Order.new(order_params)
        if @order.save
            OrderMailer.order_confirmation(params[:orderid],params[:email]).deliver
            render json:{message:"order placed successfully"}
        end
    end
    def getuserorders
        if Order.find_by(username: params[:username])
            render json:Order.where(username: params[:username])
        else
            render json:{orders:"noorders"}
        end
    end


  private

  def order_params
    params.require(:order).permit!()
  end
end
