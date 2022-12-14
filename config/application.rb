require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsVueMpa
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    config.x.frontend_supporter.webpack_output_path = Rails.root.join('public', 'dist')
    config.x.frontend_supporter.update_webpack_manifest_on_reloading = false

    config.x.system_test.browser_kind = ENV.fetch('SYSTEM_TEST_BROWSER_KIND', 'chrome').intern
  end
end
