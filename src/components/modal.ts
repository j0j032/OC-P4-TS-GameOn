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

const fieldInputsConfig: inputConfig[] = [
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



const fieldInput = (name:string, type:string, labelText:string, error:string) => {
    const container: HTMLElement = createElement('div', [{class:'wrapper--field'}], null, null)
    createElement('label', [{for:name},{class:'field--label'}], container, labelText)
    createElement('input', [{type},{name},{id:name},{class:'field--input'}], container, null)
        .addEventListener('input', getCorrectValue )
    createElement('span', [{class:'error'}], container,error)

    return container
}

const radioInput = (id:string, value:string) => {
    const label: HTMLElement = createElement('label', [{for:id},{class:'warpper--label'}], null, value)
    createElement('input', [{type:'radio'},{name:'location'},{value},{id},{class:'checkbox'}], label, null)
        .addEventListener('input', getCorrectValue )
    createElement('span',[{class:'checkmark'}], label, null)


    return label
}

const checkInput = (id:string, value:string) => {
    const label: HTMLElement = createElement('label', [{for:id},{class:'warpper--label'}], null, null)
    createElement('input', [{id},{type:'checkbox'},{class:'checkbox check'}], label, null)
        .addEventListener('input', getCorrectValue )
    createElement('span',[{class:'checkmark check'}], label, value)

    return label
}

const stopPropagation = (e: MouseEvent) => e.stopPropagation()


const modalForm = () => {
    const formContainer:HTMLElement = createElement('div', [{class: 'container--modal'}], null, null)
    const form:HTMLElement = createElement('form', [{class: 'form'}], formContainer, null)

    // Inputs field
    fieldInputsConfig.map(el=> form.appendChild(fieldInput(el.name, el.type, el.labelText, el.error)))

    // Inputs Radio
    const radioSection = createElement('div',[{class:'container--radio'}], form, null)
    createElement('p', [{class:'radio-heading'}], radioSection,'A quel tournoi souhaitez-vous participer cette année ?')
    const radiosInputWrapper = createElement('div', [{class:'wrapper--radio'}], radioSection, null)
    radioInputsConfig.map(el=> radiosInputWrapper.appendChild(radioInput(el.id, el.value)))
    createElement('span', [{class:'error'}], radioSection,'Veuillez devez selectionner une ville')

    // Inputs checkBox
    const checkSection = createElement('div', [{class:'container--check'}], form, null)
    checkInputsConfig.map(el=> checkSection.appendChild(checkInput(el.id, el.value)))
    createElement('span', [{class:'error'}], form,'Veuillez accepter les conditions générales')

    // Submit button
    createElement('input', [{class:'btn'},{type: 'submit'},{value:'c\'est parti'}], formContainer, null)
        .addEventListener('click',submit)

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


