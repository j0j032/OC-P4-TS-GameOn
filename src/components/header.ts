import {createElement} from "../utils/dom";

export const header = () => {
    const navigationElements: string[] = ['Détails de l\'événement', 'A propos', 'Contact', 'Evènements passés']

    const getLinkAttributes = (link:string):object[] => {
        return [{href: link}, {class: 'header-nav-link'}]
    }

    const container:HTMLElement = createElement('header', [{class: 'header-container'}], null, null)

    createElement('h1', [{class: 'header-logo'}], container, 'GameOn')

    const navigation = createElement('nav', [{class: 'header-nav'}], container, null)
    navigationElements.map(el => createElement('a', getLinkAttributes('/') , navigation, el))

    //burger Menu
    const burgerContainer = createElement('div', [{class:'iconBtn'}], container, null)
    const lineContainer = createElement('div', [{class:'lignes-container'}], burgerContainer, null)
    createElement('div', [{class:'lignes'}], lineContainer, null)
    createElement('div', [{class:'lignes'}], lineContainer, null)
    createElement('div', [{class:'lignes'}], lineContainer, null)


    return container
}
