let flag = 0;

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
document.querySelector(".backdrop").addEventListener("click", back);
function back() {
    if(flag===1){
        document.querySelector(".backdrop").classList.add("none");
        document.querySelector(".magic").classList.add("none");
    }
    else{
        console.log("druga opcja polityczna");
    }
}