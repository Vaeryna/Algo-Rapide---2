// Écrivez une fonction qui détermine si une chaîne de caractères se termine par un point d'exclamation.
// Cas d'usage: Analyse de ton dans un service client Entrée : "Je suis très satisfait !" Sortie attendue : true

/**
 * la fonction sert à déterminer si une chaîne de caractères se termine par un point d'exclamation.
 * @param value la chaine de caractère testée
 * @return un booléen si oui ou non la chaine contient un point d'exclamation
 * @throw Error si l'entrée n'est pas une chaine de caractère
 */


export function exclamationMark(value: string): boolean {

    if (typeof value !== "string") throw new Error("Value must be a string")

    return value.endsWith("!")
}

