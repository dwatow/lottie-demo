function runLottie (jsonPath) {
  [...document.querySelectorAll('.lottie')]
  // .map((element, index) => {
  .forEach((element, index) => {
    lottie.loadAnimation({
      container: element, // Required
      path: jsonPath(index), // Required
      renderer: 'svg', // Required
      // renderer: 'canvas', // Required
      // renderer: 'html', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "Hello World", // Name for future reference. Optional.
    })
  })
  // .forEach(anim => anim.play())
}