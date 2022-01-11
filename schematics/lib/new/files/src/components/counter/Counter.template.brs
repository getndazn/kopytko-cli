function render() as object
  return [
    {
      name: "SimpleLabel",
      props: {
        id: "numberLabel",
        color: m._theme.textColor.primary,
        horizOrigin: "center",
        vertOrigin: "center",
        translation: [960, 540],
      },
      dynamicProps: {
        text: "Counter: " + m.state.number.toStr(),
      },
    },
  ]
end function
