// Écrivez une fonction qui compte le nombre d'occurrences d'une lettre dans une chaîne
// Cas d'usage: Dans un outil d'analyse de texte pour professeurs de langue, cette fonction permet d'évaluer la fréquence d'utilisation de certaines lettres dans les productions écrites des élèves. Cela peut aider à identifier des difficultés spécifiques ou des patterns d'écriture.

/**
 * fonction qui compte le nombre d'occurrences d'une lettre dans une chaîne
 * @param sentence chaine de caractère où l'on compte les occurrences
 * @param letter lettre recherchée
 * si ce n'est pas une chaine de caractère, une erreur est renvoyée
 */


export function letterOccurrences(sentence: string, letter: string): number {
    if (typeof (sentence) !== "string" || typeof letter !== "string") throw new Error("Sentence and letter must be a string");
    if (letter.length > 1) throw new Error("Letter must contain exactly one character") ;

    let count = 0;
    for (const char of sentence) {
        if (char.toUpperCase() === letter.toUpperCase()) count++
    }
    return count

}
