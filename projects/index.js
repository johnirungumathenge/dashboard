var togg = document.getElementById('togg');
var sidebar = document.querySelector('.sidebar');
var bd = document.querySelector('.bd');
var container = document.querySelector('.container');

togg.onclick = function(){
    sidebar.classList.toggle('active');
    bd.classList.toggle('active1');
    container.classList.toggle('active2');
}


// themes
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

const subcont = document.querySelector('.sub-cont');
var cont = document.querySelector('.cont');
var para = document.getElementById('para');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color ='black';
        subcont.style.background ='lavender';
        //cont.style.background ='white';
        body.style.transform ='2s';
        var cont = document.querySelector('.cont');
        para.innerHTML ='Light';
        
        for (var i=0; i < cont.lenght; i++){
            cont[i].style.background = 'red';
        }

        // cont.forEach(function (cont){
        //     cont.style.backgroudisplaynd = 'lavender';
        // })
    }else{
        body.style.background ='black';
        body.style.color='blue';
        subcont.style.background ='black';
        para.innerHTML ='Dark';
        
    }
})

// cart items
const cartIcon = document.getElementById('cart-icon');
const Cart = document.querySelector('.cart');

const close = document.getElementById('close');

cartIcon.addEventListener('click', ()=>{
    Cart.classList.add('active3');
})

close.addEventListener('click', ()=>{
    Cart.classList.remove('active3');
})

var img =document.querySelector('#image');


img.addEventListener('click', ()=>{
    Cart.appendChild(img);
})