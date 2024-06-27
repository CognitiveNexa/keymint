export function checkStringStrength(password: string): string {
  let complexity = 0;

  // Criteria for password complexity
  const lengthCriteria = password.length >= 8;
  const lowerLetterCriteria = /[a-z]/.test(password);
  const upperLetterCriteria = /[A-Z]/.test(password);
  const numberCriteria = /\d/.test(password);
  const symbolCriteria = /[@#$%&?]/.test(password);
  const ambiguousCriteria = /[\^&*(){}[\]~]/.test(password);
  const spaceCriteria = /\s/.test(password);
  const similarCriteria = /[iIl1oO0]/.test(password);

  // Assigning points based on criteria met
  if (lengthCriteria) complexity += 1;
  if (lowerLetterCriteria) complexity += 1;
  if (upperLetterCriteria) complexity += 1;
  if (numberCriteria) complexity += 1;
  if (symbolCriteria) complexity += 1;
  if (ambiguousCriteria) complexity += 1;
  if (spaceCriteria) complexity += 1;
  if (!similarCriteria) complexity += 1;

  // Evaluating password strength
  if (complexity <= 2) return "veryWeak";
  if (complexity <= 4) return "weak";
  if (complexity <= 5) return "medium";
  if (complexity <= 6) return "strong";
  return "veryStrong";
}
