
window.onload = function(){

}

window.onscroll = function(){
    let main = document.getElementById('main');
    let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountains3 = document.getElementById('mountains3');
    let mountains4 = document.getElementById('mountains4');
    let river = document.getElementById('river');
    let boat = document.getElementById('boat');
    let said = document.querySelector('.said');
    let valueY = scrollY;

    stars.style.left= valueY+'px';
    moon.style.top = valueY*5+'px';
    mountains3.style.top = valueY*2+'px';
    mountains4.style.top = valueY*1.5+'px';
    river.style.top = valueY+'px';
    boat.style.top = valueY+'px';
    boat.style.left = valueY*3+'px';
    said.style.fontSize = valueY+'px';

    if(scrollY >=78){
        said.style.fontSize = 78+'px';
        said.style.position = 'fixed'; 
        if(scrollY>=537){
        said.style.display = 'none';
        }
        else{
            said.style.display = 'block';
        }
    }
    if(scrollY >= 92){
        console.log("day")
        main.style.background = 'linear-gradient(#25004b, #48a0d5)';
    }
    else{
        main.style.background = 'linear-gradient(#200016, #25004b)';
    }
   

};
/*
function moveTheElements(){
        background: linear-gradient(#200016, #25004b);
}*/


