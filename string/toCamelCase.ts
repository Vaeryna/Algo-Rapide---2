/**
 * Fonction qui convertit une chaine en camelCase
 * @param value chaine à convertir
 * la fonction renvoie une erreur si la chaine n'est pas un string
 */

export function toCamelCase(value: string): string {

    if (typeof (value) !== "string") throw new Error("Value must be a string");

    let newValue = "";

    if (value) {
        for (let i = 0; i < value.length; i++) {
            if (value[i - 1] == "-" || value[i - 1] == " " || value[i - 1] == "." || value[i - 1] == "_") {
                newValue += (value[i]?.toUpperCase())
            } else
                newValue += (value[i])?.toLowerCase();
        }
    }
    return newValue.replace(/[^a-zA-Z0-9]/g, "")
}
