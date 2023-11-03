function rotateSection(isClosing = false) {
  const delay = isClosing ? 300 : 0
  document.getElementById('section').classList.toggle('container--rotate')
  document.getElementById('circular-menu').classList.toggle('circular-menu--rotate')
  document.getElementById('navigation').classList.toggle('navigation--movement')
  setTimeout(() => {
    document.getElementById('menu-item-one').classList.toggle('menu-item--translateX1')
    document.getElementById('menu-item-two').classList.toggle('menu-item--translateX2')
  }, delay);
}