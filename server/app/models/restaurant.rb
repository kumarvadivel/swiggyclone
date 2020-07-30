class Restaurant
  include Mongoid::Document
  field:restaurant_name,type:String
  field:cusine,type:String
  field:landmark,type:String
  field:address,type:String
  field:ratings,type:String
  field:deliverytime,type:String
  field:cost_for_two,type:String
  field:offer,type:Array
  field:hotel_type,type:String
  field:phone,type:String
  field:hotel_liscenseno,type:String
  field:hotel_image,type:String
  field:city,type:String
end
