' @import /components/store/Store.facade.brs from @dazn/kopytko-framework
' @import /components/timers/clearInterval.brs from @dazn/kopytko-utils
' @import /components/timers/setInterval.brs from @dazn/kopytko-utils
' @import /components/timers/setTimeout.brs from @dazn/kopytko-utils
sub constructor()
  m._store = StoreFacade()

  m.state = {
    number: 0,
  }

  m._intervalTimerId = Invalid
end sub

sub componentDidMount()
  m._intervalTimerId = setInterval(_onTick, 1)
end sub

sub componentDidUpdate(prevProps as Object, prevState as Object)
  if (prevState.number <> m.state.number)
    m._store.set("counterNumber", m.state.number)
  end if

  if (m.state.number = 10)
    clearInterval(m._intervalTimerId)
    setTimeout(_clearNumber, 2)
  end if
end sub

sub _onTick()
  setState({ number: m.state.number + 1 })
end sub

sub _clearNumber()
  setState({ number: 0 })
end sub
