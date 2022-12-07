import {createElement, emptyDOM} from "../utils/dom";

const namesRegex: RegExp = /^([a-zA-Z]){2,}$/;
const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const numberRegex: RegExp = /^[1-9]$|^0[1-9]$|^1[0-9]$|^20$/;


const isValid = (regex:RegExp, value:string ):boolean => regex.test(value);
const isValidDate = (value:string) => new Date(value) < new Date() && value !== "";

const atLeastOneLocationIsChecked = ():boolean | null => {
    const checkedRadioButtons = document.querySelector("input[name='location']:checked");
    return checkedRadioButtons !== null;
};

const toggleError = (condition:boolean | null, target:HTMLInputElement | null, textNode: Element | null) => {
    if(condition){
        target?.classList.remove('error')
        textNode?.classList.remove('show')
    }else {
        target?.classList.add('error')
        textNode?.classList.add('show')
    }
}

export const inputCheck = (e:Event, name:string ) =>{
    const textError: Element | null = document.querySelector(`.error.${name}`)
    const target = e.target as HTMLInputElement
    switch (name) {
        case 'birthdate':
        toggleError(isValidDate(target.value), target, textError)
            break;
        case 'email':
        toggleError(isValid(emailRegex,target.value), target, textError)
            break;
        case 'quantity':
        toggleError(isValid(numberRegex,target.value), target, textError)
            break;
        default:
        toggleError(isValid(namesRegex,target.value), target, textError)
    }
}

export const removeSubmitErr = (e:Event) => {
    const errorContainer: HTMLElement | null = document.querySelector('.submit-errors')
    const target = e.target as HTMLInputElement

    if (target.name === 'location'){
        if(errorContainer?.classList.contains('location')) errorContainer?.classList.remove('location')
        if(errorContainer?.classList.contains('both')) errorContainer?.classList.remove('both')
    }
    if (target.name === 'checkbox1'){
        if(errorContainer?.classList.contains('condition')) errorContainer?.classList.remove('condition')
        if(errorContainer?.classList.contains('both')) errorContainer?.classList.remove('both')
    }
}


const formChecking = ():boolean | null => {
    const firstnameInput = (document.getElementById("firstname") as HTMLInputElement)
    const lastnameInput = (document.getElementById("lastname") as HTMLInputElement)
    const emailInput = (document.getElementById("email") as HTMLInputElement)
    const quantityInput = (document.getElementById("quantity") as HTMLInputElement)
    const birthdateInput = (document.getElementById("birthdate") as HTMLInputElement)
    const userConditionsInput = (document.getElementById('checkbox1') as HTMLInputElement)
    const errorContainer: HTMLElement | null = document.querySelector('.submit-errors')

    const inputs: HTMLInputElement[] = [firstnameInput, lastnameInput, emailInput, quantityInput, birthdateInput]

    if(!atLeastOneLocationIsChecked()){
        errorContainer?.classList.add('location')
    }

    if(!userConditionsInput.checked){
        errorContainer?.classList.add('condition')
    }

    if(!userConditionsInput.checked && !atLeastOneLocationIsChecked()){
        errorContainer?.classList.add('both')
    }

    inputs.forEach((el)=>{
        if(el.value === '') el.classList.add('error')
    })


    return (
        isValid(namesRegex, firstnameInput.value)
        && isValid(namesRegex, lastnameInput.value)
        && isValid(namesRegex, lastnameInput.value)
        && isValid(emailRegex, emailInput.value)
        && isValidDate(birthdateInput.value)
        && isValid(numberRegex, quantityInput.value)
        && atLeastOneLocationIsChecked()
        && userConditionsInput.checked
    )
}


export const submit = (e:MouseEvent) => {
    const ModalBG:(HTMLElement | null) = document.getElementById('modal-bg')
    e.preventDefault()
    if (formChecking()){
        emptyDOM(ModalBG)
        createElement('div', [{class:'submit-succeed'}], ModalBG, 'Merci, le formulaire a bien été envoyé')
    }
}
