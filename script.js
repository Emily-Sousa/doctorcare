window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnSroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}


function showNavOnSroll() {
    if(scrollY > 0){
        navigation.classList.add('scroll')
    } else{
        navigation.classList.remove('scroll')
    }
}

function activateMenuAtCurrentSection(section) {
    //linha alvo
    const  targetLine = scrollY + innerHeight / 2

    // verificar se a seção passou da linha
    // quais dados vou precisar?
    
    // o topo da seção
    const sectionTop = section.offsetTop;
    
    //a altura da seção
    const sectionHeight = section.offsetHeight;

    //o topo da seção chegou ou ultrapassou a linha alto
    const sectionTopReach0rPassedTargetLine = targetLine >= sectionTop

    console.log(`o topo da seção chegou ou passou da linha? ${sectionTopReach0rPassedTargetLine}`)

    //verificar se a base esta abaixo da linha alvo

    //a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    //o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
    console.log(`a base passou da seção da linha? ${sectionEndPassedTargetLine}`)


    // limites da seção
    const sectionBoundaries = sectionTopReach0rPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    console.log(sectionBoundaries)

    menuElement.classList.remove('active')
    if (sectionBoundaries){
        menuElement.classList.add('active')
    }
}
















function showBackToTopButtonOnScroll(){
    if(scrollY > 650){
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }
}



function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 710,
}).reveal(`
   #home, 
   #home img, 
   #home .stats,
   #services,
   #services header,
   #services .cards,
   #about,
   #about header,
   #about .content`);

