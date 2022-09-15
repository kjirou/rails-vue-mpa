module ApplicationHelper
  def frontend_javascript_tag(entry, **options)
    javascript_include_tag(FrontendSupporter.javascript_path, **options).html_safe
  end
end
