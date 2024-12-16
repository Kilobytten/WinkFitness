"use strict";


window.addEventListener("load", function() {
    let signUp = document.forms.signUp;
    let plan = signUp.elements.plan;
   

    // listener for form elements
    for (let i = 0; i < signUp.elements.length; i++){
        signUp.elements[i].addEventListener("change", calcOrder);
    }

    //listner for submission
    document.getElementById("submitButton").onclick = function () { validateText() };


    calcOrder();

    function calcOrder() {
        //Plan selection check
        let planValue = 1 * document.querySelector('input[name="plan"]:checked').value;

        // Calculate the 5% sales tax
        let salesTax = planValue * 0.08875;
        signUp.elements.salesTax.value = salesTax.toLocaleString("en-US", { style: "currency", currency: "USD" });

        //Total cost calc
        let totalCost = planValue + salesTax;
        signUp.elements.totalCost.value = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });

        //Retroactive subtotal cal - note: don't do this after everything else. Probably not wise.
        let subTotal = totalCost - salesTax;
        
    }

    function validateText() {
        var mail = document.signUp.mail.value;
        if (mail.length == 0) {
            alert("Email is invalid, please fill out again.")
            return false;
        }
        var zip = document.signUp.zip.value;
        if (zip.length == 0) {
            alert("Zipcode is invalid, please fill out again.")
            return false;
        }
        var name = document.signUp.name.value;
        if (name.length == 0) {
            alert("Name is invalid, please fill out again.")
            return false;
        }
        var street = document.signUp.street.value;
        if (street.length == 0) {
            alert("Address is invalid, please fill out again.")
            return false;
        }
        var phone = document.signUp.phone.value;
        if (phone.length < 10) {
            alert("Phone is invalid, please fill out again.")
            return false;
        }
        document.getElementById("signUp").submit();
    }
    
});

