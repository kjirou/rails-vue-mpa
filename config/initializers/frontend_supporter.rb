def load_webpack_manifest(path)
  JSON.parse(File.read(path))
end

webpack_manifest_json_path =
  File.join(Rails.application.config.x.frontend_supporter.webpack_output_path, 'manifest.json')

unless File.exist?(webpack_manifest_json_path)
  raise 'Please execute `npm run build:dev` or `npm run build:prod` before operating the Rails.'
end
Rails.application.config.x.frontend_supporter.webpack_manifest =
  load_webpack_manifest(webpack_manifest_json_path)

if Rails.application.config.x.frontend_supporter.update_webpack_manifest_on_reloading == true
  reloader = Rails.application.config.file_watcher.new([webpack_manifest_json_path]) do
    if File.exist?(webpack_manifest_json_path)
      Rails.application.config.x.frontend_supporter.webpack_manifest =
        load_webpack_manifest(webpack_manifest_json_path)
    end
  end

  Rails.application.reloaders << reloader

  ActiveSupport::Reloader.to_prepare do
    reloader.execute_if_updated
  end
end
