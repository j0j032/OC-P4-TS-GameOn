const namesRegex: RegExp = /^([a-zA-Z]){2,}$/;
const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const numberRegex: RegExp = /^[1-9]$|^0[1-9]$|^1[0-9]$|^20$/;

/**
 * Check if input entries match with regex condition
 * @param {string} regex
 * @param {string} value
 * @returns {boolean}
 */
const isValid = (regex:RegExp, value:string) => regex.test(value);

export const getCorrectValue = (e:Event) =>{
    const target = e.target as HTMLInputElement
    console.log(target.value)
}



export const submit = (e:MouseEvent) => {
    e.preventDefault()
    console.log(e)
}
