class OrderMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.order_mailer.order_confirmation.subject
  #
  def order_confirmation(uuid,email)
    @greeting = "Hi"

    mail to: "kumarvadivel1999@gmail.com"
  end
end
