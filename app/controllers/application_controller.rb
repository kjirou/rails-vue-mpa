class ApplicationController < ActionController::Base
  private

  def render_frontend(page_data: {})
    # TODO: Varidate that the `page_data` is schema compliant.
    render html: '', layout: true, assigns: { page_data: page_data }
  end
end
