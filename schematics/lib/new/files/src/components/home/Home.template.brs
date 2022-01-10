function render() as object
  return [
    {
      name: "SimpleLabel",
      props: {
        id: "label",
        color: m._theme.textColor.primary,
        text: "Kopytko example app",
        horizOrigin: "center",
        vertOrigin: "center",
        translation: [960, 440],
      },
    },
    {
      name: "SimpleLabel",
      props: {
        id: "labelCounter",
        color: m._theme.textColor.primary,
        text: "Counter state: " + m.counterNumber.toStr(),
        horizOrigin: "center",
        vertOrigin: "center",
        translation: [960, 540],
      },
    },
    {
      name: "LayoutGroup",
      props: {
        id: "container",
        layoutDirection: "horiz",
        horizAlignment: "center",
        translation: [960, 640],
      },
      children: [
        {
          name: "Button",
          props: {
            id: "clockButton",
            text: "Go to /clock route",
          },
          events: {
            buttonSelected: "goToRoute",
          },
        },
        {
          name: "Button",
          props: {
            id: "counterButton",
            text: "Go to /counter route",
          },
          events: {
            buttonSelected: "goToRoute",
          },
        },
      ],
    }
  ]
end function
