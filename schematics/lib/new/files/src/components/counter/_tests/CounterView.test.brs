' @import /components/_testUtils/fakeClock.brs from @dazn/kopytko-unit-testing-framework
' @import /components/KopytkoFrameworkTestSuite.brs from @dazn/kopytko-unit-testing-framework
' @mock /components/store/Store.facade.brs from @dazn/kopytko-framework
' @mock /components/theme/Theme.facade.brs from @dazn/kopytko-framework
' @mock /components/rokuComponents/Timer.brs from @dazn/kopytko-utils
' @mock /components/timers/clearInterval.brs from @dazn/kopytko-utils

function TestSuite__CounterView() as Object
  ts = KopytkoFrameworkTestSuite()
  ts.name = "CounterView"

  ts.setBeforeEach(sub (ts as Object)
    m.__clock = fakeClock(m)

    m.__mocks = {
      storeFacade: {
        get: {
          returnValue: 0,
        },
      },
      themeFacade: {
        properties: {
          textColor: { primary: "0xFFFFFF" },
        },
      },
    }
  end sub)

  ts.addTest("should show counterNumber from the Store as a Counter value", function (ts as Object) as String
    ' Given
    m.__mocks.storeFacade.get.returnValue = 4

    ' When
    initKopytko()

    ' Then
    expected = "Counter: 4"
    actual = m.numberLabel.text

    return ts.assertEqual(expected, actual)
  end function)

  ts.addTest("should increment counterNumber in the Store each second", function (ts as Object) as String
    ' Given
    initKopytko()

    ' When
    m.__clock.tick(5)

    ' Then
    return ts.assertMethodWasCalled("StoreFacade.set", { key: "counterNumber" }, { times: 5 })
  end function)

  ts.addTest("should show proper counter number after some time", function (ts as Object) as String
    ' Given
    initKopytko()

    ' When
    m.__clock.tick(2)

    ' Then
    expected = "Counter: 2"
    actual = m.numberLabel.text

    return ts.assertEqual(expected, actual)
  end function)

  ts.addTest("should clear counter update interval upon component destroy", function (ts as Object) as String
    ' Given
    initKopytko()

    ' When
    destroyKopytko()

    ' Then
    return ts.assertMethodWasCalled("clearInterval", {}, { times: 1 })
  end function)

  return ts
end function
