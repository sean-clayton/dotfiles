my_config = config.app_switcher

hs.application.enableSpotlightForNameSearches(true)

function switchToApp(app_name, key_pressed)
  local application = hs.appfinder.appFromName(app_name)
  local window = application:allWindows()[1]
  window.focus()
end

for key in pairs(my_config.keys) do
  hs.hotkey.bind(my_config.modifier, tostring(key), function ()
    switchToApp(my_config.keys[key], key)
  end)
end