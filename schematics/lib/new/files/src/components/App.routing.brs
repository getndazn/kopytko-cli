function getAppRouting() as object
  return [
    { path: "", view: "HomeView" },
    { path: "clock", view: "clockView" },
    { path: "counter", view: "CounterView" },
  ]
end function
