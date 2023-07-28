window.addEventListener("load",()=>{



let imagenes=document.querySelectorAll(".imagen");
imagenes.forEach(items=>{
    items.addEventListener("mouseover",()=>{
        items.style.width="40%";
    
    });
    items.addEventListener("mouseout", ()=>{
        items.style.width="auto";



    })
})
})