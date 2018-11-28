let info = document.getElementById('inf');
let modal = document.getElementById('modal');
let close = document.getElementById('cls');
info.onclick = function(){
    modal.style.display = 'block';
};
cls.onclick =function(){
    modal.style.display = 'none';
}