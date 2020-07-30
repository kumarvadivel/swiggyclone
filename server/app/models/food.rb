class Food
  include Mongoid::Document
  field:hotel_id,type:String
  field:food_img,type:String
  field:food_name,type:String
  field:food_style,type:String
  field:food_rate,type:String
  field:food_category,type:String
 
end
