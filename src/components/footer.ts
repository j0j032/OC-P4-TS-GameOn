import {createElement} from "../utils/dom";

export const footer = () => {
    const date = Date.now()
    const dateFormater = (date:number) => {
        return new Date(date).toLocaleDateString('fr-FR', {year: 'numeric'})
    }

    const container:HTMLElement = createElement('footer', [{class: 'footer-container'}], null, null)
    createElement('p', [{class: 'footer-text'}],container, `Copyright 2014-${dateFormater(date)}, GameOn Inc`)

    return container
}
