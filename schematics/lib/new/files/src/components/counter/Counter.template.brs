function render() as object
  return [
    {
      name: "SimpleLabel",
      props: {
        id: "label",
        color: "0xFFFFFFFF",
        text: "Counter",
        translation: [960, 540],
      },
    },
    {
      name: "SimpleLabel",
      props: {
        id: "numberLabel",
        color: "0xFFFFFFFF",
        translation: [960, 640],
      },
      dynamicProps: {
        text: m.state.number.toStr(),
      },
    },
  ]
end function
