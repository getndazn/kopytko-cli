' @import /components/_testUtils/fakeClock.brs from @dazn/kopytko-unit-testing-framework
' @import /components/KopytkoFrameworkTestSuite.brs from @dazn/kopytko-unit-testing-framework
' @mock /components/store/Store.facade.brs from @dazn/kopytko-framework
' @mock /components/theme/Theme.facade.brs from @dazn/kopytko-framework
' @mock /components/rokuComponents/Timer.brs from @dazn/kopytko-utils
' @mock /components/timers/clearInterval.brs from @dazn/kopytko-utils

function TestSuite__CounterView() as Object
  ts = KopytkoFrameworkTestSuite()
  ts.name = "CounterView"

  beforeEach(sub ()
    m.__clock = fakeClock(m)

    mockFunction("StoreFacade.get").returnValue(0)
    mockFunction("ThemeFacade").returnValue({
      textColor: { primary: "0xFFFFFF" },
    })
  end sub)

  it("should show counterNumber from the Store as a Counter value", function () as String
    ' Given
    mockFunction("StoreFacade.get").returnValue(4)

    ' When
    initKopytko()

    ' Then
    expected = "Counter: 4"
    actual = m.numberLabel.text

    return expect(actual).toBe(expected)
  end function)

  it("should increment counterNumber in the Store each second", function () as Object
    ' Given
    initKopytko()

    ' When
    m.__clock.tick(5)

    ' Then
    return [
      expect("StoreFacade.set").toHaveBeenCalledTimes(5),
      expect("StoreFacade.set").toHaveBeenNthCalledWith(1, { key: "counterNumber", value: 1 }),
      expect("StoreFacade.set").toHaveBeenNthCalledWith(2, { key: "counterNumber", value: 2 }),
      expect("StoreFacade.set").toHaveBeenNthCalledWith(3, { key: "counterNumber", value: 3 }),
      expect("StoreFacade.set").toHaveBeenNthCalledWith(4, { key: "counterNumber", value: 4 }),
      expect("StoreFacade.set").toHaveBeenNthCalledWith(5, { key: "counterNumber", value: 5 }),
    ]
  end function)

  it("should show proper counter number after some time", function () as String
    ' Given
    initKopytko()

    ' When
    m.__clock.tick(2)

    ' Then
    expected = "Counter: 2"
    actual = m.numberLabel.text

    return expect(actual).toBe(expected)
  end function)

  it("should clear counter update interval upon component destroy", function () as String
    ' Given
    initKopytko()

    ' When
    destroyKopytko()

    ' Then
    return expect("clearInterval").toHaveBeenCalledTimes(1)
  end function)

  return ts
end function
