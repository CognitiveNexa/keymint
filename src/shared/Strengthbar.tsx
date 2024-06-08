import { Progress } from "@chakra-ui/react";

interface StrengthBarProps {
  strength: number;
}

export default function Strengthbar({ strength }: StrengthBarProps) {
  let colorScheme = "red";

  console.log(strength);

  if (strength >= 25) {
    colorScheme = "orange";
  }

  if (strength >= 50) {
    colorScheme = "yellow";
  }

  if (strength >= 75) {
    colorScheme = "green";
  }

  return <Progress size="xs" value={strength} colorScheme={colorScheme} />;
}
