window.addEventListener("load",()=>{



    let imagenes=document.querySelectorAll(".internacional");
    imagenes.forEach(items=>{
        items.addEventListener("mouseover",()=>{
            items.style.width="25%";
        
        });
        items.addEventListener("mouseout", ()=>{
            items.style.width="20%";
    
    
    
        })
    })
    })