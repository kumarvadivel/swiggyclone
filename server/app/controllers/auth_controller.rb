class AuthController < ApplicationController
   
    def create
        if params[:username] == "admin"

            user =User.find_by(username:params[:username])
            if user&.authenticate(params[:password])
                token,exp =JsonWebToken.encode(username:user.username,role:"admin")
                cookies[:token] = {value: token, expires: 1.hour.from_now ,domain: :all}
                render json:{token: token, exp:exp.strftime('%d-%m-%Y %H:%M' ),
                    username:user.username}
            else
                render json:{errors:'bad credentials'}
            end
        else
            user =User.find_by(username:params[:username])
            if user&.authenticate(params[:password])
                token,exp =JsonWebToken.encode(username:user.username,role:"user")

              cookies[:token] = {value: token, expires: 1.hour.from_now ,domain: :all}

                render json:{token: token, exp:exp.strftime('%d-%m-%Y %H:%M' ),
                                username:user.username}
            else
                render json:{errors:'bad credentials'}
            end
        end
    end



    def  authenticate
        if cookies[:token]
        cok=cookies[:token]
        payload=JsonWebToken.decode(cok)
        render json:payload
        else
            render json:{username:nil,isauthenticated:false}
        end
    end


    def logout
        if cookies[:token]
            cookies.delete :token
            render json:{message:"logout successfull  "}
        end

    end
end