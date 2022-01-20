sub main(launchArguments as dynamic)
  screen = CreateObject("roSGScreen")
  port = CreateObject("roMessagePort")

  screen.setMessagePort(port)
  screen.show()

  scene = screen.createScene("MainScene")
  scene.setFocus(true)

  while (true)
    message = Wait(0, port)
    messageType = Type(message)

    if (messageType = "roSGScreenEvent")
      if (message.isScreenClosed())
        return
      end if
    end if
  end while
end sub
