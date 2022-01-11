' @import /components/router/Router.facade.brs from @dazn/kopytko-framework
' @import /components/store/Store.facade.brs from @dazn/kopytko-framework
' @import /components/theme/Theme.facade.brs from @dazn/kopytko-framework

sub constructor()
  m._router = RouterFacade()
  m._store = StoreFacade()
  m._theme = ThemeFacade()

  m.counterNumber = m._store.get("counterNumber")
end sub

sub componentDidMount()
  m.elementToFocus = m.clockButton
end sub

function onKeyEvent(key as String, press as Boolean) as Boolean
  if (NOT press) then return false

  if (key = "left" AND NOT m.clockButton.isInFocusChain())
    m.clockButton.setFocus(true)

    return true
  else if (key = "right" AND NOT m.counterButton.isInFocusChain())
    m.counterButton.setFocus(true)

    return true
  end if

  return false
end function

sub goToRoute(event as Object)
  node = event.getRoSGNode()
  m._router.navigate(node.route)
end sub
