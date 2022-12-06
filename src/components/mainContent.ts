import {createElement} from "../utils/dom";

const textContent = {
    title: 'Marathon national de jeux vidéo',
    text: 'Vous aimez jouer ? Notre prochain évènement gaming est ouvert aux réservations... Places limitées !'
}

export const mainContent = () => {

    const container:HTMLElement = createElement('main', [{class: 'main-container'}], null, null)
    const section:HTMLElement = createElement('section', [{class: 'main-content'}], container, null)
    const upDiv:HTMLElement = createElement('section', [{class: 'main-updiv'}], section, null)
    createElement('h1', [{class:'main-title'}], upDiv, textContent.title)
    createElement('p', [{class:'main-text'}], upDiv, textContent.text)
    createElement('button', [{class:'main-btn'}], section, 'Je m\'inscris')

    return container
}
