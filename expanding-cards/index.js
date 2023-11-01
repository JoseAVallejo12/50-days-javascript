const cards = document.getElementsByClassName('card');
for (const card of cards) {
  addListener(card);
}

function addListener(element) {
  element.addEventListener('keypress', ({ key, target }) => {
    if (key === 'Enter') {
      handleActiveCard(target)
    }
  })
  element.addEventListener('click', ({ target }) => {
    handleActiveCard(target)
  })
}

function handleActiveCard(target) {
  target.classList.add('active')

  for (const card of cards) {
    if (card.id !== target.id) {
      card.classList.remove('active');
    }
  }
}

