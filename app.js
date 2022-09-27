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
        if(wartosc >= 10){
            let tag = document.createElement("p");
            let text = document.createTextNode("Amount of products cannot be bigger than 10");
            tag.appendChild(text);
            let element = document.querySelector(".description__buttons");
            element.appendChild(tag);
            tag.classList.add("popup");
            
        }
        else{
        wartosc++;
        document.querySelector(".description__inner-button").innerHTML = wartosc;
        }
    
    }
}
odejmowanie.addEventListener("click", operator);
dodawanie.addEventListener("click", operator);

//Obsługa koszyka
let cart = document.querySelector(".cartman");
function cartActualisation(param){
    
    let cartAmount = document.createElement("p");
    let cartAmountText = document.createTextNode(param);
    cartAmount.appendChild(cartAmountText);
    cart.appendChild(cartAmount);
    cartAmount.classList.add("popup-cartman");
}

//we will give display none to this cartpopup until we click add to cart
//but it works only for the first time, so we will need a new value
//which will be called newValue, which will be equal to
//value only at the first click on add to cart
// ^^ lol this shit is useless
//watch this  

let addToCart = document.querySelector(".description__button--orange");
addToCart.addEventListener("click", ()=>{
    cartActualisation(wartosc);
})
let cartFlag = 0;
cart.addEventListener("click", ()=>{
    if(cartFlag === 0){
        document.querySelector(".cartman__popup").classList.remove("none");
        cartFlag = 1;
        document.querySelector(".cartman__amount").innerHTML = wartosc + "x315 malp" +"<br> click on cart to close"
    }
    else if(cartFlag === 1){
        document.querySelector(".cartman__popup").classList.add("none");
        cartFlag = 0;
    }
})