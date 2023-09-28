let info = {
    name:"",
    name2:"",
    name3:"",
    email:"",
    tel:"",
    org:"",
    message:""
}

function makeInfo(name, name2, name3, email, tel, org, message)
{
    return {name, name2, name3, email, tel, org, message};
}

function getLocalStorageValues()
{
    return JSON.parse(localStorage.user);
}

function saveToLocalStorageValues(info)
{
    localStorage.user = JSON.stringify(info);
}

window.addEventListener('DOMContentLoaded', function (event) {
    
    localStorage.clear();
    let name = document.getElementById("First-name");
    let name2 = document.getElementById("Second-name"); 
    let name3 = document.getElementById("Third-name"); 
    let email = document.getElementById("Organization");
    let tel = document.getElementById("email"); 
    let org = document.getElementById("tel");  
    let message = document.getElementById("message"); 
    let check = this.document.getElementById("flexCheckDefault");


    function placeToInput()
    {
        if(localStorage.length != 0)
        {
            let info = getLocalStorageValues();
            name.value = info.name;
            name2.value = info.name2;
            name3.value = info.name3;
            email.value = info.email;
            tel.value = info.tel;
            org.value = info.org;
            message.value = info.message;
        }
        else{
            console.log("empty");
        }
    }
    function clearInputs()
    {
        name.value = "";
        name2.value = "";
        name3.value = "";
        email.value = "";
        tel.value = "";
        org.value = "";
        message.value = "";
    }

    document.getElementById("close-btn").addEventListener("click", function(){
        document.getElementById("pop-up").classList.remove("open");
        history.replaceState(null, null,"/")
        let info = makeInfo(name.value, name2.value, name3.value, email.value, tel.value, org.value, message.value);
        saveToLocalStorageValues(info);
        clearInputs();
    })
    
    document.getElementById("submit-btn").addEventListener("click", function(){
        if(check.value == false)
            return;

        let info = makeInfo(name.value, name2.value, name3.value, email.value, tel.value, org.value, message.value);

        fetch('https://formcarry.com/s/fCsjmrtmZ4', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(info)
        })
        .then(response => {console.log(response);
             localStorage.clear();
             clearInputs();})
        .catch(error => {console.log(error);
             localStorage.clear();
             clearInputs();});

        //document.getElementById("pop-up").classList.remove("open");
    })
    document.getElementById("open-btn").addEventListener("click", function(){
        document.getElementById("pop-up").classList.add("open");
        history.pushState(null, null, "form");
        placeToInput();
    })
});
