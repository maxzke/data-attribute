const btnClick = document.querySelector('.contenedor');

listen();

function listen(){
    btnClick.addEventListener('click', mostrar);
}

function mostrar(e) {
    e.preventDefault();
    
    if (e.target.classList.contains('informacion')) {
        console.log(e.target.dataset.columns);
        console.log(e.target.dataset.indexNumber);
        console.log(e.target.dataset.parent);
    }
    //console.log(btnClick.getAttribute("columns"));
}