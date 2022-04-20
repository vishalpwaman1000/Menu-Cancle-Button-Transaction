console.log('Hello')
const Menu = document.querySelector('.Sub-Body')
const MenuIsActive = () => {
  Menu.classList.toggle('active')
}
Menu.addEventListener('click', MenuIsActive)
