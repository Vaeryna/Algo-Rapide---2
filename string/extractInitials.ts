/**
 * Fonction qui permet d'extraire les initiales
 * @param name le nom dont on cherche à extraire les initiales
 * Sur le principe de génération pour des identifiants uniques, il n'y a pas de séparateurs entre les initiales
 */

export function extractInitials(name: string): string {

    if (typeof (name) !== "string") throw new Error("Value must be a string");

    let initials = "";

    name.split(/[\s.-]+/).forEach(string => initials += (string[0]).toUpperCase());

    return initials
}
