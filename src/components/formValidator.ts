
const namesRegex: RegExp = /^([a-zA-Z]){2,}$/;
const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const numberRegex: RegExp = /^[1-9]$|^0[1-9]$|^1[0-9]$|^20$/;


const isValid = (regex:RegExp, value:string ):boolean => regex.test(value);
const isValidDate = (value:string) => new Date(value) < new Date() && value !== "";

const atLeastOneLocationIsChecked = ():boolean | null => {
    const checkedRadioButtons = document.querySelector("input[name='location']:checked");
    console.log("location selected = ", checkedRadioButtons !== null);
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

const formChecking = ():boolean | null => {
    const firstnameInput = (document.getElementById("firstname") as HTMLInputElement).value
    const lastnameInput = (document.getElementById("lastname") as HTMLInputElement).value
    const emailInput = (document.getElementById("email") as HTMLInputElement).value
    const birthdateInput = (document.getElementById("birthdate") as HTMLInputElement).value
    const quantityInput = (document.getElementById("quantity") as HTMLInputElement).value
    const userConditionsInput = (document.getElementById('checkbox1') as HTMLInputElement)

    return (
        isValid(namesRegex, firstnameInput)
        && isValid(namesRegex, lastnameInput)
        && isValid(namesRegex, lastnameInput)
        && isValid(emailRegex, emailInput)
        && isValidDate(birthdateInput)
        && isValid(numberRegex, quantityInput)
        && atLeastOneLocationIsChecked()
        && userConditionsInput.checked
    )
}



export const submit = (e:MouseEvent) => {
    const form = document.querySelector('.form')
    e.preventDefault()
    console.log(formChecking())
    if (formChecking()) console.log('CHECKED')
    console.log(form)
}
