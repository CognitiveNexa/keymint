export function checkStringStrength(password: string) {
  let complexity = 0;
  const upperCasePattern = /[A-Z]/;
  const lowerCasePattern = /[a-z]/;
  const numberPattern = /[0-9]/;
  const specialCharPattern = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

  if (password.match(upperCasePattern)) {
    complexity++;
  }
  if (password.match(lowerCasePattern)) {
    complexity++;
  }
  if (password.match(numberPattern)) {
    complexity++;
  }
  if (password.match(specialCharPattern)) {
    complexity++;
  }

  return complexity;
}
