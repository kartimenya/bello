const menuBtn = document.getElementsByClassName('menu__btn')[0],
      menuBbody = document.getElementsByClassName('menu__body')[0]

menuBtn.addEventListener('click', () =>{
  menuBtn.classList.toggle("active");
  menuBbody.classList.toggle("active");
});

document.body.addEventListener('click', (e) =>{
  let path = e.path;
  if (!path.includes(menuBbody) && !path.includes(menuBtn)){
    menuBbody.classList.remove("active");
    menuBtn.classList.remove("active");
  }
});

new WOW().init();
