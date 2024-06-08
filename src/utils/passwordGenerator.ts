/* interface PasswordOptions {
  lowerLetter: boolean;
  upperLetter: boolean;
  number: boolean;
  symbol: boolean;
  length: number;
  excludeDuplicates: boolean;
  includeSpaces: boolean;
  excludeSimilar: boolean;
  includeAmbiguous: boolean;
}

export function passwordGenerator({
  lowerLetter,
  upperLetter,
  number,
  symbol,
  length,
  excludeDuplicates,
  includeSpaces,
  excludeSimilar,
  includeAmbiguous,
}: PasswordOptions): string {
  function getRandomChar(charSet: string): string {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet[randomIndex];
  }

  function shuffleString(str: string): string {
    const arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
  }

  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "@#$%&=?";
  const spaces = " ";
  const similarCharacters = "iIl1oO0";
  const ambiguousCharacters = "^&*(){}[]~";

  let chars = "";
  let password = "";

  if (lowerLetter) chars += lowerLetters;
  if (upperLetter) chars += upperLetters;
  if (number) chars += numbers;
  if (symbol) chars += symbols;
  if (includeSpaces) chars += spaces;
  if (includeAmbiguous) chars += ambiguousCharacters;
  if (excludeSimilar) {
    chars = chars
      .split("")
      .filter((char) => !similarCharacters.includes(char))
      .join("");
  }

  const usedChars = new Set<string>();
  for (let i = 0; i < length; i++) {
    let char = getRandomChar(chars);
    if (excludeDuplicates) {
      while (usedChars.has(char)) {
        char = getRandomChar(chars);
      }
      usedChars.add(char);
    }
    password += char;
  }

  password = shuffleString(password); // Shuffle the characters for randomness

  return password;
}
 */

interface PasswordOptions {
  lowerLetter: boolean;
  upperLetter: boolean;
  number: boolean;
  symbol: boolean;
  length: number;
  excludeDuplicates: boolean;
  includeSpaces: boolean;
  excludeSimilar: boolean;
  includeAmbiguous: boolean;
}

export function passwordGenerator({
  lowerLetter,
  upperLetter,
  number,
  symbol,
  length,
  excludeDuplicates,
  includeSpaces,
  excludeSimilar,
  includeAmbiguous,
}: PasswordOptions): string {
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "@#$%&=?";
  const spaces = " ";
  const similarCharacters = "iIl1oO0";
  const ambiguousCharacters = "^&*(){}[]~";

  let charPool = "";

  if (lowerLetter) charPool += lowerLetters;
  if (upperLetter) charPool += upperLetters;
  if (number) charPool += numbers;
  if (symbol) charPool += symbols;
  if (includeSpaces) charPool += spaces;
  if (includeAmbiguous) charPool += ambiguousCharacters;

  if (excludeSimilar) {
    charPool = charPool
      .split("")
      .filter((char) => !similarCharacters.includes(char))
      .join("");
  }

  if (charPool.length === 0) {
    throw new Error("At least one character type must be selected.");
  }

  if (excludeDuplicates && length > charPool.length) {
    throw new Error("Length exceeds available unique characters.");
  }

  const usedChars = new Set<string>();
  let password = "";

  while (password.length < length) {
    const char = charPool[Math.floor(Math.random() * charPool.length)];
    if (excludeDuplicates) {
      if (!usedChars.has(char)) {
        password += char;
        usedChars.add(char);
      }
    } else {
      password += char;
    }
  }

  return shuffleString(password);
}

function shuffleString(str: string): string {
  const arr = str.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}
