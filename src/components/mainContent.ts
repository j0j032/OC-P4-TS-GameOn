import {createElement} from "../utils/dom";
import {openModal} from "./modal";

const textContent = {
    title: 'Marathon national de jeux vidéo',
    text: 'Vous aimez jouer ? Notre prochain évènement gaming est ouvert aux réservations... Places limitées !'
}

export const mainContent = () => {

    const container:HTMLElement = createElement('main', [{class: 'main-container'}], null, null)
    const section:HTMLElement = createElement('section', [{class: 'main-content'}], container, null)
    createElement('h1', [{class:'main-title'}], section, textContent.title)
    createElement('p', [{class:'main-text'}], section, textContent.text)
    createElement('button', [{class:'btn'}], section, 'Je m\'inscris').addEventListener('click', openModal)
    createElement('img',[{src:'https://p14hrnet.s3.eu-west-3.amazonaws.com/gameon.jpg'},{alt:'photo de salle de jeux'}], container, null)
    return container
}
