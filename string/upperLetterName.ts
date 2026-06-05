/**
 * La fonction sert à utiliser le prénom donné par l'utilisateur pour lui renvoyer un "bonjour" personnalisé, avec son prénom écrit dont la première lettre est en majuscule
 * @param name Le prénom de l'utilisateur
 * Si ce n'est pas une chaine de caractère, une erreur est renvoyée
 */

export function UpperLetterName(name: string): string {

    if (typeof (name) !== "string") throw new Error("Value must be a string");
    let upperName = "";

    if (name) {
        for (let i = 0; i < name.length; i++) {
            if (name[i - 1] == "-" || name[i - 1] == " " || name[i - 1] == "." || i === 0) {
                upperName += (name[i]?.toUpperCase())
            } else
                upperName += (name[i])?.toLowerCase();
        }
    }
    return `Bonjour ${upperName}`
}

