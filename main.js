window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScrool()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a secao passou da linha
  //quais dados vou precisar?

  //o topo da secao
  const sectionTop = section.offsetTop
  //o tmanho da secao
  const sectionHeight = section.offsetHeight

  //o topo da secao chegou ou ultapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //informacoes dos dados logicos
  console.log(
    'o topo da secao chegou ou passou da linha',
    sectionTopReachOrPassedTargetline
  )

  //verificar se a base esta abaixo da linha alvo
  //quais dados vou precisar?

  // a secao termina onde?
  const sectionEndAt = sectionTop + sectionHeight

  //o final da secao passou da linha alvo
  const sectionEndPassedTargetline = sectionEndAt <= targetLine

  console.log(
    'o fundo da secao da secao passou da linha',
    sectionEndPassedTargetline
  )

  //limites da secao
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll') //adiciona classe no html
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScrool() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show') //adiciona classe no html
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img,
#home .stats,
#services
#services header,
#services .card,
#about,
#about header,
#about .content`)
