const sidebarStep1 = document.querySelector('#sidebar-step1');
const sidebarStep2 = document.querySelector('#sidebar-step2');
const sidebarStep3 = document.querySelector('#sidebar-step3');
const sidebarStep4 = document.querySelector('#sidebar-step4');

const sidebarStep1Mob = document.querySelector('#sidebar-step1-mob');
const sidebarStep2Mob = document.querySelector('#sidebar-step2-mob');
const sidebarStep3Mob = document.querySelector('#sidebar-step3-mob');
const sidebarStep4Mob = document.querySelector('#sidebar-step4-mob');

const btnNextStep1 = document.querySelector('#btn-next-step-1');
const btnNextStep2 = document.querySelector('#btn-next-step-2');
const btnGoBack2 = document.querySelector('#btn-go-back2');
const btnNextStep3 = document.querySelector('#btn-next-step-3');   
const btnGoBack3 = document.querySelector('#btn-go-back3');
const btnNextStep4 = document.querySelector('#btn-next-step-4');   
const btnGoBack4 = document.querySelector('#btn-go-back4');

const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputTel = document.querySelector('#input-tel');

const onlineServIput = document.querySelector('#online-service-input');
const lgStorageInput = document.querySelector('#larger-storage-input');
const customizableInput = document.querySelector('#customizable-input');

const online = document.querySelector('#add-online-price');
const larger = document.querySelector('#add-larger-price');
const custom = document.querySelector('#add-custom-price');

const summaryPlan = document.querySelector('#summary-plan');
const summaryTime = document.querySelector('#summary-time');
const summaryPlanPrice = document.querySelector('#summary-plan-price');

const btnChange = document.querySelector('#btn-change');

let timeOption = "monthly";
let chosenPlan = 1;
let chosenPlanPrice = 9;

let onlineService = false;
let largerStorage = false;
let customizable  = false;

let onlinePrice = 0;
let largerPrice = 0;
let customPrice = 0;



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

        sidebarStep1Mob.classList.remove('step-selected');
        sidebarStep2Mob.classList.add('step-selected');
    }
});

btnNextStep2.addEventListener('click', (e) => {
    e.preventDefault();

    const step2 = document.querySelector('.f-step-2');
    const step3 = document.querySelector('.f-step-3');

    if(timeOption == "monthly" && chosenPlan == 1){

        var x = confirm("Would you like to keep the default option?");
        if (x==true) {
            
            step2.style.display = "none";
            step3.style.display = "flex";
        
            sidebarStep2.classList.remove('step-selected');
            sidebarStep3.classList.add('step-selected');

            sidebarStep2Mob.classList.remove('step-selected');
            sidebarStep3Mob.classList.add('step-selected');
        
            loadAddPrices();
        }
    } else {

        step2.style.display = "none";
        step3.style.display = "flex";
    
        sidebarStep2.classList.remove('step-selected');
        sidebarStep3.classList.add('step-selected');

        sidebarStep2Mob.classList.remove('step-selected');
        sidebarStep3Mob.classList.add('step-selected');
    
        loadAddPrices();
    }
});

btnGoBack2.addEventListener('click', (e) => {
    e.preventDefault();

    const step2 = document.querySelector('.f-step-2');
    const step1 = document.querySelector('.f-step-1');    

    step2.style.display = "none";
    step1.style.display = "flex";

    sidebarStep2.classList.remove('step-selected');
    sidebarStep1.classList.add('step-selected');

    sidebarStep2Mob.classList.remove('step-selected');
    sidebarStep1Mob.classList.add('step-selected');
});

onlineServIput.addEventListener('change', () => {

    setItemSelected('#box-online-serv', '#online-service');
    setItemSelectedControl('#box-online-serv');
});

lgStorageInput.addEventListener('change', () => {

    setItemSelected('#box-lg-storage', '#larger-storage');    
    setItemSelectedControl('#box-lg-storage');
});

customizableInput.addEventListener('change', () => {

    setItemSelected('#box-customizable','#customizable');
    setItemSelectedControl('#box-customizable');
});

btnNextStep3.addEventListener('click', (e) => {
    e.preventDefault();

    const step3 = document.querySelector('.f-step-3');
    const step4 = document.querySelector('.f-step-4');   

    if(!onlineService && !largerStorage && !customizable){

        var x = confirm("Make sure you don't need any add!");
        if (x==false) {
            step3.style.display = "none";
            step4.style.display = "flex";
            
            sidebarStep3.classList.remove('step-selected');
            sidebarStep4.classList.add('step-selected');

            sidebarStep3Mob.classList.remove('step-selected');
            sidebarStep4Mob.classList.add('step-selected')
        
            loadPlanSummary();
            loadAddSummary();
            totalPrice();                        
        }
    } else {

        step3.style.display = "none";
        step4.style.display = "flex";
        
        sidebarStep3.classList.remove('step-selected');
        sidebarStep4.classList.add('step-selected');

        sidebarStep3Mob.classList.remove('step-selected');
        sidebarStep4Mob.classList.add('step-selected');
    
        loadPlanSummary();
        loadAddSummary();
        totalPrice();
    }
});

btnGoBack3.addEventListener('click', (e) => {
    e.preventDefault();

    const step3 = document.querySelector('.f-step-3');
    const step2 = document.querySelector('.f-step-2');    
    
    step3.style.display = "none";
    step2.style.display = "flex";
    
    sidebarStep3.classList.remove('step-selected');
    sidebarStep2.classList.add('step-selected');

    sidebarStep3Mob.classList.remove('step-selected');
    sidebarStep2Mob.classList.add('step-selected');
});

btnNextStep4.addEventListener('click', (e) => {
    e.preventDefault();

    const step4 = document.querySelector('.f-step-4');
    const step5 = document.querySelector('.step-5');
    
    step4.style.display = "none";
    step5.style.display = "flex";
});

btnGoBack4.addEventListener('click', (e) => {
    e.preventDefault();

    const step3 = document.querySelector('.f-step-3');
    const step4 = document.querySelector('.f-step-4');    
    
    step3.style.display = "flex";
    step4.style.display = "none";
    
    sidebarStep4.classList.remove('step-selected');
    sidebarStep3.classList.add('step-selected');

    sidebarStep4Mob.classList.remove('step-selected');
    sidebarStep3Mob.classList.add('step-selected');
});

btnChange.addEventListener('click', () => {

    reloadStep2();
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

    if(inputName.value == "") {
        addAlert(name,inputName);
        nameVal = false;
    } else {
        removeAlert(name,inputName);
        nameVal = true;
    }
    
    if(inputTel.value == "") {
        addAlert(tel,inputTel);
        telVal = false;
    } else {
        removeAlert(tel,inputTel);
        telVal = true;
    }
    
    if(inputEmail.value == "") {
        addAlert(email,inputEmail);
        email.innerHTML = "This field is required";
        emailVal = false;
    
    } else if(formValidationEmail()) {
        removeAlert(email,inputEmail);
        email.innerHTML = "This field is required";
        emailVal = true;
    } else {
    
        addAlert(email,inputEmail);
        emailVal = false; 
        alert("Please check your e-mail");            
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
    chosenPlanPrice = chosenPlanPrice / 10;
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
    chosenPlanPrice = chosenPlanPrice * 10;
}

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

function formValidationEmail() {

    const email = document.querySelector('#span-email');

    const usuario = inputEmail.value.substring(0, inputEmail.value.indexOf("@"));
    const dominio = inputEmail.value.substring(inputEmail.value.indexOf("@")+ 1, inputEmail.value.length);
        
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            removeAlert(email,inputEmail);
            email.innerHTML = "This field is required";
            return true;

            } else {
                addAlert(email,inputEmail);
                email.innerHTML = "Enter a valid email address";
                return false;               
            }       
}

function arcadePlan(){
    chosenPlan = 1;

    if(timeOption != "monthly") {
        setPrice(90);
    } else {
        setPrice(9);
    }
}

function advancedPlan(){
    chosenPlan = 2;

    if(timeOption != "monthly") {
        setPrice(120);
    } else {
        setPrice(12);
    } 
}

function proPlan(){
    chosenPlan = 3;

    if(timeOption != "monthly") {
        setPrice(150);
    } else {
        setPrice(15);
    }
}

function setPrice(planPrice){

    if(timeOption == "monthly") {
        chosenPlanPrice = planPrice;
    } else if(timeOption = "yearly") {
        chosenPlanPrice = planPrice;
    }
}

function loadAddPrices() {

    if(timeOption == "monthly") {
        online.innerHTML = "+$1/mo";
        onlinePrice = 1;

        larger.innerHTML = "+$2/mo";
        largerPrice = 2;

        custom.innerHTML = "+$2/mo";
        customPrice = 2;

    } else if (timeOption  == "yearly") {
        online.innerHTML = "+$10/yr";
        onlinePrice = 10;

        larger.innerHTML = "+$20/yr";
        largerPrice = 20;

        custom.innerHTML = "+$20/yr";
        customPrice = 20;
    }
}

function loadPlanSummary() {

    let time = timePrint();

    summaryTime.innerHTML = timeOption;

    if(chosenPlan == 1) {

        summaryPlan.innerHTML = "Arcade"
        summaryPlanPrice.innerHTML = "$" + chosenPlanPrice + "/" + time;

    } else if(chosenPlan == 2) {

        summaryPlan.innerHTML = "Advanced"
        summaryPlanPrice.innerHTML = "$" + chosenPlanPrice + "/" + time;

    } else if(chosenPlan == 3) {

        summaryPlan.innerHTML = "Pro"
        summaryPlanPrice.innerHTML = "$" + chosenPlanPrice + "/" + time;
    }
}

function loadAddSummary() {
    
    const orderResume = document.querySelector('#order-resume');
    const item = orderResume.getElementsByClassName('add-on-chosen');

    for (let i = 0; i < item.length; i++) {

        item[i].remove();
        i--    
    }    

    if(onlineService) {
        creatAddSummary("Online service", onlinePrice);
    }
    
    if(largerStorage) {
        creatAddSummary("Larger storage", largerPrice);
    }
    
    if(customizable) {
        creatAddSummary("Customizable Profile", customPrice);
    }
}

function creatAddSummary(text, price) {

    const orderResume = document.querySelector('#order-resume');

    const add = document.createElement("div");
    add.classList.add("add-on-chosen")

    const addChosen = document.createElement("p");
    const addChosenPrice = document.createElement("span");

    addChosen.innerHTML = text;
    addChosenPrice.innerHTML = "+$" + price + "/" + timePrint();

    add.appendChild(addChosen);
    add.appendChild(addChosenPrice);

    orderResume.appendChild(add);
}

function timePrint(){

    let time = "";

    if(timeOption == "monthly") {
        time = "mo";
    } else if(timeOption == "yearly") {
        time = "yr";
    }

    return time;
}

function totalPrice() {

    const timeTotal = document.querySelector('#time-total');
    const totalPrice = document.querySelector('#total-price');

    let addOnline = 0;
    let addLarger = 0;
    let addCustom = 0;
    let total = 0;

    if(onlineService) {
        addOnline = onlinePrice;
    }

    if(largerStorage) {
        addLarger = largerPrice;
    }

    if(customizable) {
        addCustom = largerPrice;
    }

    total = chosenPlanPrice + addOnline + addLarger + addCustom

    timeTotal.innerHTML = timeOption;
    totalPrice.innerHTML = "+$" + total + "/" + timePrint();
}

function reloadStep2() {

    const step4 = document.querySelector('.f-step-4');
    const step2 = document.querySelector('.f-step-2');

    step4.style.display = "none";
    step2.style.display = "flex";

    sidebarStep4.classList.remove('step-selected');
    sidebarStep2.classList.add('step-selected');

    sidebarStep4Mob.classList.remove('step-selected');
    sidebarStep2Mob.classList.add('step-selected');
}