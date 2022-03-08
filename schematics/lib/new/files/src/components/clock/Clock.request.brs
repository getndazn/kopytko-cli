' @import /components/rokuComponents/AppInfo.brs from @dazn/kopytko-utils

function getRequestOptions(options as object) as object
  return {
    url: AppInfo().getValue("apiUrl"),
  }
end function

function parseResponseData(data as object) as object
  parsedData = CreateObject("roSGNode", "ClockModel")
  parsedData.currentDateTime = data.dateTime

  return parsedData
end function
