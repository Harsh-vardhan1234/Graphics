const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");


container.addEventListener("mousemove", (e)=>{
    let Xpoint = (window.innerWidth/2-e.pageX)/10
    let Ypoint = (window.innerHeight/2-e.pageY)/10
    console.log(Xpoint,Ypoint);
    card.style.transform = `rotateX(${Xpoint}deg) rotateY(${Ypoint}deg)`
});
container.addEventListener("mouseenter",(e) =>{
    card.style.transition = "none";
    title.style.transform = "translateZ(110px)";
    sneaker.style.transform = "translateZ(150px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(80px)";
    purchase.style.transform = "translateZ(75px)";
})
container.addEventListener("mouseleave",(e)=>{
card.style.transition = "all 0.5s ease";
card.style.transform = `rotateY(0deg) rotateX(0deg)`;
title.style.transform = "translateZ(0px)";
sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
description.style.transform = "translateZ(0px)";
sizes.style.transform = "translateZ(0px)";
purchase.style.transform = "translateZ(0px)";
});



