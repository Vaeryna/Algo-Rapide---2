/**
 *La fonction tronque la chaine de caractères à la longueur voulue et ajoute des points de suspension
 * @param input chaine de caractère à tronquer
 * @param size taille de la chaine de caractère avant les points de suspension
 * Retourne une erreur si la chaine n'est pas un string
 */


export function truncate(input: string, size: number): string {
    if (typeof (input) !== "string") throw new Error("Input must be a string");
    if (typeof (size) !== "number") throw new Error("Size must be a number");

    let splitting = input.split(" ")
    let result = "";

    for (let word of splitting) {
        if (result.length + word.length <= size) result += word + " "
        else return result.trim() + "..."
    }

    return result.trim();
}
