/**
 * To create DOM new Element
 * @param {HTMLElement} tag tagName (h1,div,span...)
 * @param {array} attributes set attributes in an array of object: key for attribute type / value for the value of attribute
 * @param {HTMLElement} parent to attach new element to parent
 * @param {*} text to set value of text if needed
 * @returns new element
 */
export const createElement = (tag:string, attributes:object[], parent:(HTMLElement | null), text:(string | null)) => {
    const element = document.createElement(tag)

    // add attributes to an element
    for (const attribute of attributes) {
        const key = Object.keys(attribute)
        // @ts-ignore
        element.setAttribute(key, attribute[key])
    }

    // to add text to an element
    if (text) {
        element.textContent = text
    }

    // to add parent to an element
    if (parent) {
        parent.appendChild(element)
    }

    return element
}

/**
 * Remove all first child from an element quoted in parameter
 * (for lightBox and sort medias)
 * @param {HTMLElement} el - target element html with all first child to remove
 */
export const emptyDOM = (el: HTMLElement | null) => {
    while (el?.firstChild) {
        el.removeChild(el.firstChild)
    }
}
