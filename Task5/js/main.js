let productTypes = new Map();
productTypes.set("Eternal_youth", 10000);
productTypes.set("Mind_Reading", 2000);
productTypes.set("Excellent_memory", 4000);
productTypes.set("Koreans", 10);

function CountPrice() {
    event.preventDefault();
    let count = $("#count").val();
    let m = count.match(/^[0-9]+$/);
    if(m !== null && count != 0)
    {
        let typeIndex = $("#type option:selected").val();
        let result = "Общая сумма: " + productTypes.get(typeIndex) * count;
        $("#answer").text(result);
    }
    else{
        alert("Не корректное количество товара, исправьте -_-");
    }


   }
   

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button");
    b.addEventListener("click", CountPrice);
   });
   