/*
Écrivez une fonction qui convertit une chaîne en "camelCase"
Cas d'usage: Dans un système de migration de base de données, où les conventions de nommage diffèrent entre l'ancien et le nouveau système. Par exemple, lors de la conversion de noms de colonnes SQL (avec underscores) vers des propriétés JavaScript.
    const sqlColumnName = "user_first_name";
const javascriptProperty = toCamelCase(sqlColumnName);
// Transformation pour l'intégration dans le code : "userFirstName"
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


console.log(toCamelCase("user_first name"));