const bar=document.getElementById("bar");
const close=document.getElementById("close");
const nav=document.getElementById("navbar");


    bar.addEventListener("click",function(){
        nav.classList.add("show");
    })
    close.addEventListener("click",function(){
        nav.classList.remove("show");
    })

   var mainImg= document.getElementById("mImg");
   var smallImg=document.getElementsByClassName("sImg");

   for(let i=0;i<smallImg.length;i++)
   {
    smallImg[i].addEventListener("click",function(){
        mainImg.src=smallImg[i].src;
    })
   }