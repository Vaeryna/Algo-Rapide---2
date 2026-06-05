// Écrivez une fonction qui masque les caractères d'une chaîne sauf les N derniers
// Cas d'usage: Dans une application bancaire sécurisée, cette fonction est essentielle pour l'affichage des données sensibles dans les relevés de compte et les rapports de transaction
// // Cas d'usage : Masquage partiel d'un numéro de carte bancaire
// const cardNumber = "1234567890123456";
// console.log(maskString(cardNumber, 4)); // "3456"


export function maskString(cardNumber: string, lastNumber: number): string {
    if (typeof (cardNumber) !== "string") throw new Error("Card number must be a string");
    if (typeof (lastNumber) !== "number") throw new Error("Last number must be a number");

    let maskedCardNumber = ""
    for (let i = 0; i < cardNumber.length; i++) {
        if (i < (cardNumber.length - lastNumber) && !/[\-_ .]/.test(cardNumber[i])) maskedCardNumber += "*";
        else maskedCardNumber += cardNumber[i];
    }

    return maskedCardNumber;
}

