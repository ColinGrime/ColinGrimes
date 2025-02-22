import { introText } from "../../../config/settings";

/**
 * Adds the next intro character to the text array.
 * @param text the current text array for the intro text
 * @returns the new text array with the next character added
 */
export function addNextIntroCharacter(text: string[]): string[] {
    if (!text || !introText || text.length === 0 || introText.length === 0) {
        return [""];
    }

    const currLine = text[text.length - 1];
    const currLineIntro = introText[text.length - 1];

    if (currLine.length < currLineIntro.length) {
        return [...text.slice(0, -1), currLine + currLineIntro[currLine.length]];
    } else if (text.length < introText.length) {
        return [...text, ""];
    } else {
        return text;
    }
}

/**
 * Checks if the index's line is the last line with text visible.
 * If there's only one line, it can be empty.
 * @param text the current text array for the intro text
 * @param index the index of the line to check
 * @returns true if the line is the last visible one
 */
export function isLastVisibleLine(text: string[], index: number): boolean {
    const line = text[index];
    if (!line || line.length === 0) {
        return text.length === 1;
    } else if (text.length - 1 === index && line.length > 0) {
        return true;
    } else if (text.length - 2 === index && text[index + 1].length === 0) {
        return true;
    } else {
        return false;
    }
}
