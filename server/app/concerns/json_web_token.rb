class JsonWebToken
    SECRET="swiggy"
    def self.encode(payload,exp = 15.minutes.from_now)
        payload[:exp] =exp.to_i
        token = JWT.encode(payload,SECRET)
        [token,exp]
    end
    def self.decode(token)
        payload =JWT.decode(token,SECRET).first
        HashWithIndifferentAccess.new payload
    end
end
