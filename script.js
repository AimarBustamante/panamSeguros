//* Nav-Menu Function

(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();

//* Pricing-Section 

// Toggle btn
const toggler = document.querySelector(".toggler");
//Insurance Entities
const assa = document.getElementById("assa");
const fedpa = document.getElementById("fedpa");
const ancon = document.getElementById("ancon");

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        // 3 Cuotas
        assa.innerHTML = `$200<span>/ 3 cuotas </span>`; //Assa
        fedpa.innerHTML = `$1000<span>/ 3 cuotas </span>`; //Fedpa
        ancon.innerHTML = `$1000<span>/ 3 cuotas </span>`; //Ancon
    }else{
        // 1 Cuota
        assa.innerHTML = `$19<span>/ 1 cuota </span>`; //Assa
        fedpa.innerHTML = `$99<span>/ 1 cuota </span>`; //Fedpa
        ancon.innerHTML = `$99<span>/ 1 cuota </span>`; //Ancon
    }
})
