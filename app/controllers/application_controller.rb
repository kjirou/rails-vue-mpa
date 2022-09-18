class ApplicationController < ActionController::Base
  private

  def render_frontend(page_data: {})
    render html: '', layout: true, assigns: { page_data: page_data }
  end
end
