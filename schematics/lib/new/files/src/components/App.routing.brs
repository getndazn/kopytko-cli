function getAppRouting() as object
  return [
    { path: "", view: "HomeView" },
    { path: "clock", view: "ClockView" },
    { path: "counter", view: "CounterView" },
  ]
end function
