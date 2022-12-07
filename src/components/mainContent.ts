import {createElement} from "../utils/dom";
import {openModal} from "./modal";

const img = 'https://p14hrnet.s3.eu-west-3.amazonaws.com/gameon.jpg'

const textContent = {
    title: 'Marathon national de jeux vidéo',
    text: 'Vous aimez jouer ? Notre prochain évènement gaming est ouvert aux réservations... Places limitées !'
}

export const mainContent = () => {

    const mainContainer:HTMLElement = createElement('main', [{class: 'main-container'}], null, null)

    const leftContainer = createElement('section', [{class: 'main-container--left'}], mainContainer, null)
    const section:HTMLElement = createElement('div', [{class: 'text-box'}], leftContainer, null)
    createElement('h1', [{class:'text-title'}], section, textContent.title)
    createElement('p', [{class:'text-text'}], section, textContent.text)
    createElement('button', [{class:'btn'}], section, 'Je m\'inscris').addEventListener('click', openModal)

    const rightContainer: HTMLElement = createElement('section', [{class:'main-container--right'}], mainContainer, null)
    createElement('img',[{src: img},{alt:'photo de salle de jeux'}], rightContainer, null)

    return mainContainer
}
