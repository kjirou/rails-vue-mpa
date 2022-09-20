class ApplicationController < ActionController::Base
  private

  def render_frontend(page_data: {}, page_name: nil)
    # TODO: Varidate that the `page_data` is schema compliant.
    render html: '', layout: true, assigns: {
      vue_root_data_attributes: {
        'data-controller-path': controller_path,
        'data-action-name': action_name,
        # Specify when you want to render a different Vue page than action_name.
        # e.g. "create" -> "new", "update" -> "edit"
        'data-page-name': page_name,
        'data-csrf-param': request_forgery_protection_token,
        'data-csrf-token': form_authenticity_token,
        'data-initial-page-data': page_data.to_json.html_safe,
      }
    }
  end
end
