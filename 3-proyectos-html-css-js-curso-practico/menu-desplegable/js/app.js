(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = () => {
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('.menu__item--active');

                console.log(subMenu.clientHeight);

                if(subMenu.clientHeight === 0) {
                    height = subMenu.scrollHeight;
                }

                subMenu.style




            });
        })
    }
})();