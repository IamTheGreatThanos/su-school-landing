function open_menu(){
    let menu_mobile_block = document.querySelector('.menu__mobile_block')
    let menu_mobile = document.querySelector('.menu__mobile')
    menu_mobile.style.transform = 'translateX(0)'
    menu_mobile_block.style.display='block'
}
function close_menu($event){
    let el = $event.srcElement
    console.log(el);
    if (el.classList.contains('menu__mobile_block')) {
        el.style.display = 'none'
    }
}