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
//Seguros de Auto Particular
const assa = document.getElementById("assa");
const fedpa = document.getElementById("fedpa");
const ancon = document.getElementById("ancon");
const suramericana = document.getElementById("suramericana");


//toggler 
toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        // 3 Cuotas
        //Seguros de Auto Particular 
        assa.innerHTML = `$200<span>/ 3 cuotas </span>`; //Assa
        fedpa.innerHTML = `$1000<span>/ 3 cuotas </span>`; //Fedpa
        ancon.innerHTML = `$1000<span>/ 3 cuotas </span>`; //Ancon
        suramericana.innerHTML = `$1000<span>/ 3 cuotas </span>`; //Suramericana
    }else{
        // 1 Cuota
        // Seguros de Auto Particular
        assa.innerHTML = `$19<span>/ 1 cuota </span>`; //Assa
        fedpa.innerHTML = `$99<span>/ 1 cuota </span>`; //Fedpa
        ancon.innerHTML = `$99<span>/ 1 cuota </span>`; //Ancon
        suramericana.innerHTML = `$99<span>/ 1 cuota </span>`; //Suramericana
    }
})

// togglerSecond
const togglerSecond = document.querySelector(".toggler--second")

//Seguros de Auto Comercial
const seguro1 = document.getElementById("seguro1");
const seguro2 = document.getElementById("seguro2");
const seguro3 = document.getElementById("seguro3");
const seguro4 = document.getElementById("seguro4");

togglerSecond.addEventListener("change", ()=>{
    if(togglerSecond.checked){
        // 3 Cuotas
        //Seguros de Auto Particular 
        seguro1.innerHTML = `$200<span>/ 3 cuotas </span>`; //Assa
        seguro2.innerHTML = `$1000<span>/ 3 cuotas </span>`; //Fedpa
        seguro3.innerHTML = `$1000<span>/ 3 cuotas </span>`; //Ancon
        seguro4.innerHTML = `$1000<span>/ 3 cuotas </span>`; //Suramericana
    }else{
        // 1 Cuota
        // Seguros de Auto Particular
        seguro1.innerHTML = `$19<span>/ 1 cuota </span>`; //Assa
        seguro2.innerHTML = `$99<span>/ 1 cuota </span>`; //Fedpa
        seguro3.innerHTML = `$99<span>/ 1 cuota </span>`; //Ancon
        seguro4.innerHTML = `$99<span>/ 1 cuota </span>`; //Suramericana
    }
})

// togglerThird
const togglerThird = document.querySelector(".toggler--third")

//Seguros de Taxi
const taxi1 = document.getElementById("taxi1");
const taxi2 = document.getElementById("taxi2");
const taxi3 = document.getElementById("taxi3");
const taxi4 = document.getElementById("taxi4");

togglerThird.addEventListener("change", ()=>{
    if(togglerThird.checked){
        // 3 Cuotas
        //Seguros de Auto Particular 
        taxi1.innerHTML = `$200<span>/ 3 cuotas </span>`; //Assa
        taxi2.innerHTML = `$1000<span>/ 3 cuotas </span>`; //Fedpa
        taxi3.innerHTML = `$1000<span>/ 3 cuotas </span>`; //Ancon
        taxi4.innerHTML = `$1000<span>/ 3 cuotas </span>`; //Suramericana
    }else{
        // 1 Cuota
        // Seguros de Auto Particular
        taxi1.innerHTML = `$19<span>/ 1 cuota </span>`; //Assa
        taxi2.innerHTML = `$99<span>/ 1 cuota </span>`; //Fedpa
        taxi3.innerHTML = `$99<span>/ 1 cuota </span>`; //Ancon
        taxi4.innerHTML = `$99<span>/ 1 cuota </span>`; //Suramericana
    }
})


