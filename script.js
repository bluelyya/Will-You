function nextSlide(id){

    document
    .querySelectorAll(".slide")
    .forEach(slide=>{
        slide.classList.remove("active");
    });

    document
    .getElementById(id)
    .classList.add("active");
}

function yesAnswer(){

    document
    .querySelectorAll(".slide")
    .forEach(slide=>{
        slide.classList.remove("active");
    });

    document
    .getElementById("slideYes")
    .classList.add("active");

    createConfetti();
}

function createConfetti(){

    for(let i=0;i<50;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="-20px";
        heart.style.fontSize=(20+Math.random()*20)+"px";

        heart.style.animation=
        `fall ${3+Math.random()*2}s linear`;

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },5000);
    }
}

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
0%{
transform:translateY(0);
}
100%{
transform:translateY(110vh);
}
}
`;

document.head.appendChild(style);