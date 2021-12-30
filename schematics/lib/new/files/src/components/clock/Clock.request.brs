function getRequestOptions(options as Object) as Object
  return {
    url: "http://worldclockapi.com/api/json/cet/now",
  }
end function

function parseResponseData(data as Object) as Object
  parsedData = CreateObject("roSGNode", "Node")
  parsedData.addFields(data)

  return parsedData
end function
