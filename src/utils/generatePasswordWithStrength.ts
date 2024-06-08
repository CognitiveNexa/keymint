import { passwordGenerator } from "./passwordGenerator";

type PasswordStrength = "easy" | "medium" | "strong" | "very strong";

export function generatePassword(
  strength: PasswordStrength,
  length: number
): string {
  let options = {
    lowerLetter: false,
    upperLetter: false,
    number: false,
    symbol: false,
    length,
    excludeDuplicates: true,
    includeSpaces: false,
    excludeSimilar: true,
    includeAmbiguous: false,
  };

  switch (strength) {
    case "easy":
      options.lowerLetter = true;
      break;
    case "medium":
      options.lowerLetter = true;
      options.upperLetter = true;
      break;
    case "strong":
      options.lowerLetter = true;
      options.upperLetter = true;
      options.number = true;
      break;
    case "very strong":
      options.lowerLetter = true;
      options.upperLetter = true;
      options.number = true;
      options.symbol = true;
      break;
    default:
      throw new Error("Invalid password strength");
  }

  return passwordGenerator(options);
}
