local WinWin = spoon.WinWin
local config = config.movement

local previous_key = ""
local step = 1

WinWin.gridparts = 12

function resetStep()
  step = 1
end

function reset(i)
  previous_key = key
  resetStep()
  local key = config.keys[i][1]
  local position = config.keys[i][2]
  WinWin:moveAndResize(position)
end

for pair in pairs(config.keys) do
  local key = config.keys[pair][1]
  local position = config.keys[pair][2]
  hs.hotkey.bind(config.modifier, key, function ()
    if step > 3 or not previous_key == key then
      reset(pair)
    end
    if previous_key == key then
      if step > 3 then
        reset(pair)
      else
        if position == "fullscreen" then
          WinWin:moveAndResize("shrink")
        else
          WinWin:moveAndResize("expand")
        end
        step = step + 1
      end
    else
      previous_key = key
      WinWin:moveAndResize(position)
    end
  end)
end