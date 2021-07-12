'use strict';

document.addEventListener('DOMContentLoaded', () => {


    // Modal 

    const windowImg = document.querySelector(".recording__window__img"),
          modal = document.querySelector(".modal"),
          modalTitle = document.querySelector(".modal__title"),
          modalForm = document.querySelectorAll('.form__input__modal'),
          bgElems = document.querySelectorAll('.background'),
          btnTextModal = document.querySelector('.btn__text__modal'),
          closeModal = document.querySelector('.close__modal');

    //смена цвета окошка вызова обратной связи
    window.addEventListener('scroll',function(){
        let topCords = windowImg.getBoundingClientRect().y + this.pageYOffset;
        for(let i = bgElems.length - 1;i >= 0;i--){
            if(topCords>=bgElems[i].offsetTop - 40){
                if(bgElems[i].dataset.color == "white"){
                    windowImg.style.fill = "#447EF0";
                } else {
                    windowImg.style.fill = "white";
                }
                break;
            }
        }
    });

    // открытие/закрытие на окошко
    windowImg.addEventListener('click', () => {
        modal.classList.toggle ('show');
    });

    //Закртытие на кнопку close
    modal.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-close') == "") {
                modal.classList.toggle('show');
        }
    });

    
    //смена цвета окна обратной связи 
    window.addEventListener('scroll',function(){
        let topCords = modal.getBoundingClientRect().y + this.pageYOffset;
        for(let i = bgElems.length - 1;i >= 0;i--){
            if(topCords >= bgElems[i].offsetTop - 240){
                if(bgElems[i].dataset.color == "white"){
                    modal.style.background = "#447EF0";
                    modalTitle.style.color = "#fff";
                    modalForm.forEach(item => {
                        item.style.background = "#447EF0";
                        item.style.color = '#fff';
                        item.style.borderColor = "#fff";
                        item.classList.add('placeholder');
                    });
                    btnTextModal.style.color = "#fff";
                    closeModal.style.fill = "#fff";
                } else {
                    modal.style.background = "white";
                    modalTitle.style.color = "#3C3C3C";
                    modalForm.forEach(item => {
                        item.style.background = "#fff";
                        item.style.color = '#3C3C3C';
                        item.style.borderColor = "#3C3C3C";
                        item.classList.remove('placeholder');
                    });
                    btnTextModal.style.color = "#3C3C3C";
                    closeModal.style.fill = "#000";
                }
                break;
            }
        }
    });

    //Menu 

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');

    burger.addEventListener('click', (e) => {
        menu.classList.toggle('show');
    });




    //Form

    const form = document.querySelector('.consultation__form'),
          btnForm = document.querySelector('.btn-form'),
          formName = document.querySelector('.form__name'),
          formEmail = document.querySelector('.form__email'),
          formPhone = document.querySelector('.form__phone');

    btnForm.addEventListener('click', (e) => {
        console.log(formName.textContent);
        window.location.reload();
        if (formName.value == "") {
            const div = document.createElement('div');
            div.classList.add('div__name');
            div.innerHTML = '<p>Необходимо заполнить</p>';
            formName.append(div);
            // e.preventDefault();
        } 
    });
});