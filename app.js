let flag = 0;
let currentBackdropImage = 1;
const next = document.querySelector(".backdrop__next");
const previous = document.querySelector(".backdrop__previous");
let wartosc = 0;

function gray(wh){
    for(let j=0; j<=3; j++){
        document.querySelectorAll(".backdrop__thumbnail")[j].classList.remove("filter");
    }
    currentBackdropImage = wh;
    document.querySelector(".backdrop__image").src ="images/image-product-"+(currentBackdropImage)+".jpg"; 
    document.querySelectorAll(".backdrop__thumbnail")[currentBackdropImage-1].classList.add("filter");
    
}

//Dzialanie klikania obrazków, pojawianie sie backdropu
for(let i=0; i<=4; i++){
    let show = () =>{
        console.log('oficjalny zakas')
        document.querySelector(".backdrop").classList.remove("none");
        document.querySelector(".magic").classList.remove("none");
        flag = 1;
        switch (i){
            case 1:
            case 2:
            case 3:
            case 4:
                for(let j=0; j<=3; j++){
                    document.querySelectorAll(".backdrop__thumbnail")[j].classList.remove("filter");
                }
                gray(i);
                break;
            default:
                console.log("condition 0");
                gray(i+1);
                break;
            }

    }
    console.log(document.getElementsByClassName("product__image")[i])
    document.getElementsByClassName("product__image")[i].addEventListener("click", show);
    }

 //Znikanie backdropu   
document.querySelector(".magic").addEventListener("click", back);
function back() {
    if(flag===1){
        document.querySelector(".backdrop").classList.add("none");
        document.querySelector(".magic").classList.add("none");
    }
    else{
        console.log("druga opcja polityczna");
    }
}

//Dzialanie slidera na backdropie
let backdropSlider = (e) =>{
    console.log(e);
    if(e.target.alt == "next"){
        if(currentBackdropImage==4){
            currentBackdropImage = 1;
            gray(currentBackdropImage);
        }else{
            console.log('ok');
            currentBackdropImage++; 
            gray(currentBackdropImage);
        }

        
        document.querySelector(".backdrop__image").src="images/image-product-"+(currentBackdropImage)+".jpg";
        console.log(currentBackdropImage);
        
        
    }
    else if(e.target.alt == "previous"){
        
        if(currentBackdropImage == 1){
            currentBackdropImage = 4;
            gray(currentBackdropImage);
        }
        else{
            console.log('prev');
            currentBackdropImage--;
            gray(currentBackdropImage);
        }
        document.querySelector(".backdrop__image").src="images/image-product-"+(currentBackdropImage)+".jpg";
    }
}

previous.addEventListener('click', backdropSlider);
next.addEventListener('click', backdropSlider);

//Dodawanie produktów
//Ilosc
let odejmowanie = document.querySelectorAll(".description__operator")[0];
let dodawanie = document.querySelectorAll(".description__operator")[1];

let operator = (e) =>{
    console.log(e);
    if(e.target.alt == "minus"){
        if(wartosc === 0){
            alert("This value cannot be smaller than 0!");
        }
        else{
        wartosc--;
        document.querySelector(".description__inner-button").innerHTML = wartosc;
        }
    }
    else if(e.target.alt == "plus"){
        wartosc++;
        document.querySelector(".description__inner-button").innerHTML = wartosc;
    }
}
odejmowanie.addEventListener("click", operator);
dodawanie.addEventListener("click", operator);