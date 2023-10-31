const colors = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    grey: (opacity = 1) => `rgba(125, 124, 124, ${opacity})`,
    gold: (opacity = 1) => `rgba(226, 94, 62, ${opacity})`,
    kulit: (opacity = 1) => `rgba(244, 191, 150, ${opacity})`,
    kulitdalem: (opacity = 1) => `rgba(252, 245, 237, ${opacity})`,

    blue: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
    darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
}
export default colors