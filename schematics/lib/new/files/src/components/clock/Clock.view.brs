' @import /components/http/request/createRequest.brs from @dazn/kopytko-framework
sub constructor()
  m.state = {
    currentDateTime: "Loading current date time...",
  }

  _request = createRequest("ClockRequest")
  _request.then(_onFetchingSuccess, _onFetchingFailure)
end sub

sub _onFetchingSuccess(data as Object)
  setState({ currentDateTime: data.currentDateTime })
end sub

sub _onFetchingFailure(error as Object)
  setState({ currentDateTime: "Response error" })
end sub
