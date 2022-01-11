sub init()
  m.top.visible = false
  m.top.spinInterval = 1
  m.top.uri = "pkg:/images/busyspinner_hd.png"
  m.top.poster.observeField("loadStatus", "showSpinner")
end sub

sub showSpinner()
  if m.top.poster.loadStatus = "ready"
    centerX = (1920 - m.top.poster.bitmapWidth) / 2
    centerY = (1080 - m.top.poster.bitmapHeight) / 2
    m.top.translation = [ centerX, centerY ]
    m.top.visible = true
  end if
end sub
