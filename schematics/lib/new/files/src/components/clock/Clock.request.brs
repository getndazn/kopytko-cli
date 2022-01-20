' @import /components/rokuComponents/AppInfo.brs from @dazn/kopytko-utils

function getRequestOptions(options as Object) as Object
  return {
    url: AppInfo().getValue("apiUrl"),
  }
end function

function parseResponseData(data as Object) as Object
  parsedData = CreateObject("roSGNode", "ClockModel")
  parsedData.currentDateTime = data.currentDateTime

  return parsedData
end function
