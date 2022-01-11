' @import /components/store/Store.facade.brs from @dazn/kopytko-framework
' @import /components/theme/Theme.facade.brs from @dazn/kopytko-framework
' @import /components/timers/clearInterval.brs from @dazn/kopytko-utils
' @import /components/timers/setInterval.brs from @dazn/kopytko-utils

sub constructor()
  m._store = StoreFacade()
  m._theme = ThemeFacade()

  m.state = {
    number: m._store.get("counterNumber"),
  }

  m._intervalTimerId = Invalid
end sub

sub componentDidMount()
  m._intervalTimerId = setInterval(_onTick, 1)
end sub

sub componentWillUnmount()
  clearInterval(m._intervalTimerId)
end sub

sub componentDidUpdate(prevProps as Object, prevState as Object)
  if (prevState.number <> m.state.number)
    m._store.set("counterNumber", m.state.number)
  end if
end sub

sub _onTick()
  setState({ number: m.state.number + 1 })
end sub
