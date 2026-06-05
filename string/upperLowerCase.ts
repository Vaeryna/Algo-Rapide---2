/**
 * la fonction permet de modifier une chaine pour alterner les lettres majuscule et minuscule
 * @param value est la chaine de caractère à transformer
 * la fonction retourne une erreur si la chaine de caractère n'est pas un string
 */

export function upperLowerCase(value: string): string {

    if (typeof (value) !== "string") throw new Error("Value must be a string");

    let newString = "";

    for (let i = 0; i < value.length; i++) {
        if (i % 2 === 0) newString += value[i]?.toUpperCase()
        else newString += value[i]?.toLowerCase()
    }

    return newString
}
