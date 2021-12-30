' @import /components/http/HttpService.brs from @dazn/kopytko-framework
' @import /components/getProperty.brs from @dazn/kopytko-utils
sub init()
  m.top.observeFieldScoped("state", "_onStateChange")

  m._httpService = Invalid
  m._requestOptions.append({ method: "GET" })
end sub

sub runRequest()
  _callHttpService()
end sub

function generateErrorData(response as Object) as Object
  return { error: response.failureReason }
end function

sub _callHttpService()
  response = m._httpService.fetch(m._requestOptions)

  ' When response is Invalid that means http request is aborted (check HttpService _waitForResponse method).
  ' Handler for aborting request is in createRequest function.
  if (response = Invalid) then return

  _handleResponse(response)
end sub

sub _handleResponse(response as Object)
  if (response.isSuccess)
    response.data = parseResponseData(response.rawData)
  else
    response.data = generateErrorData(response)
  end if

  response.removeField("rawData")

  m.top.response = response
end sub

sub _onStateChange(event as Object)
  ' This allows to rerun the same instance of a task
  if (LCase(m.top.state) = "run")
    m._port = CreateObject("roMessagePort")
    m._httpService = HttpService(m._port)
    m.top.unobserveFieldScoped("abort")
    m.top.observeFieldScoped("abort", m._port)
  else
    m._port = Invalid
    m._httpService = Invalid
    m.top.unobserveFieldScoped("abort")
  end if
end sub
