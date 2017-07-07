class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  def render_errors(model)
    render json: { messages: model.errors.full_messages.join(',\n') },
      status: 422
  end
end
