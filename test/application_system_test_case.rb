require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :selenium, using: Rails.application.config.x.system_test.browser_kind, screen_size: [1400, 1400]
end
