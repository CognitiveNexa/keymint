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
