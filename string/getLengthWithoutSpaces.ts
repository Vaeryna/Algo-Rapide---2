/**
 * Fonction permettant d'obtenir la longueur d'une chaine de caractère après avoir supprimé tous les espaces
 * @param sentence La phrase à analyser
 * @return la longueur de la chaine sans espace
 * @throws {Error} si le paramètre n'est pas une chaine de type string
 */

export function getLengthWithoutSpaces(sentence: string): number {

    if (typeof sentence !== "string") throw new Error("Value must be a string");

    else {
        let words = sentence.split(" ").join("")
        return words.length
    }
}