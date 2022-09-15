class ApplicationController < ActionController::Base
  def render_frontend
    render html: '', layout: true
  end
end
