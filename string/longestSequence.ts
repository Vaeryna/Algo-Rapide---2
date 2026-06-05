/**
 * La fonctionr retourne la plus longue séquence de caractères identiques
 * @param input la chaine de caractère à évaluer
 * retourne une erreur si la chaine n'est pas un string
 */
export function longestSequence(input: string): string {
    if (typeof (input) !== "string") throw new Error("Input must be a string");

    let longest = ""
    let current = ""

    for (let i = 0; i < input.length; i++) {
        current += input[i];

        if (current.length > longest.length) {
            longest = current;
        }

        if (input[i] !== input[i + 1]) {
            current = "";
        }
    }
    return longest
}

