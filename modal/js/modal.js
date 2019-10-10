var modall=document.getElementById("modall");
var modalBtn=document.getElementById("modalBtn");
var closeBtn=document.getElementsByClassName("closeBtn")[0];
modalBtn.addEventListener("click",openModal);
modall.addEventListener("click",closeModal);
closeBtn.addEventListener("click",closeModal);

function openModal(){
    modall.style.display="block";

}
function closeModal(){
    modall.style.display="none";
}
    
