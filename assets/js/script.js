const sidebarStep1 = document.querySelector('#sidebar-step1');
const sidebarStep2 = document.querySelector('#sidebar-step2');
const sidebarStep3 = document.querySelector('#sidebar-step3');
const sidebarStep4 = document.querySelector('#sidebar-step4');

const btnNextStep1 = document.querySelector('#btn-next-step-1');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputTel = document.querySelector('#input-tel');

const rbArcade = document.querySelector('#rb-arcade');
const rbAdvanced = document.querySelector('#rb-advanced');
const rbPro = document.querySelector('#rb-pro');




const stepForm = 1;


/* ---------------------------------- */
/* ------------- Events ------------- */
/* ---------------------------------- */


btnNextStep1.addEventListener('click', (e) => {
    e.preventDefault();

    const validation = formValidation();

    if(validation) {
        const step1 = document.querySelector('.f-step-1');
        const step2 = document.querySelector('.f-step-2');

        step1.style.display = "none";
        step2.style.display = "flex";

        sidebarStep1.classList.remove('step-selected');
        sidebarStep2.classList.add('step-selected');

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

function addAlert(mAlert, bAlert) {
    mAlert.style.visibility = "visible";
    bAlert.classList.add('warningBorder');
}

function removeAlert(mAlert, bAlert) {
    mAlert.style.visibility = "hidden";
    bAlert.classList.remove('warningBorder');
}

function monthlyPlan() {
    const monthlyPlan = document.querySelector('#monthly-plan');
    const yearlyPlan = document.querySelector('#yearly-plan');
    const plans = document.querySelector('.plans');
    const arcadeValue = document.querySelector('#arcade-value');
    const advancedValue = document.querySelector('#advanced-value');
    const proValue = document.querySelector('#pro-value');


    yearlyPlan.classList.remove('toggle-text-selected');
    monthlyPlan.classList.add('toggle-text-selected');
    plans.classList.remove('yearly-option');
    arcadeValue.innerHTML = "$9/mo";
    advancedValue.innerHTML = "$12/mo";
    proValue.innerHTML = "$15/mo";
}

function yearlyPlan() {
    const monthlyPlan = document.querySelector('#monthly-plan');
    const yearlyPlan = document.querySelector('#yearly-plan');
    const plans = document.querySelector('.plans');
    const arcadeValue = document.querySelector('#arcade-value');
    const advancedValue = document.querySelector('#advanced-value');
    const proValue = document.querySelector('#pro-value');

    monthlyPlan.classList.remove('toggle-text-selected');
    yearlyPlan.classList.add('toggle-text-selected');
    plans.classList.add('yearly-option');
    arcadeValue.innerHTML = "$90/yr";
    advancedValue.innerHTML = "$120/yr";
    proValue.innerHTML = "$150/yr";
}
