class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword
  field:firstname,type:String
  field:lastname,type:String
  field:username,type:String
  field:email,type:String
  field:phone,type:String
  field:address,type:String
  field:password_digest,type:String
  field:city, type:String
  has_secure_password
end
