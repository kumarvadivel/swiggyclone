class OrderSerializer < ActiveModel::Serializer
  attributes :_id,:hoteldata, :fooddata,:username,:email,:upi,:orderid,:ordertotal
end
