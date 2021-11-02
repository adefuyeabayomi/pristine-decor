let ytMenuBtn = document.querySelector("#yt-ham-hotspot");
ytMenuBtn.addEventListener("click",(e)=>{
    let ham = document.querySelector(".yt-ham");
    let nav = document.querySelector(".yt-nav-container");
    let isActive = false;
    for(let each of ham.classList){
        isActive = each == "yt-ham-active" ? true : false;
        if(isActive){
            break;
        }
    }
    console.log("isActive",isActive)
    if(isActive){
        ham.classList.remove("yt-ham-active");
        nav.classList.remove("yt-mobile");
    }
    else{
        ham.classList.add("yt-ham-active");
        nav.classList.add("yt-mobile")
    }
})