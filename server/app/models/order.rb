class Order
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field:username,type:String
  field:fooddata,type:Array
  field:hoteldata,type:Array
  field:email,type:String
  field:upi,type:String
  field:orderid,type:String
  field:ordertotal,type:String
end
