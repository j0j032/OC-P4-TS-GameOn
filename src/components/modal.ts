import {createElement} from "../utils/dom";
import {App} from "../utils/domLinker";
import {getCorrectValue, submit} from "./formValidator";

interface inputConfig {
    name: string;
    type: string;
    labelText:string;
    error: string;

}

interface inputCheckConfig {
    value: string;
    id:string;
}

const inputsConfig: inputConfig[] = [
    {
        name: 'firstname',
        type: 'text',
        labelText:'Prénom',
        error:'Doit contenir minimum deux lettres sans chiffres.'
    },
    {
        name: 'lastname',
        type: 'text',
        labelText:'Nom',
        error: 'Doit contenir minimum deux lettres sans chiffres.'
    },
    {
        name: 'email',
        type: 'email',
        labelText:'E-mail',
        error:'Vous devez inscrire une addresse valide'
    },
    {
        name: 'birthdate',
        type: 'date',
        labelText:'Date de naissance',
        error:'Champs requis ne devant pas être supérieur à la date d\'aujourd\'hui.'
    },
    {
        name: 'quantity',
        type: 'text',
        labelText:'À combien de tournois GameOn avez-vous déjà participé ? ',
        error:'Ne peut pas excéder 20'
    }
]

const radioInputsConfig: inputCheckConfig[] = [
    {
        id:'location1',
        value:'New York'
    },
    {
        id:'location2',
        value:'San Francisco'
    },
    {
        id:'location3',
        value:'Seattle'
    },
    {
        id:'location4',
        value:'Chicago'
    },
    {
        id:'location5',
        value:'Boston'
    },
    {
        id:'location6',
        value:'Portland'
    },
]

const checkInputsConfig: inputCheckConfig[] = [
    {
        id: 'checkbox1',
        value: 'J\'ai lu et accepté les conditions d\'utilisation. *'
    },
    {
        id:"checkbox2",
        value:'Je souhaite être prévenu des prochains évènements.'
    }
]



const input = (name:string, type:string, labelText:string, error:string) => {
    const container: HTMLElement = createElement('div', [{class:'input-wrapper--text'}], null, null)
    createElement('label', [{for:name},{class:'label-text'}], container, labelText)
    createElement('input', [{type},{name},{id:name},{class:'input-text'}], container, null)
        .addEventListener('input', getCorrectValue )
    createElement('span', [{class:'error'}], container,error)

    return container
}

const radioInput = (id:string, value:string) => {
    const container = createElement('div',[{class:'input-inline--wrapper'}],null, null)
    createElement('input', [{type:'radio'},{name:'location'},{value},{id},{class:'input-radio'}], container, null)
        .addEventListener('input', getCorrectValue )
    const label: HTMLElement = createElement('label', [{for:id},{class:'label-radio'}], container, value)
    createElement('span',[{class:'input-radio--icon'}], label, null)
    createElement('span', [{class:'error'}], container,'Vous devez selectionner une ville')

    return container
}

const checkInput = (id:string, value:string) => {
    const container = createElement('div',[{class:'input-inline--wrapper'}],null, null)
    createElement('input', [{id},{type:'checkbox'},{class:'input-check'}], container, null)
        .addEventListener('input', getCorrectValue )
    const label: HTMLElement = createElement('label', [{for:id},{class:'label-check'}], container, value)
    createElement('span',[{class:'input-check--text'}], label, value)

    return container
}

const stopPropagation = (e: MouseEvent) => e.stopPropagation()


const modalForm = () => {
    const formContainer:HTMLElement = createElement('div', [{class: 'modal-container'}], null, null)
    const form:HTMLElement = createElement('form', [{class: 'form'}], formContainer, null)

    inputsConfig.map(el=> form.appendChild(input(el.name, el.type, el.labelText, el.error)))

    const radiosInputWrapper = createElement('div', [{class:'input-radio--wrapper'}], form, null)
    radioInputsConfig.map(el=> radiosInputWrapper.appendChild(radioInput(el.id, el.value)))

    const checkInputWrapper = createElement('div', [{class:'input-check--wrapper'}], form, null)
    checkInputsConfig.map(el=> checkInputWrapper.appendChild(checkInput(el.id, el.value)))

    createElement('input', [{class:'submit-btn'},{type: 'submit'},{value:'c\'est parti'}], formContainer, null)
        .addEventListener('click',submit)
    createElement('span', [{class:'error'}], form,'Veuillez accepter les conditions générales')

    formContainer.addEventListener('click', stopPropagation)
    return formContainer
}

const modal = () => {
    const background:HTMLElement = createElement('div', [{id: 'modal-bg'}], null, null)
    const closeModal = () => {
        App?.removeChild(background)
        background.removeEventListener('click', closeModal)
    }
    background.addEventListener('click', closeModal)
    background.appendChild(modalForm())
    return background
}

export const openModal = () => App?.appendChild(modal())


