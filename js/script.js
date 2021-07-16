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

    

    const burger = document.querySelector('.burger'),
          menu = document.querySelector('.header__nav'),
          headerLink = document.querySelectorAll('.header__link'),
          listNavOne = document.querySelectorAll('.list__nav__one'),
          listNavOneText = document.querySelectorAll('.list__nav__one__text'),
          listNavTwoSubsection = document.querySelectorAll('.list__nav__two__subsection');

    if (document.documentElement.clientWidth >= 1105) {
        //Открытие главного меню
        headerLink.forEach(elem => {
            elem.addEventListener('click', (e) => {
                
                if (e.target.classList.contains('active__two__link')) {
                    e.target.classList.remove('active__two__link');
                } else {
                    headerLink.forEach(elem => {
                        elem.classList.remove('active__two__link');
                    });
                    e.target.classList.add('active__two__link');
                }

                listNavOne.forEach(item => {
                    if(!item.previousSibling.previousSibling.classList.contains('active__two__link')) {
                        item.style.display = 'none';
                        listNavOneText.forEach(item => {
                            item.style.display = 'block';
                            item.classList.remove('active__link');

                        });
                        listNavTwoSubsection.forEach(item => {
                            item.style.display = 'none';
                        });
                    } else {
                        item.style.display = 'block';
                    }
                });
            });
        });

        //Открытие подменю
        listNavOneText.forEach((item, index) => {
            if (index === 3 || index === 8 || index === 13 || index === 18 || index === 23) return;
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('active__link')) {
                    e.target.classList.remove('active__link');
                    listNavOneText.forEach(elem => {
                        elem.style.display = 'block';
                    });
                } else {
                    listNavOneText.forEach(elem => {
                        elem.classList.remove('active__link');
                        elem.style.display = 'none';
                    });
                    
                    e.target.classList.add('active__link');
                    item.style.display = 'block';
                }

                // Открытие под-подменю
                listNavTwoSubsection.forEach(item => {
                    if(!item.previousSibling.previousSibling.classList.contains('active__link')) {
                        item.style.display = 'none';
                    } else {
                        item.style.display = 'block';
                    }
                });
            });
        });

        // Закрытие окна menu
        const closeMenu = document.querySelectorAll('.close');

        closeMenu.forEach(item => {
            item.addEventListener('click', () => {
                listNavOne.forEach(item => {
                    item.style.display = 'none';
                });
                headerLink.forEach(elem => {
                    elem.classList.remove('active__two__link');
                });   
            });
        });

        // Search

        const headerSearch = document.querySelector('.header__search');
        const inputSearch = document.querySelector('.input__search');
        

        headerSearch.addEventListener('click', () => {
            if (inputSearch.style.display == 'block') {
                headerLink.forEach(item => {
                    item.style.display = 'block';                
                }); 
                inputSearch.style.display = 'none';
            } else {
                headerLink.forEach(item => {
                    item.style.display = 'none';                
                }); 
                inputSearch.style.display = 'block';
            }             
        });
    }

    //Открытие меню с бургером 
    if (document.documentElement.clientWidth <= 1104) {

        //Открытие меню через бургер
        burger.addEventListener('click', () => {
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
                document.body.style.overflow = 'visible';
                windowImg.style.display = 'block';
                headerLink.forEach(item => {
                    item.classList.remove('active__two__link');
                    item.style.display = 'block';
                });
                listNavOne.forEach(item => {
                    item.style.display = "none";
                });
                listNavOneText.forEach(elem => {
                    elem.style.color = '#3C3C3C';
                });


            } else {
                menu.classList.add('show');
                document.body.style.overflow = 'hidden';// чтобы оснoвное окно нельзя было прокрутить
                menu.style.overflow = 'auto';
                windowImg.style.fill = '#447EF0';
            }
        });


        //Открываем подменю
        headerLink.forEach(item => {
            item.addEventListener('click', (e) => {

                if (e.target.classList.contains('active__two__link')) {
                    e.target.classList.remove('active__two__link');
                    headerLink.forEach(elem => {
                        elem.style.display = 'block';
                    });
                    listNavOneText.forEach(elem => {
                    elem.style.color = '#3C3C3C';
                });
                } else {
                    headerLink.forEach(elem => {
                        elem.classList.remove('active__two__link');
                        elem.style.display = 'none';
                    });
                    e.target.classList.add('active__two__link');
                    e.target.style.display = 'block';

                }

                listNavOne.forEach(item => {
                    if(!item.previousSibling.previousSibling.classList.contains('active__two__link')) {
                        item.style.display = 'none';
                        listNavOneText.forEach(item => {
                            item.style.display = 'block';
                            item.classList.remove('active__link');

                        });
                        listNavTwoSubsection.forEach(item => {
                            item.style.display = 'none';
                        });
                    } else {
                        item.style.display = 'block';
                    }
                });

            });   
        });

        // Открытие под-подменю
        listNavOneText.forEach((item, index) => {
            if (index === 3 || index === 8 || index === 13 || index === 18 || index === 23) return;
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('active__link')) {
                    e.target.classList.remove('active__link');
                    listNavOneText.forEach(elem => {
                        elem.style.display = 'block';
                    });
                    e.target.style.color = '#3C3C3C';

                } else {
                    listNavOneText.forEach(elem => {
                        elem.classList.remove('active__link');

                    });
                    
                    e.target.classList.add('active__link');
                    e.target.style.color = '#447EF0';
                }

                listNavTwoSubsection.forEach(item => {
                    if(!item.previousSibling.previousSibling.classList.contains('active__link')) {
                        item.style.display = 'none';
                    } else {
                        item.style.display = 'block';
                    }
                });
            });
        });
    }

    // Двигающаяся кнопка
    let offset = 100, cur = false;

    document.body.addEventListener('mouseenter', function(e) {
    if(e.target.classList.contains('btn') && cur === false) {
        cur = {
            e: e.target,
        x: e.target.getBoundingClientRect().left,
        y: e.target.getBoundingClientRect().top
        };
    }
    }, true);

    document.addEventListener('mousemove', function(e) {
        if(cur !== false) {
        let x = (e.clientX - cur.x) - (cur.e.getBoundingClientRect().width / 2),
                y = (e.clientY - cur.y) - (cur.e.getBoundingClientRect().height / 2);
        cur.e.style.transform = `translate(${x}px,${y}px)`;
        //
        if(Math.abs(x) >= offset || Math.abs(y) >= offset) {
            cur.e.style.transform = 'translate(0,0)';
        cur = false;
        }
    }
    });

    //Form

    const form = document.querySelector('.consultation__form'),
          btnForm = document.querySelectorAll('.btn-form'),
          formName = document.querySelector('.form__name'),
          formEmail = document.querySelector('.form__email'),
          formPhone = document.querySelector('.form__phone');

    btnForm.forEach(item => {
        item.addEventListener('click', (e) => {
            if (formName.value === "") {
                const div = document.createElement('div');
                div.classList.add('div__name');
                div.innerHTML = '<p>Необходимо заполнить</p>';
                formName.append(div);
                e.preventDefault();
            } 
        });
    });
    
});