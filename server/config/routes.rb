Rails.application.routes.draw do
  resources :orders
  resources :cities
  resources :users
  post "/signup", to: "users#signup"
  post "/login", to:"auth#create"
  get  "/authenticate",to:"auth#authenticate"
  get  "/logout",to:"auth#logout"
  post  "/addcity",to:"cities#addcity"
  post   "/searchcity",to:"cities#searchcity"
  post   "/addhotel",to:"restaurant#addhotel"
  get     "/restaurants/:city",to:"restaurant#gethotels"
  get     "/gethotel/:id",to:"restaurant#gethotel"
  post   "/addfood",to:"foods#addfood"
  get    "/getfood/:id",to:"foods#getfood"
  get   "getuser/:username", to:"users#getuser"
  get   "gethoteldata/:city/:name", to:"restaurant#gethoteldata"
  post  "/checkout",to:"order#checkout"
  get   "getuserorder/:username",to:"order#getuserorders"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
