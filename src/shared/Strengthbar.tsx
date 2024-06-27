import { checkStringStrength } from "@/utils/checkStringStrength";
import { Progress } from "@chakra-ui/react";

interface StrengthBarProps {
  password: string;
}

export default function Strengthbar({ password }: StrengthBarProps) {
  const strength = checkStringStrength(password);

  let colorScheme = "red";
  let progressValue = 0;

  if (strength === "weak") {
    colorScheme = "orange";
    progressValue = 25;
  }

  if (strength === "medium") {
    colorScheme = "yellow";
    progressValue = 50;
  }

  if (strength === "strong") {
    colorScheme = "green";
    progressValue = 75;
  }

  if (strength === "veryStrong") {
    colorScheme = "blue";
    progressValue = 100;
  }

  return <Progress size='xs' value={progressValue} colorScheme={colorScheme} />;
}
