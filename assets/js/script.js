const btnNextStep1 = document.querySelector("#btn-next-step-1");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputTel = document.querySelector("#input-tel");


/* ---------------------------------- */
/* ------------- Events ------------- */
/* ---------------------------------- */


btnNextStep1.addEventListener('click', (e) => {
    e.preventDefault();

    const validation = formValidation();

    if(validation) {
        console.log("agora tá certo");
        
    } else {
        alert("Check Fields")
    }
});


/* --------------------------------- */
/* ----------- Functions ----------- */
/* --------------------------------- */

function formValidation() {
    
    const name = document.querySelector('#span-name');
    const email = document.querySelector('#span-email');
    const tel = document.querySelector('#span-tel');

    let nameVal = false; 
    let emailVal = false; 
    let telVal = false; 

    for (let i = 0; i < 2; i++) {
        if(inputName.value == "") {
            addAlert(name,inputName);
            nameVal = false;

        } else {
            removeAlert(name,inputName);
            nameVal = true;
        }

        if(inputEmail.value == "") {
            addAlert(email,inputEmail);
            emailVal = false;

        } else {
            removeAlert(email,inputEmail);
            emailVal = true;
        }

        if(inputTel.value == "") {
            addAlert(tel,inputTel);
            telVal = false;

        } else {
            removeAlert(tel,inputTel);
            telVal = true;
        }
    }

    if(nameVal && emailVal && telVal) {
        return true;
    } else {
        return false;
    }

    
}

function addAlert(mAlert, bAlert){
    mAlert.style.visibility = "visible";
    bAlert.classList.add("warningBorder");
}

function removeAlert(mAlert, bAlert){
    mAlert.style.visibility = "hidden";
    bAlert.classList.remove("warningBorder");
}
