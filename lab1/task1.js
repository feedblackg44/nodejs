export function alphabetPosition(text) {
    let lowerText = text.toLowerCase()
    let output = "";
    for (let i = 0; i < lowerText.length; i++) {
        if (lowerText.charCodeAt(i) <= 122 && lowerText.charCodeAt(i) >= 97) {
            output += lowerText.charCodeAt(i) - 96;
            output += " ";
        }
    }
    return output.slice(0, -1);
}