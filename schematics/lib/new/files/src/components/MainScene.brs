sub init()
  #if RALE
    m.tracker = m.top.createChild("TrackerTask")
  #end if

  app = m.top.createChild("AppView")
  app.id = "app"
  app.callFunc("initKopytko", {})
end sub
