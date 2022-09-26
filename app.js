let flag = 0;
let currentBackdropImage = 1;
const next = document.querySelector(".backdrop__next");
const previous = document.querySelector(".backdrop__previous");

for(let i=0; i<=4; i++){
    let show = () =>{
        console.log('oficjalny zakas')
        document.querySelector(".backdrop").classList.remove("none");
        document.querySelector(".magic").classList.remove("none");
        flag = 1;
    }
    console.log(document.getElementsByClassName("product__image")[i])
    document.getElementsByClassName("product__image")[i].addEventListener("click", show);
    }
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
let backdropSlider = (e) =>{
    console.log(e);
    if(e.target.alt == "next"){
        if(currentBackdropImage==4){
            currentBackdropImage = 1;
        }else{
            console.log('ok');
            currentBackdropImage++; 
        }

        
        document.querySelector(".backdrop__image").src="images/image-product-"+(currentBackdropImage)+".jpg";
        console.log(currentBackdropImage);
        
        
    }
    else if(e.target.alt == "previous"){
        
        if(currentBackdropImage == 1){
            currentBackdropImage = 4;
        }
        else{
            console.log('prev');
            console.log(currentBackdropImage);
            currentBackdropImage--;
            console.log(currentBackdropImage);
        }
        document.querySelector(".backdrop__image").src="images/image-product-"+(currentBackdropImage)+".jpg";
    }
}

previous.addEventListener('click', backdropSlider);
next.addEventListener('click', backdropSlider);
