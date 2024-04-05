window.addEventListener('scroll', () =>{
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})   

const menuItem = document.querySelectorAll('.nav-link');
const menuLen = menuItem.length;

for (let i = 0; i < menuLen; i++) {
  menuItem[i].addEventListener('click', function () {
    for (let j = 0; j < menuLen; j++) {
      menuItem[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

const menu = document.querySelector('.nav_menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', () =>{
  menu.style.display = 'flex';
  closeBtn.style.display = 'inline-block';
  menuBtn.style.display = 'none';
});

const closeNav = () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
};
closeBtn.addEventListener('click', closeNav)




const caretOpen = document.querySelector('#open_caret');
const caretClose = document.querySelector('#close_caret');
const drop = document.querySelector('.drop_down');

caretOpen.addEventListener('click', function(){
  drop.style.display = 'block';
  caretOpen.style.display = 'none';
  caretClose.style.display = 'inline-block';
});
caretClose.addEventListener('click', function(){
  drop.style.display = 'none';
  caretOpen.style.display = 'inline-block';
  caretClose.style.display = 'none'
});

// const form = document.querySelector('.timess');
// const formbtn = document.getElementById('#register');
// const closeForm = document.getElementById('#closeregister');

// function open() {
//   form.style.display = 'inline-block';
//   closeForm.style.display = 'inline-block';
//   formbtn.style.display = 'none';
// };

// function close() {
//   form.style.display = 'none';
//   closeForm.style.display = 'none';
//   formbtn.style.display = 'inline-block';
// };
