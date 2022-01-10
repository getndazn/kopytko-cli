function render() as object
  if m.state.currentDateTime = Invalid
    return {
      name: "Spinner",
      props: {
        id: "spinner",
      },
    }
  end if

  return {
    name: "SimpleLabel",
    props: {
      id: "label",
      color: "0xFFFFFFFF",
      horizOrigin: "center",
      vertOrigin: "center",
      translation: [960, 540],
    },
    dynamicProps: {
      text: m.state.currentDateTime,
    },
  }
end function
