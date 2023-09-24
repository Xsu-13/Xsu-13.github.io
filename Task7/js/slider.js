const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".arrow"),
icons = document.querySelectorAll(".icon"),
mediaQuery = window.matchMedia('(min-width: 768px)');

let desktopWidth;
let currentIndex;

let firstImgWidth = firstImg.clientWidth+16;

function clearIcons()
{
    icons.forEach((icon) => {
        icon.classList.remove("active");
    })
}

function setActive()
{
    if(!desktopWidth)
    {
        icons.forEach((icon) => {
            if(icon.id == currentIndex)
            {
                icon.classList.add("active");
            }
        })
    }
    else{
        icons.forEach((icon) => {
            if(icon.id == currentIndex || icon.id == currentIndex + 1 || icon.id == currentIndex + 2)
            {
                icon.classList.add("active");
            }
        })
    }
    
}

function handleDeviceChange(e) {
    if (e.matches) {
        desktopWidth = true;
        currentIndex = 1;
        carousel.scrollLeft -= 7*firstImgWidth;
    }
    else{
        desktopWidth = false;
        currentIndex = 1;
        carousel.scrollLeft -= 7*firstImgWidth;
    }
    clearIcons();
    setActive();
}

window.addEventListener('DOMContentLoaded', function (event) {
    currentIndex = 1;
    desktopWidth = mediaQuery.matches;
    mediaQuery.addListener(handleDeviceChange);

    arrowIcons.forEach(icon=>{
        icon.addEventListener("click", ()=>{
            let value;
            if(!desktopWidth)
            {
                if(currentIndex == 1)
                {
                    if(icon.id == "left")
                    {
                        currentIndex = 8;
                        value = 7*firstImgWidth;
                    }
                    else{
                        currentIndex++;
                        value = firstImgWidth;
                    }
                }
                else if(currentIndex == 8)
                {
                    if(icon.id == "left")
                    {
                        currentIndex--;
                        value = -firstImgWidth;
                    }
                    else{
                        currentIndex = 1;
                        value = -7*firstImgWidth;
                    }
                }
                else
                {
                    if(icon.id == "left")
                    {
                        currentIndex--;
                        value = -firstImgWidth;
                    }
                    else{
                        currentIndex++;
                        value = firstImgWidth;
                    }
                }
            }
            else{
                if(currentIndex == 1)
                {
                    if(icon.id == "left")
                    {
                        currentIndex = 6;
                        value = 7*firstImgWidth;
                    }
                    else{
                        currentIndex++;
                        value = firstImgWidth;
                    }
                }  
                else if(currentIndex == 6)
                {
                    if(icon.id == "left")
                    {
                        currentIndex--;
                        value = -firstImgWidth;
                    }
                    else{
                        currentIndex = 1;
                        value = -7*firstImgWidth;
                    }
                }
                else
                {
                    if(icon.id == "left")
                    {
                        currentIndex--;
                        value = -firstImgWidth;
                    }
                    else{
                        currentIndex++;
                        value = firstImgWidth;
                    }
                }
            }
            
            clearIcons();
            setActive();
            carousel.scrollLeft += value;
        })
    })
});