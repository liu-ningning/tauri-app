function flexible(window, document) {
  // const { device } = window.CONFIG
  const docElement = document.documentElement
  let screenWidth = docElement.clientWidth
  const htmlElement = document.getElementsByTagName('html')[0]

  function setPhoneRem() {
    if (screenWidth > 425) {
      screenWidth = 430
    }
    if (devicePixelRatio <= 3) docElement.style.fontSize = `${(screenWidth / 750) * 100}px`
    if (devicePixelRatio > 3) docElement.style.fontSize = `${(screenWidth / (750 * 1.25)) * 100}px`

    const fz = docElement.style.fontSize.replace('px', '')
    const realfz = parseInt(+window.getComputedStyle(htmlElement).fontSize.replace('px', '') * 10000, 10) / 10000
    if (fz !== realfz) {
      htmlElement.style.cssText = `font-size: ${fz * (fz / realfz)}px`
    }
  }

  document.body.style.maxWidth = `480px`

  setPhoneRem()

  // reset rem unit on page resize
  window.addEventListener('resize', setPhoneRem)
  window.addEventListener('pageshow', e => {
    if (e.persisted) {
      setPhoneRem()
    }
  })
}

export default flexible
