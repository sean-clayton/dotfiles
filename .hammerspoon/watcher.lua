-- --------------------------------------
-- Watcher to load the configuration in case of changes
-- --------------------------------------


-- Generate a notification on reload

notification = hs.notify.new(nil, {
  title = "Hammerspoon",
  subTitle = "Configuration Reloaded",
  informativeText = "Loaded New Configuration",
  soundName = hs.notify.defaultNotificationSound
})
notification:send()

function reload_config(files)
  hs.reload()
end
hs.pathwatcher.new(os.getenv("HOME") .. "/.hammerspoon/", reload_config):start()

-- Manually Reload

hs.hotkey.bind(hypershift, "r", reload_config)
