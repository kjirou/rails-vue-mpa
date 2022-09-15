module ApplicationHelper
  module FrontendSupporter
    class << self
      def javascript_path
        webpack_manifest['webpacked.js']
      end

      private

      def webpack_manifest
        Rails.application.config.x.frontend_supporter.webpack_manifest
      end
    end
  end
end
