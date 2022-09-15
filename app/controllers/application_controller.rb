class ApplicationController < ActionController::Base
  private

  def render_frontend
    render html: '', layout: true
  end
end
