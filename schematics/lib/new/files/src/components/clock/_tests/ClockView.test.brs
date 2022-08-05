' @import /components/KopytkoFrameworkTestSuite.brs from @dazn/kopytko-unit-testing-framework
' @import /components/promise/Promise.brs from @dazn/kopytko-utils
' @import /components/promise/PromiseReject.brs from @dazn/kopytko-utils
' @import /components/promise/PromiseResolve.brs from @dazn/kopytko-utils
' @mock /components/http/request/createRequest.brs from @dazn/kopytko-framework

function TestSuite__ClockView() as Object
  ts = KopytkoFrameworkTestSuite()
  ts.name = "ClockView"

  beforeEach(sub ()
    mockFunction("createRequest").returnValue(Promise())
  end sub)

  it("should show spinner until request fulfills", function () as String
    ' When
    initKopytko()

    ' Then
    return expect(m.spinner).toBeValid()
  end function)

  it("should make a request upon component creation", function () as Object
    ' When
    initKopytko()

    ' Then
    return [
      expect("createRequest").toHaveBeenCalledTimes(1),
      expect("createRequest").toHaveBeenCalledWith({ data: {}, options: {}, task: "ClockRequest" }),
    ]
  end function)

  it("should show current datetime if clock request succeeded", function () as String
    ' Given
    expected = "dateTime"
    mockFunction("createRequest").resolvedValue({ currentDateTime: expected })
    initKopytko()

    ' When
    forceUpdate()

    ' Then
    actual = m.label.text

    return expect(actual).toBe(expected)
  end function)

  it("should show error if clock request failed", function () as String
    ' Given
    mockFunction("createRequest").rejectedValue("error")
    initKopytko()

    ' When
    forceUpdate()

    ' Then
    expected = "Response error"
    actual = m.label.text

    return expect(actual).toBe(expected)
  end function)

  return ts
end function
