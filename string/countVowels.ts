/**
 * Fonction qui compte le nombre de voyelles dans une chaine de caractères
 * @param value chaine de caractères
 * les voyelles sont prises en compte avec ou sans accent et majuscule comme minuscule
 * la fonction renvoie une erreur si la chaine n'est pas un string
 */

export function countVowels(value: string): number {

    if (typeof (value) !== "string") throw new Error("Value must be a string");

    let count = 0;

    for (const char of value) {
        if (char.match(/[aeiouyàâäéèêëîïôöùûüÿ]/i)) count++
    }
    return count
}

