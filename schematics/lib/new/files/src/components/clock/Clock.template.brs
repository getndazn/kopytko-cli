function render() as object
  return {
    name: "SimpleLabel",
    props: {
      id: "label",
      color: "0xFFFFFFFF",
      horizOrigin: "center",
      vertOrigin: "center",
      translation: [640, 360],
    },
    dynamicProps: {
      text: m.state.currentDateTime,
    },
  }
end function
