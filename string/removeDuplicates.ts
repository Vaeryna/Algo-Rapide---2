/**
 * La fonction supprime les caractères en double consécutifs *
 * @param value la chaine de caractères à nettoyer
 * si la chaine de caractère est un nombre, cela ne modifie pas le message
 */

export function removeDuplicates(value: string): string {
    if (typeof (value) !== "string") throw new Error("Value must be a string");

    let cleanMessage = ""

    for (let i = 0; i < value.length; i++) {

        if (value[i] === value[i - 1] && !/\d/.test(value[i])) continue;

        else cleanMessage += value[i];
    }
    return `Message normalisé: ${cleanMessage}`
}


console.log(removeDuplicates("boooonjrour 455522"))