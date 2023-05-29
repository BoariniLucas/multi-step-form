const sidebarStep1 = document.querySelector('#sidebar-step1');
const sidebarStep2 = document.querySelector('#sidebar-step2');
const sidebarStep3 = document.querySelector('#sidebar-step3');
const sidebarStep4 = document.querySelector('#sidebar-step4');

const btnNextStep1 = document.querySelector('#btn-next-step-1');
const btnNextStep2 = document.querySelector('#btn-next-step-2');
const btnGoBack2 = document.querySelector('#btn-go-back2');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputTel = document.querySelector('#input-tel');

const onlineServIput = document.querySelector('#online-service-input');
const lgStorageInput = document.querySelector('#larger-storage-input');
const customizableInput = document.querySelector('#customizable-input');

const rbArcade = document.querySelector('#rb-arcade');
const rbAdvanced = document.querySelector('#rb-advanced');
const rbPro = document.querySelector('#rb-pro');

const timeOption  = "";
const stepForm = 1;

let onlineService = false;
let largerStorage = false;
let customizable  = false;



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

btnNextStep2.addEventListener('click', (e) => {
    e.preventDefault();

    const step2 = document.querySelector('.f-step-2');
    const step3 = document.querySelector('.f-step-3');

    step2.style.display = "none";
    step3.style.display = "flex";

    sidebarStep2.classList.remove('step-selected');
    sidebarStep3.classList.add('step-selected');
});

btnGoBack2.addEventListener('click', (e) => {
    e.preventDefault();

    const step2 = document.querySelector('.f-step-2');
    const step1 = document.querySelector('.f-step-1');    

    step2.style.display = "none";
    step1.style.display = "flex";

    sidebarStep2.classList.remove('step-selected');
    sidebarStep1.classList.add('step-selected');
    
});

onlineServIput.addEventListener('change', () => {

    setItemSelected('#box-online-serv', '#online-service');
    setItemSelectedControl('#box-online-serv');

    console.log('online ' + onlineService);
});

lgStorageInput.addEventListener('change', () => {

    setItemSelected('#box-lg-storage', '#larger-storage');    
    setItemSelectedControl('#box-lg-storage');

    console.log('large ' + largerStorage);
});

customizableInput.addEventListener('change', () => {

    setItemSelected('#box-customizable','#customizable');
    setItemSelectedControl('#box-customizable');

    console.log('custom ' + customizable);
});


function setItemSelected(idBox, idCK) {

    const addOnsItem = document.querySelector(idBox);
    const checkboxDiv = document.querySelector(idCK);

    checkboxDiv.classList.toggle('cb-checked');
    addOnsItem.classList.toggle('box-checked');
}

function setItemSelectedControl(item) {

    const boxSelected = document.querySelector(item);

    if(boxSelected.classList.contains('online')) {
        if(boxSelected.classList.contains('box-checked')) {
            onlineService = true;
        } else {
            onlineService = false;
        }

    } else if(boxSelected.classList.contains('storage')) {
        if(boxSelected.classList.contains('box-checked')) {
            largerStorage = true;
        } else {
            largerStorage = false;
        }
    } else if(boxSelected.classList.contains('custom')) {
        if(boxSelected.classList.contains('box-checked')) {
            customizable = true;
        } else {
            customizable = false;
        }
    }    
}



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

    timeOption = "monthly"
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

    timeOption = "yearly"
}
