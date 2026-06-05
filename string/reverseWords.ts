/**
 * Fonction qui inverse l'ordre des mots
 * @param words chaine de caractères à inverser
 * si ce n'est pas une chaine de caractère, une erreur est renvoyée
 */

export function reverseWords(words: string): string {

    if (typeof (words) !== "string") throw new Error("Value must be a string");

    return (words.trim().split(/\s+/).reverse()).join(' ')
}