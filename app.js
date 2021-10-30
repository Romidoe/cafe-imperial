addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const header_menubar_ul = document.querySelector('.header_menubar_ul')
            header_menubar_ul.classList.toggle('mostrar')
        })
    }
})