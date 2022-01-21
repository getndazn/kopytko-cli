' @import /components/KopytkoFrameworkTestSuite.brs from @dazn/kopytko-unit-testing-framework
' @import /components/promise/Promise.brs from @dazn/kopytko-utils
' @import /components/promise/PromiseReject.brs from @dazn/kopytko-utils
' @import /components/promise/PromiseResolve.brs from @dazn/kopytko-utils
' @mock /components/http/request/createRequest.brs from @dazn/kopytko-framework

function TestSuite__ClockView() as Object
  ts = KopytkoFrameworkTestSuite()
  ts.name = "ClockView"

  ts.setBeforeEach(sub (ts as Object)
    m.__clockResponsePromise = Promise()

    m.__mocks.createRequest = {
      getReturnValue: function (params as Object, m as Object) as Dynamic
        return m.__clockResponsePromise
      end function,
    }
  end sub)

  ts.addTest("should show spinner until request fulfills", function (ts as Object) as String
    ' When
    initKopytko()

    ' Then
    return ts.assertNotInvalid(m.spinner)
  end function)

  ts.addTest("should make a request upon component creation", function (ts as Object) as String
    ' When
    initKopytko()

    ' Then
    return ts.assertRequestWasMade({ task: "ClockRequest" })
  end function)

  ts.addTest("should show current datetime if clock request succeeded", function (ts as Object) as String
    ' Given
    expected = "dateTime"
    m.__clockResponsePromise = PromiseResolve({ currentDateTime: expected })
    initKopytko()

    ' When
    forceUpdate()

    ' Then
    actual = m.label.text

    return ts.assertEqual(expected, actual)
  end function)

  ts.addTest("should show error if clock request failed", function (ts as Object) as String
    ' Given
    m.__clockResponsePromise = PromiseReject("error")
    initKopytko()

    ' When
    forceUpdate()

    ' Then
    expected = "Response error"
    actual = m.label.text

    return ts.assertEqual(expected, actual)
  end function)

  return ts
end function
