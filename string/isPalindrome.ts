/**
 * Fonction pour vérifier si un slogan est un palindrome
 * @param value le slogan publicitaire à tester
 * La fonction retourne une erreur si le slogan est un nombre
 */


export function isPalindrome(value: string): boolean {

    if (typeof (value) !== "string") throw new Error("Value must be a string");

    const cleaned = value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");

    return (cleaned === cleaned.split("").reverse().join(""))
}

