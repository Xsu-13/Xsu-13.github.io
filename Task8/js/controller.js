window.addEventListener('DOMContentLoaded', function (event) {

    document.getElementById("close-btn").addEventListener("click", function(){
        document.getElementById("pop-up").classList.remove("open");
    })
    
    document.getElementById("submit-btn").addEventListener("click", function(){
        document.getElementById("pop-up").classList.remove("open");
    })
    document.getElementById("open-btn").addEventListener("click", function(){
        document.getElementById("pop-up").classList.add("open");
    })
});