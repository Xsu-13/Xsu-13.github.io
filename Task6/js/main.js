
function updatePrice(event) {
    // Находим select по имени в DOM.

    let s = document.getElementsByName("type");
    let price = 0;
    let prices = getPrices();
    let currentId;
    let count = document.getElementById("count").value;

    s.forEach(function(s) {
        if (s.checked) {
          let optionPrice = prices.types[s.value];
          currentId = s.value;
          if (optionPrice !== undefined) {
            price += optionPrice;
          }
        }
      });
     

    
    // Скрываем или показываем радиокнопки.
    let selectDiv = document.getElementById("selectField");
    selectDiv.style.display = (currentId == "1" ? "block" : "none");
   
    
    // Смотрим какая товарная опция выбрана.
    let prodOptions = Array.from(document.getElementsByTagName("option"));
    
    if(currentId == 1)
    {
        prodOptions.forEach(function(option)
        {
            if(option.selected)
            {
                price += prices.options[option.value]; 
            }
        });
        
    }
     
    
  
    // Скрываем или показываем чекбоксы.
    let checkDiv = document.getElementById("check");
    checkDiv.style.display = (currentId == "2" ? "block" : "none");
   
    // Смотрим какие товарные свойства выбраны.
    let checkboxes = document.querySelectorAll("#check input");
    if(currentId == 2)
    {
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
              let propPrice = prices.props[checkbox.value];
              if (propPrice !== undefined) {
                price += propPrice;
              }
            }
          });
    }

    
    let prodPrice = document.getElementById("answer");
    if(count > 0)
    {
        prodPrice.innerHTML = "Цена: " + (count*price) + " рублей";
    }
    else
    {
        prodPrice.innerHTML = "";
    }
  }
  
  function getPrices() {
    return {
      types: [80000, 50000, 10000],
      options: {
        opt1: 5000,
        opt2: 7000,
        opt3: 2000,
      },
      props: {
        prop1: 2000,
        prop2: 1000,
      }
    };
  }
  
  window.addEventListener('DOMContentLoaded', function (event) {
    // Скрываем радиокнопки.
    let selectDiv = document.getElementById("selectField");
    selectDiv.style.display = "none";
    let checkDiv = document.getElementById("check");
    checkDiv.style.display = "none";

    let count = document.getElementById("count");
    count.addEventListener("keyup", function(event)
    {
        updatePrice(event);
    })
    
    // Находим select по имени в DOM.
    let s = document.getElementsByName("type");
    s.forEach(function(select)
    {
        select.addEventListener("change", function(event) {
            let target = event.target;
            console.log(target.value);
            event.preventDefault();
            updatePrice(event);
          });
    });
    // Назначаем обработчик на изменение select.
    
    
    // Назначаем обработчик радиокнопок.  
    let selects = document.getElementsByName("select");
    selects.forEach(function(selects) {
      selects.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        event.preventDefault();
        updatePrice(event);
      });
    });
  
      // Назначаем обработчик радиокнопок.  
    let checkboxes = document.querySelectorAll("#check input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        event.preventDefault();
        updatePrice(event);
      });
    });
    event.preventDefault();
    updatePrice(event);
  });