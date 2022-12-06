import {createElement} from "../utils/dom";
import {App} from "../utils/domLinker";
import {submit} from "./formValidator";

interface inputConfig {
    name: string;
    type: string;
    labelText:string;

}

interface inputCheckConfig {
    value: string;
    id:string;
}

const inputsConfig: inputConfig[] = [
    {
        name: 'firstname',
        type: 'text',
        labelText:'Prénom'
    },
    {
        name: 'lastname',
        type: 'text',
        labelText:'Nom'
    },
    {
        name: 'email',
        type: 'email',
        labelText:'E-mail'
    },
    {
        name: 'birthdate',
        type: 'date',
        labelText:'Date de naissance'
    },
    {
        name: 'quantity',
        type: 'text',
        labelText:'À combien de tournois GameOn avez-vous déjà participé ? '
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



const input = (name:string, type:string, labelText:string) => {
    const container: HTMLElement = createElement('div', [{class:'input-wrapper--text'}], null, null)
    createElement('label', [{for:name},{class:'label-text'}], container, labelText)
    createElement('input', [{type},{name},{id:name},{class:'input-text'}], container, null)

    return container
}

const radioInput = (id:string, value:string) => {
    const container = createElement('div',[{class:'input-inline--wrapper'}],null, null)
    createElement('input', [{type:'radio'},{name:'location'},{value},{id},{class:'input-radio'}], container, null)
    const label: HTMLElement = createElement('label', [{for:id},{class:'label-radio'}], container, value)
    createElement('span',[{class:'input-radio--icon'}], label, null)

    return container
}

const checkInput = (id:string, value:string) => {
    const container = createElement('div',[{class:'input-inline--wrapper'}],null, null)
    createElement('input', [{id},{type:'checkbox'},{class:'input-check'}], container, null)
    const label: HTMLElement = createElement('label', [{for:id},{class:'label-check'}], container, value)
    createElement('span',[{class:'input-check--text'}], label, value)

    return container
}

const stopPropagation = (e: MouseEvent) => e.stopPropagation()


const modalForm = () => {
    const formContainer:HTMLElement = createElement('div', [{class: 'modal-container'}], null, null)
    const form:HTMLElement = createElement('form', [{onSubmit:'submit(e)'}, {class: 'form'}], formContainer, null)

    inputsConfig.map(el=> form.appendChild(input(el.name, el.type, el.labelText)))

    const radiosInputWrapper = createElement('div', [{class:'input-radio--wrapper'}], form, null)
    radioInputsConfig.map(el=> radiosInputWrapper.appendChild(radioInput(el.id, el.value)))

    const checkInputWrapper = createElement('div', [{class:'input-check--wrapper'}], form, null)
    checkInputsConfig.map(el=> checkInputWrapper.appendChild(checkInput(el.id, el.value)))

    createElement('input', [{class:'submit-btn'},{type: 'submit'},{value:'c\'est parti'}], formContainer, null)
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


