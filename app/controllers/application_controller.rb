class ApplicationController < ActionController::Base
  helper_method :vue_root_data_attributes

  private

  def render_frontend(page_data: {})
    # TODO: Varidate that the `page_data` is schema compliant.
    render html: '', layout: true, assigns: { page_data: page_data }
  end

  def vue_root_data_attributes(page_data)
    {
      'data-controller-path': controller_path,
      'data-action-name': action_name,
      'data-csrf-param': request_forgery_protection_token,
      'data-csrf-token': form_authenticity_token,
      'data-initial-page-data': page_data.to_json.html_safe,
    }
  end
end
