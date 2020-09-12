function classToggle() {
    const navs = document.querySelectorAll('.submenu')

    navs.forEach(nav => nav.classList.toggle('showSubnav'));
}

document.querySelector('.sub-menu-toggle')
    .addEventListener('click', classToggle);