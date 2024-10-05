var cardsselector=document.querySelectorAll(".cards");

cardsselector.forEach(cards=>{
    cards.addEventListener("click",()=>{
        activeremove();
       cards.classList.add("active");
    })
})
function activeremove(){
  cardsselector.forEach(remove=>{
remove.classList.remove("active");
  })
}